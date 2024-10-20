"use server"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

async function getUserBalance(): Promise<{
    balance?: number,
    error?:string,
}>