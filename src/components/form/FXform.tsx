"use client"
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */

import { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface formConfig {
    defultValues?:Record<string, any> ;
    resolver?: any;
 
}


interface Ipops extends formConfig {
    children : ReactNode;
    onSubmit : SubmitHandler <any>
}







export default function FXform({children , onSubmit, defultValues , resolver}: Ipops) {

    const formConfig : formConfig = {}
    if(!!defultValues){
        formConfig["defultValues"] = defultValues;
    }
    if(!!resolver){
        formConfig["resolver"] = resolver;
    }



    const methods = useForm(formConfig);
    const submitHandler = methods.handleSubmit;

    return (
                <FormProvider {...methods}>
                 <form onSubmit={submitHandler(onSubmit)}>{children}</form> 
                </FormProvider>
            );
}
