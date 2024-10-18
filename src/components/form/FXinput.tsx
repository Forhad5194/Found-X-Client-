"use client"
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
interface IProps {
    variant?: "flat" | "bordered" | "faded" | "underlined"
    size?: "sm" | "md" | "lg",
    required?: boolean,
    type?: string,
    label?: string,
    name: string,

}





const FXinput = ({ variant = "bordered", size = "md", required = false, type = "text", label, name }: IProps) => {
    const {register , formState: {errors}} = useFormContext();
    return (
        <Input
                {...register(name)}
                errorMessage= {errors[name]?(errors[name].message as string) :""}
                isInvalid={!!errors[name]}
                variant={variant}
                size={size}
                required={required}
                type={type}
                label={label}
        
        
            />
    );
};

export default FXinput;


// export default function FXinput(: IProps) {

//     const { register } = useFormContext()
//     return 
// }