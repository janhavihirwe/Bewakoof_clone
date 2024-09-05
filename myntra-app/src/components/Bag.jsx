import { Box, Divider, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaStar } from 'react-icons/fa';

function Bag({ bag }) {
    if (!bag || bag.length === 0) {
    return <Box>No items in the bag.</Box>;
  }

  return (
    <Box>
    <Navbar/>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {bag.map(product => (
          <GridItem key={product.id} className="product-card">
            <VStack spacing={3} align="start">
              <Image src={product.images[0]} alt={product.title} className="product-image" />
              <Text className="product-title">{product.title}</Text>
              <Text >{product.brand}</Text>
              <HStack spacing={20}><Text className="product-price">₹{product.discounted_price}</Text>
              <Text className="product-strike-price">₹{product.strike_price}</Text>
              <Text className="product-discount">{product.discount}</Text></HStack>
              <HStack spacing={1}>
                      <Text fontSize="sm">{product.rating}</Text>
                      <FaStar color="black" size="12px" />
                      <Text fontSize="xs" color="gray.500">({product.rating_count})</Text>
                    </HStack>
            </VStack>
          </GridItem>
        ))}
      </Grid>
      <Divider/>
      <Footer/>
    </Box>
  );
}

export default Bag