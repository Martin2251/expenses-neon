'use server'

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
}