"use server"
import axiosInstance from "@/src/lib/axiosInstance"
import { revalidateTag } from "next/cache"

export const createPost = async( formData : FormData):Promise<any> => {

    try {
         const {data} = await axiosInstance.post("/items" , formData , {
             headers: {
                 "Content-Type": "multipart/form-data"
             }
         })
         revalidateTag("post")
         return data;
    } catch (error) {
        throw new Error("Failed to create post")
    }

}