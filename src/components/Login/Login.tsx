import React, { useState } from 'react'
import {
  FormControl,
  Heading,
  Avatar,
  Stack,
  Input,
  Flex,
  Box,
  Image,
  Square,
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

        <Image src='./Images/picture.png' alt='picture ' />

      </Box>



      <Box bg='#F7F8FF' height='-moz-min-content'>
        <Grid h='700px'
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={1}
        >

          <GridItem colSpan={3} >
            <Center>
              <Heading
                fontFamily={'Roboto'} fontWeight={'700'}
                size={'30px'} letterSpacing={'15%'}>
                Login Form
              </Heading>
            </Center>

            <Image src='./Images/logo.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position='absolute' />


          </GridItem>

          <GridItem colSpan={3} >


            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changeEmailHandler(e)} placeholder='email' value={email} />



            <Input variant='flushed' onChange={(e: React.ChangeEvent<any>): void => changePasswordHandler(e)} placeholder='Password' value={password} />

          </GridItem>

          <GridItem colSpan={3}>
            <Details email={email} password={password}  onOpen={onOpen} onClose={onClose} isOpen={isOpen} />

          </GridItem>


        </Grid>
      </Box>
      <h2>Do not have an account ? SignUp</h2>

    </SimpleGrid>




    // <Flex justify="space-between">

    //   <Square>
    //     1
    //   </Square>

    //   <Square>
    //     <Flex direction="column" align="center">
    //       <Box>222222222</Box>
    //       <Box>3</Box>
    //       <Box>4</Box>
    //     </Flex>
    //   </Square>

    // </Flex>
    // <Flex align="center" justify="center">

    //   <Square maxWidth={'50%'}>
    //     <Image src='./Images/picture.png' alt='picture ' />
    //   </Square>


    //   <Square maxWidth={'50%'} background={'#F7F8FF'}>
    //     <Stack spacing={6}>
    //       <Heading width={'132px'} height={'75px'} top={'925px'} alignContent={'center'}
    //         left={'159px'} fontFamily={'Roboto'} fontWeight={'700'}
    //         size={'30px'} lineHeight={'30px'} alignItems={'center'} letterSpacing={'15%'}>
    //         Login Form
    //       </Heading>


    //       <Image src='./Images/logo.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position={'absolute'} />
    //     </Stack>

    //     <FormControl onSubmit={submit} >
    //       <Input variant='flushed' onChange={(e: any) => changeEmailHandler(e)} placeholder='email' value={email} />
    //       <Input variant='flushed' onChange={(e: any) => changePasswordHandler(e)} placeholder='Password' value={password} />

    //     </FormControl>
    //     <Details email={email} password={password} />
    //   </Square>

    // </Flex>
  )
}

export default Form
