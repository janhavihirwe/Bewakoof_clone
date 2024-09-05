import React from 'react'
import { Box, Button, Divider, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaStar } from 'react-icons/fa';

function Wishlist({wishlist, addToBag }) {
    if (!wishlist || wishlist.length === 0) {
        return <Box><Navbar/>No items in the wishlist.<Footer/></Box>;
      }
  return (
    <div>
      <Box>
        <Navbar/>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {wishlist.map(product => (
          <GridItem key={product.id} className="product-card">
            <VStack spacing={3} align="start">
              <Image src={product.images[0]} alt={product.title} className="product-image" />
              <Text className="product-title" textAlign="start">{product.title}</Text>
              <HStack spacing={20}><Text className="product-price" textAlign="start">₹{product.discounted_price}</Text>
              <Text className="product-strike-price" textAlign="start">₹{product.strike_price}</Text>
              <Text className="product-discount" textAlign="start">{product.discount}</Text></HStack>
              <HStack spacing={1}>
                      <Text fontSize="sm">{product.rating}</Text>
                      <FaStar color="black" size="12px" />
                      <Text fontSize="xs" color="gray.500">({product.rating_count})</Text>
                    </HStack>
              <Button colorScheme="pink" onClick={() => addToBag(product)}>Add to Bag</Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <Divider/>
      <Footer/>
    </Box>
    </div>
  )
}

export default Wishlist