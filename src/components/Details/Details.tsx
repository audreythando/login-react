import React  from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'


interface ModalDetails{
  email: string,
  password: string,
}

function Details(props: ModalDetails) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
    <Button onClick={onOpen}>Login</Button>


    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
           <p>{props.email}</p>
           <p>{props.password}</p>

        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
      
    
      
    </div>
  )
    }

export default Details