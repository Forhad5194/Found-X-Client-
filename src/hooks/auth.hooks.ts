import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/authService";
import Swal from "sweetalert2";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


export const useUserRegistration = () => {

    return  useMutation<any, void , FieldValues>({
        mutationKey: ["USER_REGISTER"],
        mutationFn: async(userData) => await  registerUser(userData), 
        onSuccess: () => {
           toast.success("Registration successfully .")
        }
      })
  
}