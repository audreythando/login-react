import React, { useState } from 'react'
import {
  FormControl,
  Heading,
  Box,
  Input, 
  Image,
  Container
} from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react"
import DetailModal from '../Details/DetailModal';


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsernameHandler = (e: React.ChangeEvent<any>): void => {
    setUsername(e.target.value)
  }
  const changeEmailHandler = (e: React.ChangeEvent<any>): void => {
    setEmail(e.target.value)
  }
  const changePasswordHandler = (e: React.ChangeEvent<any>): void => {
    setPassword(e.target.value)

  }


  const submit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
  }

  

  return (

    <Container>

    <Flex align="center" justify="center">

    <Box width={'50%'}>
  <Image src='./Images/picture.png' alt= 'picture' width={'727px'} height={'817px'} position={'absolute'} right={'700px'} mb={'150px'}/>  
  </Box>

      <div>
        <Heading width={'132px'} height={'75px'} top={'925px'} alignContent={'center'}
        left={'159px'} fontFamily={'Roboto'} fontWeight={'700'}
        size={'30px'} lineHeight={'30px'} alignItems={'center'} letterSpacing={'15%'}>
          SignUp
        </Heading>


        
  <Image src='./Images/logo.png' alt='logo'mb={'250px'} width={'313px'} height={'158px'} position= {'absolute'} />


        <Box mt={'150px'} >
          <FormControl onSubmit={submit}>
          
            <Input onChange={(e: React.ChangeEvent<any>): void  => changeUsernameHandler(e)} placeholder='Username' value={username} variant='flushed'  />
            <Input onChange={(e: React.ChangeEvent<any>): void  => changeEmailHandler(e)} placeholder='Password' value={email} variant='flushed'  />
            <Input onChange={(e:React.ChangeEvent<any>): void => changePasswordHandler(e)} placeholder='Password' value={password} variant='flushed'  />
            
  
           
          </FormControl>
        </Box>

        <DetailModal name={username} email={email} password={password} />
</div>

</Flex>
</Container>


  )
}

export default SignUp
