import FXform from "@/src/components/form/FXform";
import FXinput from "@/src/components/form/FXinput";
import { Button } from "@nextui-org/button";
import Link from "next/link";


const registerPage = () => {
    return (
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
            <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXform>
         
        
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