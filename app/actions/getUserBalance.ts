"use server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { Trykker } from "next/font/google";

async function getUserBalance(): Promise<{
    balance?: number,
    error?:string,
}>{
    const {userId} = auth();
    if(!userId){
        return {error:"user not found"}
    }

    try {
        const transactions = await db.transaction.findMany({
            where:{userId

            }
        })
    } catch (error) {
        
    }
}