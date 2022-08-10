import React, {useState} from 'react'
import {
    FormControl,
    FormLabel,
    Heading,
    Avatar,
    Stack,
    AvatarGroup
  } from '@chakra-ui/react'
import Details from '../Details/Details';
import {Flex } from "@chakra-ui/react"

  
function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const changeEmailHandler = (e:any) => {
      setEmail(e.target.value)
  }
  const changePasswordHandler = (e:any) => {
      setPassword(e.target.value)

  }

  
  const submit = (e:any) => {
      e.preventDefault();

  }
  return (
    <Flex align="center" justify="center">
    <div>
        <AvatarGroup spacing='1rem'>
  <Avatar bg='teal.500' />
</AvatarGroup>

        <Stack spacing={6}>
        <Heading as='h2' size='2xl'>
    Login Form
  </Heading>
        </Stack>
         
    <FormControl onSubmit={submit} >
    <FormLabel>Email</FormLabel>
      <input 
        type='email'
        value={email}
        onChange={(e:any) => changeEmailHandler(e)}
         placeholder='Email' 
      />
    

      <FormLabel>Password</FormLabel>
      <input 
        type='password'
        name= 'password'
        value={password}
        onChange={(e) => changePasswordHandler(e)} 
        placeholder='Password' 
      />
     </FormControl>
    <Details email={email} password={password} />
      
    </div></Flex>
  )
}

export default Form
