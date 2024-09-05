import React, { useEffect, useState } from 'react'
import './ImageFrid.css'
import { Box, Text } from '@chakra-ui/react';

function ImageGrid() {
    const [images, setImages] = useState([]);
    const [images1, setImages1] = useState([]);
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch('https://bewakoof-clone-1.onrender.com/slider/category/men'); 
          const response1 = await fetch('https://bewakoof-clone-1.onrender.com/slider/category/women');
          const data = await response.json();
          const data1 = await response1.json();
          console.log(data)
          console.log(data1)
          setImages(data.slider);
          setImages1(data1.slider)
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImages();
    }, []);

  return (
    <Box>
    <Text className='text' fontSize="3xl">Shop by Category- Men</Text>
    <div className="image-grid">
      {images ? images.map(image => (
        <div key={image._id} className="image-item">
          <img src={image.imgURL} alt={image.alternateName} />
        </div>
      )):<h2>No images</h2>}
    </div>
    <Text className='text' fontSize="3xl">Shop by Category- Women</Text>
    <div className="image-grid">
      {images1 ? images1.map(image => (
        <div key={image._id} className="image-item">
          <img src={image.imgURL} alt={image.alternateName} />
        </div>
      )):<h2>No images</h2>}
    </div>
    </Box>
  );
}

export default ImageGrid