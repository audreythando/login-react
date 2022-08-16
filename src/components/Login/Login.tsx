import React, { useState } from 'react'
import {
  FormControl,
  Heading,
  Input,
  Box,
  Image,
  SimpleGrid,
  GridItem,
  Grid,
  Center,
  useDisclosure
} from '@chakra-ui/react'
import Details from '../Details/Details';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const changeEmailHandler = (e: React.ChangeEvent<any>): void => {
    setEmail(e.target.value)
  }
  const changePasswordHandler = (e: React.ChangeEvent<any>): void => {
    setPassword(e.target.value)

  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();

  }
  return (

    <SimpleGrid columns={2} spacing={1} >

      <Box height={'-moz-max-content'} >

        <Image src='./Images/picture.png' alt='picture ' height='1000px' />

      </Box>



      <Box bg='#F7F8FF' height='100%'>
        <Grid h='700px'
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={1}
        >

          <GridItem colSpan={6} >
            <Center>
              <Heading
                fontFamily='Roboto' fontWeight='700'
                size='30px' letterSpacing='15%'>
                Login Form
              </Heading>
            </Center>

            <Image src='./Images/logo.png' alt='logo' width='313px' height='158px' objectPosition='absolute' top='-219px' left='125px' />


          </GridItem>

          <GridItem colSpan={6} >


            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)} placeholder='email' value={email} />



            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)} placeholder='Password' value={password}

            />

            <Image src='./Images/eye.png' />

          </GridItem>

          <GridItem colSpan={6}>
            <Details email={email} password={password} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />

          </GridItem>


        </Grid>
        <h2 align-items='center' text-align='center' color=' #000000' font-family='Roboto' font-style='normal' font-size='13px' font-weight='100' line-height='40px'>Do not have an account ? SignUp</h2>
      </Box>


    </SimpleGrid>




  )
}

export default Form
