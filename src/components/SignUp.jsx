import React from 'react'
import { Button, Container, Heading, Input, VStack,Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

        <Heading  textAlign={'center'}>Welcome To World Of Gaming</Heading>
        <form>
            <VStack alignItems={'stretch'} spacing={'5'} w={['full','96']} m={'auto'} my={'10'} >
                <Avatar alignSelf={'center'} boxSize={'24'}/>
                <Input placeholder={'Name'} type={'text'} required focusBorderColor={'blue.500'}/>
                <Input placeholder={'Email'} type={'email'} required focusBorderColor={'blue.500'}/>
                <Input placeholder={'Password'} type={'password'} required focusBorderColor={'blue.500'}/>
                <Button alignSelf={'flex-end'} variant={'link'}>
                    <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>
                <Button colorScheme={'blue'} type={'submit'}>
                    Sign Up
                </Button>
                <Text textAlign={'right'}>Already Sign Up ?
                <Button alignSelf={'flex-end'} variant={'link'} colorScheme={'red'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default SignUp