import React, { useState } from 'react'
import { Heading, Stack, VStack,Text, Button } from '@chakra-ui/react'
import video1 from '../assets/video_games_-_89894 (540p).mp4'
import video2 from '../assets/video_game_-_123875 (720p).mp4'
import video3 from '../assets/metaverse_-_115030 (720p).mp4'
import video4 from '../assets/181093 (720p).mp4'
import video5 from '../assets/mountain_-_91757 (1440p).mp4'
import video6 from '../assets/dragon_-_99446 (720p).mp4'

const Videos = () => {
  const videosArr=[
      video1,video2,video3,video4,video5,video6
  ]
  const [videoSrc, setVideoSrc] = useState(videosArr[0])
  return (
    <Stack direction={['column','row']} h={'100vh'}>
        <VStack w={'full'}>
          <video controls controlsList='nodownload'  src={videoSrc}
           style={{width:'100%',}}
          >

          </video>
          <VStack alignItems={'flex-start'} p={'8'} w={'full'}  overflowY={'auto'}>
            <Heading>Sample Video</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, beatae.
            </Text>

          </VStack>
        </VStack>
        <VStack w={['full','xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
        {
          videosArr.map((item,index)=>(
            <Button variant={'ghost'} colorScheme={"blue"} onClick={()=>setVideoSrc(item)}>
                All Realistic {index+1}
            </Button>
          ))
        }
        </VStack>
    </Stack>
  )
}

export default Videos