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
    Box,
    Image,
    Input,
    Flex,
    Center
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

interface ModalDetails {
    name: string,
    email: string,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}


function DetailModal(props: ModalDetails) {

    let navigate = useNavigate();

    const closeModal = () => {
        props.onClose();
        navigate("/login");
    }


    return (
        <Box>
            <Button onClick={props.onOpen} background='#DD6B20' mt='15px' left='25px' width='434px'
                borderRadius='15px' height='53px' marginTop='100px'>SignUp</Button>

            <Modal isOpen={props.isOpen} onClose={closeModal} >
                <ModalOverlay />
                <ModalContent background='#F7F8FF' width='fit-content' height='450px' borderRadius='90px'>


                    <Flex maxW='100%' justify='center'>
                        <Center flexDirection='column'>
                            <Box>
                                <Image src='./Images/logo.png' alt='logo' width='204px' height='66px'  />
                            </Box>


                            <ModalHeader mt='50px' alignContent='center'> User Added</ModalHeader>
                        </Center>
                    </Flex>

                    <ModalCloseButton />
                    <ModalBody>





                        <Input value={props.name} variant='flushed' placeholder='Fullname' alignItems='center' fontFamily='Roboto' fontWeight={'100'} size={'18px'}
                            margin='25px' width='-moz-fit-content' />

                        <Input value={props.email} variant='flushed' placeholder='Email' alignItems='center' fontFamily='Roboto' fontWeight={'100'} size={'18px'}
                            margin='25px' width='-moz-fit-content' />



                    </ModalBody>

                    <ModalFooter>
                        <Button background={'#DD6B20'} borderRadius={'15px'} width={'350px'} height={'53px'} mb={'130px'} position={'absolute'} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>



        </Box>
    )
}

export default DetailModal;