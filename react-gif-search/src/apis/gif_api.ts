
import axios from "axios"
import { Gif } from "../ducks/gif_reducer"
import * as config from "./config"

const BASE_URL = "https://api.tenor.com/v1"

export async function getGifs(keyword : string) : Promise<Gif[]>{
    const url = `${BASE_URL}/search?q=${keyword}&key=${config.apiKey}`;
    try{
        const res = await axios.get(url)
        const gifs = res.data.results.map((result : any) => result.media.map((medium : any)=> medium.gif as Gif)[0])
        return gifs
    }catch(err){
        throw Error("Failed to get gifs")
    }
}
