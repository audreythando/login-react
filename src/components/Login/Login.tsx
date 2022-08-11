import React, {useState} from 'react'
import {
    FormControl,
    Heading,
    Avatar,
    Stack,
    Input,
    Flex,
    Box,
    Image
  } from '@chakra-ui/react'
import Details from '../Details/Details';

  
function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const changeEmailHandler = (e:React.ChangeEvent<any>): void => {
      setEmail(e.target.value)
  }
  const changePasswordHandler = (e:React.ChangeEvent<any>): void => {
      setPassword(e.target.value)

  }

  
  const submit = (e:React.ChangeEvent<any>): void => {
      e.preventDefault();

  }
  return (
    <Flex align="center" justify="center">
    <div>
    
    
    <Box width={'50%'}>
  <Image src='./Images/picture.png' alt= 'picture' width={'727px'} height={'817px'} position={'absolute'} right={'700px'} mb={'150px'}/>  
  </Box>

        <Stack spacing={6}>
        <Heading  width={'132px'} height={'75px'} top={'925px'} alignContent={'center'}
        left={'159px'} fontFamily={'Roboto'} fontWeight={'700'}
        size={'30px'} lineHeight={'30px'} alignItems={'center'} letterSpacing={'15%'}>
    Login Form
  </Heading>


  <Image src='./Images/logo.png' alt='logo'mb={'250px'} width={'313px'} height={'158px'} position= {'absolute'} />
        </Stack>
         
    <FormControl onSubmit={submit} >
     <Input variant='flushed' onChange={(e:any) => changeEmailHandler(e)} placeholder='email' value={email} />
   <Input variant='flushed' onChange={(e:any) => changePasswordHandler(e)} placeholder='Password' value={password} />
    
     </FormControl>
     <Details email={email} password={password} />
      
    </div></Flex>
  )
}

export default Form
