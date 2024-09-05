import { Box, Divider, Flex, HStack, Icon, Img, Input, InputGroup, InputRightAddon, Link, Spacer, Text, VStack} from '@chakra-ui/react'
import React from 'react'
import './Footer.css'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore1.png'
import gurantee from '../assets/gurantee.png'
import logo from '../assets/bewakoof-footer-logo.jpg'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPaypal,FaCcVisa,FaCcMastercard} from 'react-icons/fa';

function Footer() {
  return (
    <Box className='footer-content'>
        <img src={logo} alt="logo" className='logo'/>
        <Box className='first-footer'>
            <Flex>
            <HStack marginBottom="30px">
                <VStack align="start" width="25%">
                    <Text className='heading'>CUSTOMER SERVICE</Text>
                    <Spacer/>
                    <Text>Contact Us</Text>
                    <Text>Track Order</Text>
                    <Text>Return Order</Text>
                    <Text>Cancle Order</Text>
                    <Spacer/>
                    <Text marginTop="30px">15 Days return policy</Text>
                    <Text>Cash on delivery</Text>
                </VStack>
                <VStack align="start" >
                    <Text className='heading' >COMPANY</Text>
                    <Spacer/>
                    <Text>About Us</Text>
                    <Text>We're Hiring</Text>
                    <Text>Terms & Conditions</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Blog</Text>
                  
                    <Text className='heading'>DOWNLOAD THE APP</Text>
                    <Flex className='footer-badges'>
                    <Link href="https://play.google.com/store/apps/details?id=com.myntra.android" isExternal>
                        <img src={playstore} alt="Google Play Store" className='play-store-badge' />
                    </Link>
                    </Flex>
                </VStack>
                <VStack align="start">
                    <Text className='heading' >CONNECT WITH US</Text>
                    <Spacer/>
                    <HStack>
                    <Link href="https://www.facebook.com" isExternal>
                        <Icon as={FaFacebook} className='footer-icon' />
                    </Link>
                    <Text>4.7M People Like this</Text>
                    </HStack>
                    <HStack>
                    <Link href="https://www.instagram.com" isExternal>
                        <Icon as={FaInstagram} className='footer-icon' />
                    </Link>
                    <Text>1M Followers</Text>
                    </HStack>
                    <Flex gap={2}>
                    <Link href="https://www.facebook.com" isExternal>
                        <Icon as={FaFacebook} className='footer-icon' />
                    </Link>
                    <Link href="https://www.twitter.com" isExternal>
                        <Icon as={FaTwitter} className='footer-icon' />
                    </Link>
                    <Link href="https://www.instagram.com" isExternal>
                        <Icon as={FaInstagram} className='footer-icon' />
                    </Link>
                    <Link href="https://www.youtube.com" isExternal>
                        <Icon as={FaYoutube} className='footer-icon' />
                    </Link>
                    </Flex>
                    <Spacer/>
                    <Text className='heading'marginTop="15px">100% SECURE PAYMENT</Text>
                        <HStack marginRight="30px">
                        <Icon as={FaCcVisa} className='footer-icon' />
                        <Icon as={FaCcMastercard} className='footer-icon' />
                        <Icon as={FaPaypal} className='footer-icon' />
                        </HStack>
                </VStack>
                <VStack display="flex" alignContent="start" justify="start">
                <Text className='heading' marginTop="0%">KEEP UP TO DATE</Text>
                <HStack marginLeft="125px">
                    <InputGroup>
                        <Input variant='flushed' placeholder='Enter Email' borderColor="#c3a345"/>
                        <InputRightAddon backgroundColor="#c3a345" color="black" border="none">Subscribe</InputRightAddon>
                    </InputGroup>
                </HStack>
                </VStack>
            </HStack>
            </Flex>
            <hr/>
        </Box>
        <Box className='footer'>
        <Flex className='footer-container'>
            <VStack className='footer-section' align="start">
                <Text className='footer-heading'>ONLINE SHOPPING</Text>
                <Link to="/men" className='footer-link'>Men</Link>
                <Link to="/women" className='footer-link'>Women</Link>
                <Link to="/kids" className='footer-link'>Kids</Link>
                <Link to="/home&living" className='footer-link'>Home&living</Link>
                <Link to="/beauty" className='footer-link'>Beauty</Link>
                <Link href='#' className='footer-link'>Gift Cards</Link>
                <Link href='#' className='footer-link'>Myntra Insider</Link>
                <Spacer/>
                <Text className='footer-heading'>USEFUL LINKS</Text>
                <Link href='#' className='footer-link'>Blog</Link>
                <Link href='#' className='footer-link'>Careers</Link>
                <Link href='#' className='footer-link'>Site Map</Link>
                <Link href='#' className='footer-link'>Corporate Information</Link>
                <Link href='#' className='footer-link'>Whitehat</Link>
                <Link href='#' className='footer-link'>Cleartrip</Link>
            </VStack>
            <VStack className='footer-section' align="start">
                <Text className='footer-heading'>CUSTOMER POLICIES</Text>
                <Link href="#" className='footer-link'>Contact Us</Link>
                <Link href="#" className='footer-link'>FAQ</Link>
                <Link href="#" className='footer-link'>T&C</Link>
                <Link href="#" className='footer-link'>Terms of Use</Link>
                <Link href="#" className='footer-link'>Track Orders</Link>
                <Link href="#" className='footer-link'>Shipping</Link>
                <Link href="#" className='footer-link'>Cancellation</Link>
                <Link href="#" className='footer-link'>Returns</Link>
                <Link href="#" className='footer-link'>Privacy Policy</Link>
                <Link href="#" className='footer-link'>Grievance Officer</Link>
            </VStack>
            <VStack className='footer-section' align='start'>
            <Text className='footer-heading'>EXPERIENCE MYNTRA APP ON MOBILE</Text>
                
            
            <Text className='footer-heading'>KEEP IN TOUCH</Text>
                <Flex gap={2}>
                <Link href="https://www.facebook.com" isExternal>
                        <Icon as={FaFacebook} className='footer-icon' />
                </Link>
                <Link href="https://www.twitter.com" isExternal>
                    <Icon as={FaTwitter} className='footer-icon' />
                </Link>
                <Link href="https://www.instagram.com" isExternal>
                    <Icon as={FaInstagram} className='footer-icon' />
                </Link>
                <Link href="https://www.youtube.com" isExternal>
                    <Icon as={FaYoutube} className='footer-icon' />
                </Link>
                </Flex>
            </VStack>
            <VStack>
                <Img src={gurantee} width="80%"/>
            </VStack>
        </Flex>
        </Box>
        <Box className='footer-searches'>
        <VStack className='footer-section' align='start'>
          <Text className='footer-heading'>POPULAR SEARCHES</Text>
          <Flex className='popular-searches'>
                <Text>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</Text>
          </Flex>
          </VStack>
        </Box>
        <Box>
            <Flex justify="space-between" className='footer-bottom'>
                <Text>In case of any concern,<b style={{color: 'blue'}}>Contact Us</b></Text>
                <Text>© 2024 www.bewakoof.com.All Rights Reserved.</Text>
                <Text>A Flipkart company</Text>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer