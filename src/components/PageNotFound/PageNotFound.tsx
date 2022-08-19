import React  from 'react';
import { Image, Box, Flex, Center, Text , Button, useMediaQuery} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


function PageNotFound() {

    const [isMobile] = useMediaQuery('(max-width: 600px)')

    let navigate = useNavigate();

    
    const BackToHome = () => {
        navigate("/signUp");
    }
  
    return (
        <Flex direction={isMobile ? 'column-reverse' : 'row'}  justify='center' background=' #F7F8FF'>
    
            <Center flexDirection='column'>

                <Box>
                    <Image src='./Images/logo.png' alt='logo'  width='313px' height='158px'  />
                </Box>



                <Box fontFamily='Roboto' textAlign='center' width='434px' height='68px' fontSize='30px' fontWeight='700' lineHeight='30px' color='#000000'>
                    <Text>Page Not Found</Text>
                </Box>
            

                <Box>
                    <Image src='./Images/404.png.png' alt='logo'  width='521px' height='276px' />

                </Box>

                <Box >
                <Button onClick={BackToHome} colorScheme='orange'>Back to Home</Button>
            
                </Box>
            </Center>

        </Flex>
    );
    }


export default PageNotFound;
