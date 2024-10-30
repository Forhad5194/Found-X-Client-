import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, button} from "@nextui-org/react";
import React from "react";





interface IProps {
    buttonText: string;
    title: string;
    children: React.ReactNode; 
    buttonVariant?: "light" | "solid" | "bordered" | "flat" | "faded" | "shadow" | "ghost" | undefined
    buttonClassName?: string;
  
}
export default function FXModal({buttonText , title, children , buttonVariant="light" , buttonClassName} : IProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className={buttonClassName} variant={buttonVariant} onPress={onOpen}>{buttonText}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}