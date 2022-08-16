import React, { useState } from 'react'
import {
  FormControl,
  Heading,
  Box,
  Input,
  Image,
  Container,
  SimpleGrid,
  GridItem,
  Center,
  Grid,
  useDisclosure
} from '@chakra-ui/react'
import DetailModal from '../Details/DetailModal';


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <SimpleGrid columns={2} spacing={1}>

      <Box  >

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
                SignUp
              </Heading>
            </Center>

            <Image src='./Images/logo.png' alt='logo' mb='250px' width='313px' height='158px' position='absolute' />


          </GridItem>

          <GridItem colSpan={6} margin='35px'>


            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)} placeholder='email' value={email} />



            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)} placeholder='Password' value={password} />

          </GridItem>

          <GridItem colSpan={6}>
            <DetailModal name={username} email={email} password={password} onOpen={onOpen} onClose={onClose} isOpen={isOpen} />

          </GridItem>


        </Grid>
        <h2 >Already have an account ? Login</h2>
      </Box>

    </SimpleGrid>








  )
}

export default SignUp
