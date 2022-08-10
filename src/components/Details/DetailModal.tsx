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

interface ModalDetails {
    name: string,
    email: string,
    password: string,
}

function DetailModal(props: ModalDetails) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let navigate = useNavigate();

    const closeModal = () => {
        onClose();
        navigate("/login");
    }

    return (
        <div>
            <Button onClick={onOpen} background={'#DD6B20'} mt={'15px'} position={'absolute'} width={'434px'}
            borderRadius={'15px'} height={'53px'}> SignUp</Button>

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