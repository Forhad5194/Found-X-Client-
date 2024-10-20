

import { useMutation } from "@tanstack/react-query";
import { logInUser, registerUser } from "../services/authService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {

    return  useMutation<any, void , FieldValues>({
        mutationKey: ["USER_REGISTER"],
        mutationFn: async(userData) => await  registerUser(userData), 
        onSuccess: () => {
           toast.success("Registration successfully .")
        },
        onError: (error) => {
          toast.error("There was an error with your submission. Please review the form and try again.");
        }
      })
  
};






export const useUserLogin = () => {

    return  useMutation<any, void , FieldValues>({
        mutationKey: ["USER_LOGIN"],
        mutationFn: async(userData) => await  logInUser(userData), 
        onSuccess: () => {
           toast.success("login successfully .")
        },
        onError: (error) => {
          toast.error("There was an error with your submission. Please review the form and try again.");
        }
      })
  
};















