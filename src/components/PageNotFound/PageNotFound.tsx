import React from 'react';
import { Image, Box } from '@chakra-ui/react';


function PageNotFound() {


    return (
        <div>
            <Image src='./Images/logo.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position='absolute' />
            <h1>Page Not Found</h1>
            <Image src='./Images/404.png.png' alt='logo' mb={'250px'} width={'313px'} height={'158px'} position='absolute' />


        </div>
    );
}

export default PageNotFound;
