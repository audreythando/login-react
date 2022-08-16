import React, { useState } from 'react'
import {
  Heading,
  Input,
  Box,
  Image,
  Flex,
  useDisclosure,
  Center
} from '@chakra-ui/react'
import Details from '../Details/Details';


function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  
  const changeFullNameHandler = (e: React.ChangeEvent<any>): void => {
    setFullName(e.target.value)
  }

  const changeEmailHandler = (e: React.ChangeEvent<any>): void => {
    setEmail(e.target.value)
  }
  const changePasswordHandler = (e: React.ChangeEvent<any>): void => {
    setPassword(e.target.value)

  

  }
  return (

    <Flex maxW='100%' justify='center'>
      
      <Center height='-webkit-fit-content'>
        <Image src='./Images/picture.png' />
      </Center>
    

      <Center flexDirection='column' width='50%' height='-webkit-fit-content' background='#F7F8FF'>
      


        <Box>
          <Heading
            fontFamily='Roboto' fontWeight='700'
            size='30px' width='132px' height='75px' letterSpacing='15%' lineHeight='30px' mt='50px' >

            Login
          </Heading>
        </Box>

        <Box>
          <Image src='./Images/logo.png' alt='logo' width='313px' height='158px' mt='15px' />
        </Box>


        <Box>
          <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)} placeholder='email' value={email} width='434px'  top='89px'/>
        </Box>

        <Box>
          <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)} placeholder='Password' value={password} width='434px'  top='89px'/>
        </Box>

        <Box display='flex' alignItems='center'>
          
        <Details name={fullName} email={email} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        
        </Box>

        <h2 text-align='center' color=' #000000' font-family='Roboto' font-style='normal' font-size='13px' font-weight='100' line-height='40px'>Do not have an account ? SignUp</h2>
    

      </Center>

    </Flex>




  )
}

export default Form
