import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Image,
  Box,
  Flex,
  Center
} from '@chakra-ui/react'

interface ModalDetails {
  email: string,
  name: string,
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

function Details(props: ModalDetails) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState<string | null | number>('')

  return (
    <div>
      <Button onClick={onOpen} background='#DD6B20' mt='15px' left='25px' width='434px'
        borderRadius='15px' height='53px' marginTop='150px'>Login</Button>


      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent background='#F7F8FF' width='fit-content' height='450px' borderRadius='90px'>

          <Flex maxW='100%' justify='center'>
            <Center flexDirection='column'>
              <Box>
                <Image src='./Images/logo.png' alt='logo' width='204px' height='66px' />
              </Box>


              <ModalHeader mt='50px' alignContent='center'>User Name</ModalHeader>
            </Center>
          </Flex>


          <ModalCloseButton />
          <ModalBody>



            <Input value={props.name} variant='flushed' placeholder='Fullname' alignItems='center' fontFamily='Roboto' fontWeight='100' size='18px'
              margin='25px' width='-moz-fit-content' />

            <Input value={props.email} variant='flushed' placeholder='Email' alignItems='center' fontFamily='Roboto' fontWeight='100' size='18px'
              margin='25px' width='-moz-fit-content' />



          </ModalBody>

          <ModalFooter>
            <Button background='#DD6B20' borderRadius='15px' width='350px' height='53px' mb='130px' position='absolute' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



    </div>
  )
}

export default Details