import React, { useEffect, useState } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaHeart, FaStar } from 'react-icons/fa';

function Men() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [filters, setFilters] = useState({
    brand: [],
    rating: '',
    fit: '',
    category: '',
  });

  useEffect(() => {
    fetch('https://bewakoof-clone-1.onrender.com/product/category/men')
      .then(response => response.json())
      .then(data => {
        setProducts(data.product);
        setFilteredProducts(data.product);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setError('Failed to fetch products');
      });
  }, []);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    let sortedProducts = [...filteredProducts];
    switch (selectedOption) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.discounted_price - b.discounted_price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.discounted_price - a.discounted_price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilters(updatedFilters);

    let updatedFilteredProducts = products;

    if (updatedFilters.brand.length) {
      updatedFilteredProducts = updatedFilteredProducts.filter(product =>
        updatedFilters.brand.includes(product.brand)
      );
    }

    if (updatedFilters.rating) {
      updatedFilteredProducts = updatedFilteredProducts.filter(product =>
        product.rating >= updatedFilters.rating
      );
    }

    if (updatedFilters.fit) {
      updatedFilteredProducts = updatedFilteredProducts.filter(product =>
        product.fit === updatedFilters.fit
      );
    }

    if (updatedFilters.category) {
      updatedFilteredProducts = updatedFilteredProducts.filter(product =>
        product.category === updatedFilters.category
      );
    }

    if (updatedFilters.size) {
      updatedFilteredProducts = updatedFilteredProducts.filter(product =>
        product.sizes.includes(updatedFilters.size)
      );
    }

    setFilteredProducts(updatedFilteredProducts);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(newPage);
    }
  };

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  const uniqueFits = [...new Set(products.map(product => product.fit))];
  const uniqueSizes = [...new Set(products.flatMap(product => product.sizes))];

  return (
    <Box>
      <Navbar />
      <Box marginLeft="200px" marginRight="200px">
      <Box padding="4">
        <Breadcrumb spacing="8px" separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/men">Men clothing</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
        <Grid templateColumns="1fr 3fr">
          <Box marginTop="20px" >
            <Text fontWeight="bold" fontSize='2xl'>Clothes for Men: {filteredProducts.length}</Text>
            <Box height="3px" width="100px" backgroundColor="#f7e195" marginBottom="16px" />
            <Select 
              placeholder="Sort by" 
              value={sortOption} 
              onChange={handleSortChange} 
              marginBottom="4" 
              width='80%' 
              border="none"
              borderBottom="1px solid #000" 
              borderRadius="0"
              _focus={{ boxShadow: "none" }}
              backgroundColor="transparent"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </Select>
            <Select 
              placeholder="Brand" 
              onChange={(e) => handleFilterChange('brand', [e.target.value])} 
              marginBottom="4" 
              border="none"
              width='80%' 
              borderBottom="1px solid #000" 
              borderRadius="0"
              _focus={{ boxShadow: "none" }}
              backgroundColor="transparent"
            >
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
            <Select 
              placeholder="Rating" 
              onChange={(e) => handleFilterChange('rating', e.target.value)} 
              marginBottom="4" 
              border="none"
              width='80%' 
              borderBottom="1px solid #000" 
              borderRadius="0"
              _focus={{ boxShadow: "none" }}
              backgroundColor="transparent"
            >
              <option value="4">4 Stars & Up</option>
              <option value="3">3 Stars & Up</option>
              <option value="2">2 Stars & Up</option>
              <option value="1">1 Star & Up</option>
            </Select>
            <Select 
              placeholder="Fit" 
              onChange={(e) => handleFilterChange('fit', e.target.value)} 
              marginBottom="4" 
              border="none"
              width='80%' 
              borderBottom="1px solid #000" 
              borderRadius="0"
              _focus={{ boxShadow: "none" }}
              backgroundColor="transparent"
            >
              {uniqueFits.map((fit, index) => (
                <option key={index} value={fit}>
                  {fit}
                </option>
              ))}
            </Select>
            <Select 
              placeholder="Size" 
              onChange={(e) => handleFilterChange('size', e.target.value)} 
              marginBottom="4" 
              border="none"
              width='80%' 
              borderBottom="1px solid #000" 
              borderRadius="0"
              _focus={{ boxShadow: "none" }}
              backgroundColor="transparent"
            >
              {uniqueSizes.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </Select>

          </Box>
          <Box marginTop="100px">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {currentProducts.map(product => (
                <GridItem key={product._id} className="product-card" p={2}>
                  <VStack spacing={2} align="start">
                    <Box position="relative">
                    <Image src={product.imgURL} alt={product.title} className="product-image" objectFit="cover" />
                    <Box position="absolute" bottom="8px" width="35px" height="auto">
                    <Flex backgroundColor="white" paddingLeft="4px"paddingRight="1px" alignItems="center">
                      <FaStar color="goldenrod" />
                      <Text fontSize="sm" marginLeft="2px">{product.rating}</Text>
                    </Flex>
                    </Box>
                    </Box>
                    <Text fontSize="sm">{product.brand}</Text>
                    <Text className="product-title" fontSize="sm" fontWeight="bold">{product.title}</Text>
                    <HStack spacing={2}>
                      <Text className="product-price" fontSize="sm">Rs.{product.discounted_price}</Text>
                      <Text className="product-strike-price" fontSize="xs" textDecoration="line-through">Rs.{product.price}</Text>
                      <Text className="product-discount" fontSize="xs" color="green.500">{product.fit}</Text>
                    </HStack>
                    <Button
                      leftIcon={<FaHeart />}
                      colorScheme='pink'
                      variant='solid'
                      size="sm"
                      onClick={() => addToWishlist(product)}
                    >
                      Add to Wishlist
                    </Button>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
            <HStack spacing={4} marginTop="4" justifyContent="center">
              <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </Button>
              {[...Array(totalPages).keys()].map(page => (
                <Button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  isActive={currentPage === page + 1}
                >
                  {page + 1}
                </Button>
              ))}
              <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </Button>
            </HStack>
          </Box>
        </Grid>
      </Box>
      <Divider/>
      <Footer />
    </Box>
  );
}

export default Men;
