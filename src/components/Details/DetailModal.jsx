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
import { useNavigate } from "react-router-dom";



function DetailModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    const closeModal = () => {
        onClose();
        navigate("/login");
    }

    return (
        <div>
            <Button onClick={onOpen} >SignUp</Button>
            


            <Modal isOpen={isOpen} onClose={closeModal}>        
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
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>        
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



        </div>
    )
}

export default DetailModal;