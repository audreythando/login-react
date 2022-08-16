import React from 'react';
import { Image, Box, Flex, Center } from '@chakra-ui/react';


function PageNotFound() {


    return (
        <Flex maxW='100%' justify='center'>
            <Center flexDirection='column'>

                <Box>
                    <Image src='./Images/logo.png' alt='logo'  width='313px' height='158px'  />
                </Box>

                <Box fontFamily='Roboto' width='434px' height='68px' fontSize='30px' fontWeight='700' lineHeight='30px' color='#000000'>
                    <h1>Page Not Found</h1>
                </Box>

                <Box>
                    <Image src='./Images/404.png.png' alt='logo'  width='521px' height='276px' />

                </Box>
            </Center>

        </Flex>
    );
}

export default PageNotFound;
