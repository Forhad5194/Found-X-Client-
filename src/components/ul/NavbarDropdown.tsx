'use client';
import { protectedRoute } from "@/src/constant";
import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/hooks/auth.jwt";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";


const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname()
  const {user,setIsLoading : userLoading} = useUser()
  
  const handleLogut = () =>{
    logout();
    if(protectedRoute.some((route) => pathname.match(route))){
       router.push('/')
    }
    userLoading(true);
  }
  const  handleNevigation  = (prthName : string) => {
    router.push(prthName);
 }
    return (
        <Dropdown>
        <DropdownTrigger>
         <Avatar className="cursor-pointer" src={user?.profilePhoto} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={()=> handleNevigation("/profile")} key="new">Profile</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/create-post")}key="copy">Create Post</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/about")}key="edit">Account About</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/settings")}key="edit">Settings</DropdownItem>
          <DropdownItem onClick={()=>handleLogut()}   key="delete" className="text-danger" color="danger">
            logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
};

export default NavbarDropdown;