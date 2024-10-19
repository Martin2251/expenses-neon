import {currentUser} from "@clerk/nextjs/server"
import {db} from "@/lib/db"

export const checkUser = async () =>{
    const user = await currentUser();
    if(!user){
        return null
    }

    // cehck if the user is already in the db
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    });

    //if user is in db retune user 

    if(loggedInUser){
        return loggedInUser
    }
}