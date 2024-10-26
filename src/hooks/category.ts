import { useQuery } from "@tanstack/react-query"
import { getAllCategory } from "../services/Category"

export const useGetCategory = () => {
    return useQuery({
        queryKey: ["GET_CATEGORYS"],
        queryFn: async () => getAllCategory()
    
    
    
    
    })
}