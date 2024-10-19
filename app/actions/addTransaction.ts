'use server'

interface TransactionData {
    text:string;
    amount:number;

}

interface TransactionResult{
    data?:TransactionData
    error?:string
    
}