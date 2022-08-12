import React from 'react';
import { Image,Box } from '@chakra-ui/react';


function PageNotFound() {

   
  return (
    <div>
        <Box>
        <Image src='./Images/logo.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position='absolute' />
          </Box>

<Box> <h1>Page Not Found</h1></Box>
      
          <Box> 
       <Image src='./Images/404.png.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position='absolute'  />
       </Box>

    </div>
  );
}

export default PageNotFound;
