import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Box,Heading,Image } from '@chakra-ui/react'
// import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'


const headline={
  pos:'absolute',
  left:'50%',
  top:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  p:'4',
}
const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w='full' h={'100vh'} >
          <Image src={'https://cdn.pixabay.com/photo/2022/06/09/08/44/metaverse-7252038_1280.jpg'} />
          <Heading bgColor={'blackAlpha.600'} color={'white'} {...headline}>
            Watch The Future World
          </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
          <Image src={img2} />
          <Heading bgColor={'whiteAlpha.400'} color={'blackAlpha.800'} {...headline}>
            The Gaming World 
          </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
          <Image src={img3} />
          <Heading bgColor={'whiteAlpha.400'} color={'blackAlpha.800'} {...headline}>
            Show Your Gaming Skiils Here
          </Heading>
        </Box>
        <Box w='full' h={'100vh'}>
          <Image src={img4} />
          <Heading bgColor={'whiteAlpha.400'} color={'blackAlpha.800'} {...headline}>
            Shine Bright Like a Diamond
          </Heading>
        </Box>
    </Carousel>
  )
}

export default MyCarousel