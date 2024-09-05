import React from 'react'
import Navbar from './Navbar'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import "./Register.css"

function Register() {
  return (
    <div>
      <Navbar/>
      <Box className='container'>
        <HStack m={10}>
          <Box>
            <Image src="https://images.bewakoof.com/web/ik-signup-desktop-v2.jpg" alt='SignUp Image' width="40%" height="auto"/>
          </Box>
          <VStack backgroundColor="white" align="start">
            <Text fontSize="3xl" fontWeight="bold">Sign Up</Text>
            <Text fontSize="2xl" fontWeight="bold">Hi new buddy, let's get you started with the bewakoofi!</Text>
          </VStack>
        </HStack>
      </Box>
    </div>
  )
}

export default Register