import React, { useState } from 'react'
import {
  Flex,
  Heading,
  Box,
  Input,
  Image,
  Center,
  useDisclosure,
  InputRightElement,
  InputGroup,
  useMediaQuery,
  Text
} from '@chakra-ui/react'
import DetailModal from '../Details/DetailModal';
import { ViewOffIcon, TriangleDownIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isMobile] = useMediaQuery('(max-width: 600px)')

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

  
  let navigate = useNavigate();

    
  const BackToLogin = () => {
    navigate("/login");
  }

  return (
    <Flex direction={isMobile ? 'column-reverse' : 'row'}  justify='center'>

      <Center width={isMobile ? '100%' : '50%'}>
        <Image src='./Images/picture.png' />
      </Center>

  
      <Box width= {isMobile ? '100%' : '50%'} background='#F7F8FF'>
      <Flex direction='row' justify='space-between'>
        <Box></Box>
        <Box>
          <h5>English UK <TriangleDownIcon color='black' /></h5>
        </Box>
      </Flex>

        <Center flexDirection='column' height='-webkit-fit-content'>
          <Box>
            <Heading
              fontFamily='Roboto' fontWeight='700'
              size='30px' mt='30px' mb='15px' >
              Sign Up
            </Heading>
          </Box>

          <Box>
            <Image src='./Images/logo.png' alt='logo' width='313px' height='158px' />
          </Box>

          <Box>
            <InputGroup>
              <InputRightElement
                pointerEvents='none'
              />
              <Input variant='flushed' placeholder='Fullname' onChange={(e: React.ChangeEvent<any>): void => changeFullNameHandler(e)}
                value={fullName} width='250px' />
            </InputGroup>

          </Box>

          <Box>
            <InputGroup>
              <InputRightElement
                pointerEvents='none'
              />
              <Input variant='flushed' placeholder='Email' onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)}
                value={email} width='250px' />
            </InputGroup>

          </Box>

          <Box>
            <InputGroup>
              <InputRightElement
                pointerEvents='none'
                children={<ViewOffIcon color='gray.300' />}
              />
              <Input variant='flushed' type='password' placeholder='Password' onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)}
                value={password} width='250px' />
            </InputGroup>

          </Box>



          <Box display='flex' alignItems='center'>

            <DetailModal name={fullName} email={email} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />

          </Box>

          <Text onClick={BackToLogin} text-align='center' color=' #000000' font-family='Roboto' font-style='normal' font-size='13px' font-weight='100' line-height='40px'>Already have an account ? Login</Text>


        </Center>
      </Box>

    </Flex>



  )
}

export default SignUp
