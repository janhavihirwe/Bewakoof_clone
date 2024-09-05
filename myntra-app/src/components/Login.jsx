import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Button, Divider, Flex, HStack, Img, Input, InputGroup, InputLeftAddon, InputRightElement, Text, useToast, VStack } from '@chakra-ui/react'
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogin = async()=>{
        try {
            const response = await fetch('https://bewakoof-clone-1.onrender.com/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ phone, password }),
            });
      
            const data = await response.json();
      
            if (data.message === "You seem a new user,please register first") {
              toast({
                title: "New User",
                description: "Please register first.",
                status: "info",
                duration: 3000,
                isClosable: true,
              });
              navigate('/register');
            } else if (data.message === "Login successful") {
              toast({
                title: "Login Successful",
                description: "Welcome back!",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              localStorage.setItem('token', data.token);
              navigate('/');
            } else {
              toast({
                title: "Login Failed",
                description: data.message,
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            }
          } catch (error) {
            toast({
              title: "An error occurred",
              description: "Unable to login. Please try again later.",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
    }
  return (
    <div>
        <Navbar/>
        <Box height="300px" mt="80px">
            <HStack >
                <VStack className='img'width="50%">
                <Text fontSize="4xl" fontWeight="bold" mb={20}>Welcome to the world of Bewakoof®!</Text>
                <Img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt='welcome'/>
                </VStack>
                <VStack ml="130px">
                    <Text fontSize='3xl' fontWeight="bold">Log in / Sign up</Text>
                    <Text>for Latest trends, exciting offers and everything Bewakoof®!</Text>
                    <InputGroup width="450px" mt="30px">
                        <InputLeftAddon height="60px" children="+91" />
                        <Input
                        type='tel'
                        placeholder='Enter Mobile Number'
                        fontWeight="bold"
                        height="60px"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        pl="4.5rem" 
                        />
                    </InputGroup>

                    <InputGroup size='md' width="450px">
                        <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                    </InputRightElement>
                    </InputGroup>
                    <Button colorScheme='teal' width="450px" height="60px" fontSize="2xl" onClick={handleLogin}>
                        CONTINUE
                    </Button>
                    <Flex align="center" width="100%" mt="10px">
                        <Divider borderColor="gray.300" borderWidth="1px"/>
                        <Text mx={2} color="gray.500" fontWeight="bold">
                            OR
                        </Text>
                        <Divider borderColor="gray.300" borderWidth="1px"/>
                    </Flex>
                    <Button gap={2} variant='outline' width="410px" mt="10px">
                        <AiOutlineMail/>
                        CONTINUE WITH EMAIL
                    </Button>
                    <HStack mt="10px">
                    <Button gap={2} variant='outline' width="200px">
                        <FcGoogle/>
                        GOOGLE
                    </Button>
                    <Button gap={2} variant='outline' width="200px">
                        <BsFacebook/>
                        FACEBOOK
                    </Button>
                    </HStack>
                    <Text mt="60px">
                        By creating an account or logging in, you agree with Bewakoof®'s{" "}
                        <Text as="span" color="teal" cursor="pointer" marginRight="4px">
                        Terms<br/>and Conditions
                        </Text>
                         and
                        <Text as="span" color="teal" cursor="pointer" marginLeft="4px">
                        Privacy Policy.
                   </Text>
                   </Text>

                </VStack>
            </HStack>
        </Box>
    </div>
  )
}

export default Login