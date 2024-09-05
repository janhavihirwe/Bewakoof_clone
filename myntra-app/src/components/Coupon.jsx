import { Box, Img } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

function Coupon() {
    const [coupons, setCoupons] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
          try {
            const response = await fetch('https://bewakoof-clone-1.onrender.com/slider/category/coupon'); 
            const data = await response.json();
            console.log(data)
            setCoupons(data.slider);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
        fetchImages();
      }, []);
  return (
    <Box>
        {coupons ? coupons.map((coupon) => (
              <Box key={coupon._id} marginTop="10px">
                <Img src={coupon.imgURL} alt={coupon.alternateName}  width="100%" height="auto"/>
              </Box>
            )):<h2>No images</h2>}
    </Box>
  )
}

export default Coupon