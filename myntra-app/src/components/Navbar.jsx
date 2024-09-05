import { Box,  Flex, HStack, Icon, IconButton, Img, Input, InputGroup, InputLeftElement, Link,Text, VStack} from '@chakra-ui/react'
import { Link as RouterLink,useNavigate} from 'react-router-dom';
import { FaSearch, FaRegHeart, FaShoppingBag, FaUser,FaMobileAlt} from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { BiShoppingBag } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import React from 'react'
import './Navbar.css'
import logo from '../assets/logo-nav.png'

function Navbar() {
  return (
    <div>
      <Flex className='top-navbar'>
        <Flex className='navbar-links'>
            <Text fontSize='xs'>Offers</Text>
            <Text fontSize='xs'>Fanbook</Text>
            <HStack gap={0}>
              <Icon as={FaMobileAlt}/>
            <Text fontSize='xs'>Download App</Text>
            </HStack>
            <Text fontSize='xs'>TriBe Membership</Text>
            <Text fontSize='xs'>Find a store near me</Text>
        </Flex>
        <Flex className='navbar-links'>
          <Text fontSize='xs'>Contact Us</Text>
          <Text fontSize='xs'>Track Order</Text>
        </Flex>
        </Flex>
        <Flex className='navbar'>
        <Flex className='navbar-container'>
            <Box className='navbar-logo'>
            <RouterLink to='/'>
            <Img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" height={{ base: '20px', md: '30px' }} alt="Bewakoof Logo" />
            </RouterLink>
            </Box>
            <Flex display={{ base: 'none', md: 'flex' }} className='navbar-links'ml={14}>
                <RouterLink to='/men'><Link className='navbar-link'>MEN</Link></RouterLink>
                <RouterLink to='/women'><Link className='navbar-link'>WOMEN</Link></RouterLink>
                <RouterLink to="/mobile-covers" ><Link className='navbar-link'>MOBILE COVERS</Link></RouterLink>
            </Flex>
            <Flex ml={{ base: 2, md: 8 }} width={{ base: 'full', md: 'auto' }} justifyContent={{ base: 'center', md: 'flex-start' }} className="navbar-actions" >
              <InputGroup width={{ base: '100%', md: '300px' }} height='auto'>
                <InputLeftElement
                  pointerEvents="none"
                  children={<IconButton icon={<CiSearch />} aria-label="Search" variant='unstyled' ml="15px"/>}
                />
                <Input variant="filled"className="navbar-search" placeholder="Search by product,category or collection"  bg="#eaeaea"/>
              </InputGroup>
            </Flex>
            <Box height="30px" width="2px" bg="gray.500" />
            <Flex className='navbar-icons'ml={{ base: 1, md: 3 }} p={1.5}>
            <RouterLink to='/login'><Link>Login</Link></RouterLink>
              <Icon as={CiHeart} boxSize={7} marginLeft="5px"/>
              <Icon as={BiShoppingBag} boxSize={6} marginLeft="5px"/>
            </Flex>
        </Flex>
        </Flex>
    </div>
  )
}

export default Navbar