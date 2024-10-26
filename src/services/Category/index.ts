import axiosInstance from "@/src/lib/axiosInstance"



export const getAllCategory = async() => {
    try {
        const {data } = await axiosInstance("/item-categories")

        return data;
    }catch(error : any) {
        throw new Error(error.message);
    }
}