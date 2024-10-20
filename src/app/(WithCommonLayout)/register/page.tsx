"use client"
import FXform from "@/src/components/form/FXform";
import FXinput from "@/src/components/form/FXinput";
import { useUserRegistration } from "@/src/hooks/auth";
import { registerUser } from "@/src/services/authService";
import { Button } from "@nextui-org/button";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";


const registerPage = () => {


  const {mutate:  handleRegister} = useUserRegistration()

    



  const onSubmit :SubmitHandler<FieldValues>  = (data) => {
     const userData = {
          ...data, 
          profilePhoto: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
     }

    console.log("User is registered", userData)
    
    handleRegister(userData)
 }





    return (
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
            <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
           <p className="mb-4">Help Lost Items Find Their Way Home</p>
             <div className="w-[35%]">
        <FXform 
        
        
        onSubmit={onSubmit}
        
        //! Only for development
        
        
        
        >
         
        
          <div className="py-3">
            <FXinput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXinput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXinput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXinput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXform>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
        </div>
    );
};

export default registerPage;