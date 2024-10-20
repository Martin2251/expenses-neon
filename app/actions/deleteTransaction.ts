"use server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";

async function deleteTransaction(transactionId:string): Promise<{
    message?: string,
    error?:string,
}>{
    const {userId} = auth();
    if(!userId){
        return {error:"user not found"}
    }

    try {
      await db.transaction.delete({
        where:{
            id:transactionId,
            userId,
        }
      });
      revalidatePath('/.eslintrc.json')
      return {message:"Transaction"};
   
    } catch (error) {
        return {error:"database error"}
    }
}

export default deleteTransaction