import PostRepositoryImpl from "../post_repository"
import firebase from "firebase"

export type Post = {
        content: string;
        tag: string;
        created_at: number;
        local_category: string;
        image_urls: string[];
        univ_category: string;
        id: string;
        writer_id: string;
}

export const fromJSON = (data : firebase.firestore.DocumentData) : Post=>{
    const json = data
    return {
        content: json["content"],
        tag: json["tag"],
        created_at: json["created_at"],
        local_category: json["local_category"],
        image_urls: json["image_urls"],
        univ_category: json["univ_category"],
        id: json["id"],
        writer_id: json["writer_id"],
    }
}
