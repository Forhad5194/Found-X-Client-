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
import dateToIso from "@/src/utils/dateToISO";
import dateToISO from "@/src/utils/dateToISO";
import FXSelect from "@/src/components/form/FXSelect";
import { allDivision } from "@bangladeshi/bangladesh-address"
import { useGetCategory } from "@/src/hooks/category";
import { useState } from "react";
import FXTextarea from "@/src/components/form/FXTextArea";
import { useUser } from "@/src/context/user.provider";


const cityOptions = allDivision().sort().map((city: string) => ({
  key: city,
  label: city,
}))















export default function page() {



  const [imagesFiles, setImageFile] = useState<File[] | []>([])
  const [imagesPreviwes, setImagesPreviwes] = useState<string[] | []>([])


  console.log(imagesPreviwes)







  const { data: category, isLoading: categoryLoading, isSuccess: categorySuccess } = useGetCategory();

  let categoryOption: { key: string, label: string }[] = [];

  if (category?.data && !categoryLoading) {
    categoryOption = category.data.sort().map((cat: { _id: string, name: string }) => ({
      key: cat._id,
      label: cat.name,
    }));
  }

  const methods = useForm();

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const {user} = useUser()







  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
      user : user!._id

    };

    console.log(postData);
  };


  const handleImageChange = (e: any) => {
    const file = e.target.files![0]

    setImageFile((prev) => [...prev, file])

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagesPreviwes((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file);
    }









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
                <FXinput name="title" label="Title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXdatePicker label="Found Date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXinput name="loction" label="Location" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect name="city" label="City" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect name="category" disabled={!categorySuccess} label="category" options={categoryOption} />
              </div>
              <div className="min-w-fit flex-1">
                <label className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400" htmlFor="image">
                  Upload Image
                  <input onChange={(e) => handleImageChange(e)} className="hidden" multiple type="file" id="image" />
                </label>
              </div>

            </div>
            <div className="flex gap-5 my-5 flex-wrap">  {

              imagesPreviwes.length > 0 && imagesPreviwes.map((imageDataUrl) => (
                <div
                  key={imageDataUrl}
                  className="relative h-48 w-48 rounded-xl border-2 border-dashed border-default-300 p-2 "


                >
                  <img className="h-full w-full object-cover object-center rounded-md " src={imageDataUrl} />
                </div>
              ))


            }
            </div>



            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXTextarea label="Description" name="description" />
              </div>
            </div>






            <Divider className="my-5" />

            <div className="flex justify-between items-center">
              <h1 className="text-xl">Owner verification questions</h1>
              <Button onClick={() => handleFieldAppend()}>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>



              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-5 ">
                <FXinput name={`questions.${index}.value`} label="Question" />
                <div className="my-8" onClick={() => remove(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" cursor-pointer text-red-500  size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </div>
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