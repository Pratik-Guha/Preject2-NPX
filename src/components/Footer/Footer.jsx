import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend,AiFillLinkedin,AiFillGithub,AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'40'} p={'16'} color={'whiteAlpha.600'}>
        <Stack direction={['column','row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                join with us for more updates 
            </Heading>
            <HStack borderBottom={'2px solid white'}>
              <Input placeholder='Enter your email here....' outline={'none'}  border={'none'} />
              <Button p={'0'} colorScheme={'blue'} 
              variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={'20'}/>
              </Button>
            </HStack>
          </VStack>

          <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              World of Gaming
            </Heading>
            <Text>All rights reserved&copy;</Text>
          </VStack>
          <VStack  w={'full'} >
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'ghost'} colorScheme={'white'}>
              <Link to={'https://www.linkedin.com/in/pratik-guha-ba97011b4/'} target={'_blank'}><AiFillLinkedin size={'20'}/></Link>
            </Button>
            <Button variant={'ghost'} colorScheme={'white'}>
              <Link to={'https://github.com/Pratik-Guha'} target={'_blank'}><AiFillGithub size={'20'}/></Link>
            </Button>
            <Button variant={'ghost'} colorScheme={'white'}>
              <Link to={'/'} ><AiFillHome size={'20'}/></Link>
            </Button>
          </VStack>
        </Stack>
    </Box>
  )
}

export default Footer