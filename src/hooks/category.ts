
import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../services/Category";



export const useGetCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => await getAllCategory(),
  });
};