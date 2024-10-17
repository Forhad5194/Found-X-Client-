import envConfig from "@/src/config/envConfig"
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async() => {
    const res = await fetch(`${envConfig.baseApi}/items?sortBy=-title&limit=9`,{
        cache:"no-store"
    })



   
    await delay(2000)
    return res.json();

}