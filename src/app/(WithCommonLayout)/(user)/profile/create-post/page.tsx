"use client";


import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import FXinput from "@/src/components/form/FXinput";
import FXdatePicker from "@/src/components/form/FXdatePicker";

export default function page() {
  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  return ( 
     <>
     
     <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
       <h2 className="text-2xl flex justify-center mb-5">Post a found item . </h2>
       <Divider className="mb-5" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXinput  name="title" label="Title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXdatePicker label="Found Date" name="dateFound" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXinput  name="loction" label="Location" />
            </div>
            <div className="min-w-fit flex-1">
              <FXinput  name="city" label="City" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXinput  name="category" label="Category" />
            </div>
            <div className="min-w-fit flex-1">
              <FXinput  name="date" label="Date" />
            </div>
          </div>

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center">
              <FXinput name={`questions.${index}.value`} label="Question" />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}

          <Divider className="my-5" />

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
     
     
     
     </>
  );
}