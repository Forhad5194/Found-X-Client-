import envConfig from "@/src/config/envConfig"
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async() => {
     
    const fetchOptions = {
        next: {
            tags: ["post"],
        }
    }





    const res = await fetch(`${envConfig.baseApi}/items?sortBy=-title&limit=9`,
        fetchOptions, 
        
    )



   
    await delay(2000)
    return res.json();

}