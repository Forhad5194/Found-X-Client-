"use client"

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";


const NavbarDropdown = () => {
  const router = useRouter();
  const  handleNevigation  = (prthName : string) => {
     router.push(prthName);
  }
    return (
        <Dropdown>
        <DropdownTrigger>
         <Avatar className="cursor-pointer" name="FH" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={()=> handleNevigation("/profile")} key="new">Profile</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/create-post")}key="copy">Create Post</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/about")}key="edit">Account About</DropdownItem>
          <DropdownItem  onClick={()=> handleNevigation("/profile/settings")}key="edit">Settings</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
};

export default NavbarDropdown;