import { fromJSON, Post } from "./model/post";
import db from "./database/firestore";


export default async function getAllPostsApi() : Promise<Post[]>{
    
    try{
        const qs  = await db.collection("Post_backup").get()
        const posts : Post[]= qs.docs.map((ds)  => fromJSON(ds.data()));
        return  posts;
    }catch(e){
        throw new Error(`Failed to load posts => ${e}`)
    }
    
}