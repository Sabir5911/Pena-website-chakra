"use client"




import React from 'react'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack, Divider } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/End'
export default function page() { 
  return <>

<Box bg='gray.700'>
<Container maxW={'1440px'}>
<Header />
  <Flex mt='100px' justifyContent={'center'}  fontStyle='inherit'  textAlign='center' gap={'50px'} >
    <Flex w='340px'  placeItems={'center'} bg='gray.850'  flexDirection={'column'} boxShadow='2xl' letterSpacing='1px' border='10px'  borderRadius={'15px'}>

      <Image src='https://toolxox.com/dl/adobe/tmp/images/dl.beatsnoop.com-thumb-1676975854.jpg'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading fontSize={'20px'} py='35px'color='white'>Web 3.0 and Metaverse <br /> Specialization</Heading>

    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex>
    <Flex w='340px'  placeItems={'center'}   flexDirection={'column'} letterSpacing='1px'  boxShadow='2xl'  border='10px'  borderRadius={'15px'}>

      <Image src='https://toolxox.com/dl/adobe/tmp/images/dl.beatsnoop.com-thumb-1676976450.jpg'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading   fontSize={'20px'} py='35px'color='white'>Artificial Intelligence (AI)<br /> Specialization</Heading>
    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex>
    <Flex w='340px'  placeItems={'center'}   flexDirection={'column'} letterSpacing='1px' boxShadow='2xl'  border={'3px'} borderColor=''>

      <Image src='https://platform9.com/wp-content/uploads/2019/12/cloud-native-challenges.png'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading fontSize={'20px'} py='35px'color='white'>Cloud-Native Computing <br />Specialization</Heading>
    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex>



 
  </Flex>

 <Flex  mt='120px' justifyContent={'center'}  fontStyle='inherit'  textAlign='center' gap={'50px'} mb='80px'>
 <Flex w='340px'  placeItems={'center'}  flexDirection={'column'} boxShadow='2xl' letterSpacing='1px'  border={'3px'} borderColor=''>

      <Image src='https://imageio.forbes.com/specials-images/imageserve/632dbbaa69b953ca837d2c1f/Network-and-data-connection/0x0.jpg?format=jpg&crop=5700,3206,x0,y0,safe&width=960'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading fontSize={'20px'} py='35px'color='white'>Ambient Computing and IoT <br />Specialization</Heading>

    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex>
    <Flex w='340px'  placeItems={'center'}   flexDirection={'column'} letterSpacing='1px'  border='10px'  borderRadius={'15px'} boxShadow='2xl'>

      <Image src='https://genomicsengland.imgix.net/images/Technology/Bioinformatics-and-data-hands.jpg?auto=format%2Ccompress&fit=max&q=80&w=1200&s=950955ef2fb07d99e2411d5f1078cc2f'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading   fontSize={'20px'} py='35px'color='white'>Genomics and <br /> Bioinformatics</Heading>
    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex>
    <Flex w='340px'  placeItems={'center'}   flexDirection={'column'} letterSpacing='1px' boxShadow='2xl'  border='10px'  borderRadius={'15px'}>

      <Image src='https://www.tail-f.com/wordpress/wp-content/uploads/2021/07/transaction-blog-feature-image-e1626927706942.jpg'  w='282px' h='230px' objectFit={'cover'} mt='44px'/>

    <Heading fontSize={'20px'} py='35px'color='white'>Network and Automation <br />Specialization</Heading> 
    <Button colorScheme={'teal'} mb='45px'>Read More</Button>

    </Flex> 



 </Flex>
 <Divider color={'red.300'} />
 <Box w={'700px'}mx='auto' mt='20px'>
  <Heading color={'green.500'}>Getting Ready for the Next Generation of the Internet</Heading>
  <Text textAlign={'justify'} color='white' mt='20px'>
  The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse
  , AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements
  . Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge
   computing, voice computing, ambient computing, and more.
     In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and 
     will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
  </Text>
</Box>

<Last />

 </Container>
 
  </Box>

  </>





}
