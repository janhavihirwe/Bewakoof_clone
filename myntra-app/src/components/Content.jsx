import { Box, IconButton, Img, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import main from '../assets/main-img.png'
import './Content.css'
import ImageGrid from './ImageGrid'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import Coupon from './Coupon'

function Content() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://bewakoof-clone-1.onrender.com/slider/category/slider-1'); 
        const data = await response.json();
        console.log(data)
        setImages(data.slider);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const NextArrow = ({ onClick }) => (
    <IconButton
      aria-label="Next"
      icon={<SlArrowRight />}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      onClick={onClick}
      borderRadius="full"
    />
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton
      aria-label="Previous"
      icon={<SlArrowLeft />}
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="2"
      onClick={onClick}
      borderRadius="full"
    />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
        <Box>
        <Box>
          <Slider {...settings}>
            {images ? images.map((image) => (
              <Box key={image._id}>
                <Img src={image.imgURL} alt={image.alternateName}  width="100%" height="auto"/>
              </Box>
            )):<h2>No images</h2>}
          </Slider>
        </Box>
        <Box>
          <Coupon/>
        </Box>
        <Box>
          <ImageGrid/>
        </Box>
      </Box>
    </div>
  )
}

export default Content