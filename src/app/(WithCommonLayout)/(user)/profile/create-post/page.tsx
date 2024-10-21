"use client"

import FXinput from "@/src/components/form/FXinput";
import { Button } from "@nextui-org/button";
import { FieldValues, FormProvider, SubmitErrorHandler, useFieldArray, useForm } from "react-hook-form";

const page = () => {
    const mathads = useForm()
    const {control , handleSubmit} = mathads;
    const {} = useFieldArray({
        control,
        name: "question",
    });

    const onSubmit : SubmitErrorHandler<FieldValues> = (data) => {
        console.log(data);
    };

    return (
        <div>
            <FormProvider {...mathads}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FXinput name="title" label="Title" />
                    <Button type="submit" > Post</Button>

                </form>

            </FormProvider>
        </div>
    );
};

export default page;