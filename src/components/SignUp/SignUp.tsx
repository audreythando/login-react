import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Button,
  Heading,
  Box,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
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


  const navigate = useNavigate();

  return (

    <Flex align="center" justify="center">
      <div>
        <Heading as='h2' size='2xl' mb='24px'>
          SignUp
        </Heading>
        <Box >
          <FormControl onSubmit={submit}>
            <FormLabel>Username</FormLabel>
            <input
              type='username'
              value={username}
              onChange={(e) => changeUsernameHandler(e)}
              placeholder='Username'
            />

            <FormLabel>Email</FormLabel>
            <input
              type='email'
              value={email}
              onChange={(e) => changeEmailHandler(e)}
              placeholder='Email'
            />

            <FormLabel>Password</FormLabel>
            <input
              type='password'
              value={password}
              onChange={(e) => changePasswordHandler(e)}
              placeholder='Password'
            />
          </FormControl>
        </Box>

        {/* <Button onClick={() => {
          navigate("/login");
        }} colorScheme='blue'>SignUp</Button> */}
        <DetailModal name={username} email={email} password={password} />


      </div></Flex>


  )
}

export default SignUp
