'use server'
import { auth } from "@clerk/nextjs/server";

interface TransactionData {
    text:string;
    amount:number;

}

interface TransactionResult{
    data?:TransactionData
    error?:string
    
}

async function addTransaction (formData:FormData): Promise <TransactionResult>{
    const textValue = formData.get('text')
    const amountValue = formData.get('amount')

    //Check for input values

    if(!textValue || textValue === '' || !amountValue){
        return {error: 'Please enter both text and amount'}
    }

    const text:string = textValue.toString();
    const amount:number = parseFloat(amountValue.toString());
    // parse amount as number

    // get logged in user 
    const {userId} = auth();
    console.log(userId)

    const transactionData: TransactionData = {
        text,
        amount
    }

    return{data: transactionData}
}

export default addTransaction