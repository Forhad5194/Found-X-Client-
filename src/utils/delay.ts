import { resolve } from "path"

 export const delay = async(ms=2000)  => {
   return await new Promise((resolve) => setTimeout(resolve ,ms))
}