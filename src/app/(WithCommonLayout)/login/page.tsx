/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
'use client';

import { Button } from "@nextui-org/button";
import FXform from "@/src/components/form/FXform";
import FXinput from "@/src/components/form/FXinput";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas/login.schemas";
import {  FieldValues, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useUserLogin } from "@/src/hooks/auth";
import Loading from "@/src/components/ul/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/src/context/user.provider";

const logInPgae = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {setIsLoading : userLoading} = useUser();
    const redirect = searchParams.get("redirect");

    const {mutate : handleUserLogin , isPending , isSuccess} = useUserLogin()

    const onSubmit :SubmitHandler<FieldValues>  = (data) => {
       handleUserLogin(data)
       userLoading(true)
    }
    
    useEffect(()=> {
        if(!isPending && isSuccess){
            if(redirect){
                router.push(redirect)
            }else{
                router.push("/")
            }
        }
    },[isPending, isSuccess])





    return (
       <>
        {
            isPending && <Loading />
        }
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
            <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
            <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
            <div className="w-[35%]">

                <FXform onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                    <div className="py-3">
                        <FXinput name="email" label="Email" type="email" />
                    </div>
                    <div className="py-3">
                        <FXinput name="password" label="Password" type="password" />
                    </div>


                <Button className="my-3 w-full rounded-md bg-default-900 font-semibold text-default" size="lg" type="submit">
                    Login
                </Button>
                </FXform>







                <div className="text-center">
                    Don&lsquo;t have account ? <Link href='/register'>Register</Link>
                </div>
            </div>


        </div>
       </>
    );
};

export default logInPgae;