import React from 'react'
import {Box, Container, Heading, Stack,Image,Text} from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MyCarousel } from '../components'
import img5 from '../assets/5.png'

const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading textTransform={'uppercase'} py={"2"}
         w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
            Services
        </Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
          <Image src={img5} h={['40','400']} filter={'hue-rotate(-200deg)'}/>
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aliquid similique accusamus, itaque recusandae optio. Autem minus enim laboriosam ratione architecto totam voluptatum omnis natus, nulla rem dolore? Minus temporibus quae voluptatum porro! Cum consequuntur doloremque neque non saepe assumenda veniam suscipit ratione, rerum sint recusandae atque alias praesentium!
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home