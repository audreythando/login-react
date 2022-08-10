import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Heading,
  Box,
  Input
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

    <Flex align="center" justify="center">
      <div>
        <Heading as='h2' size='2xl' mb='24px'>
          SignUp
        </Heading>
        <Box >
          <FormControl onSubmit={submit}>
          
            <Input onChange={(e:any) => changeUsernameHandler(e)} placeholder='Username' value={username} variant='flushed'  />
            <Input onChange={(e:any) => changeEmailHandler(e)} placeholder='Password' value={email} variant='flushed'  />
            <Input onChange={(e:any) => changePasswordHandler(e)} placeholder='Password' value={password} variant='flushed'  />

           
          </FormControl>
        </Box>

        {/* <Button onClick={() => {
          navigate("/login");
        }} colorScheme='blue'>SignUp</Button> */}
        <DetailModal name={username} email={email} password={password} />
</div>
 </Flex>


  )
}

export default SignUp
