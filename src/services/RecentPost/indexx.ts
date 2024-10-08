import envConfig from "@/src/config/envConfig"
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async() => {
    const res = await fetch(`${envConfig.baseApi}/items?sortBy=-title&limit=9`)

    await delay(2000)
    return res.json();
}