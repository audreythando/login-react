import React from 'react';
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


function Info(props) {
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
           <p>{props.name}</p>
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

export default Info

