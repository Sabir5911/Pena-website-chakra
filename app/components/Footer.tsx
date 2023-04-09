import React from 'react'

import { Box, Button, Container, Flex, Heading, Text, Image, SimpleGrid, Input, Link, Divider } from "@chakra-ui/react"
import { RevealWrapper } from 'next-reveal'

export default function Footer() {
  return <>
    <Box mt='50px'   backgroundImage={'b.svg'} >
    <RevealWrapper origin='left' delay={100} duration={600} distance='500px' reset={true}>
    <Container maxWidth={'1440px'}>
      <Flex justifyContent={'space-around'}  h='auto'maxWidth={'auto'} pt='40px' alignItems={'center'}>


        <Flex direction={'column'} color='white' fontSize={'15px'} gap='15px'>
          <Image src='logo.svg' w={{ base: "", sm: "", lg: "120px" }} />
          <Text>Plot 245/2 M, PECHS Block 6, Karachi</Text>
          <Text>0308-2220203</Text>
        </Flex>


        <Flex direction={'column'} color='white'  fontSize={'20px'} gap='10px'  >
          <Link href='/'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Courses'>Courses</Link>
          <Link href={'https://www.piaic.org/howitworks'}> Contact</Link>

        </Flex>
        <Flex color={'#11AD8E'} >

          <Heading fontSize={{ base: "", sm: "", lg: "25px" }}>Follow us</Heading>
        </Flex>
        <Flex color={'#11AD8E'} direction='column' gap={'20px'}  >

          <Heading fontSize={{ base: "", sm: "", lg: "30px" }}>Subscribe</Heading>

          <Input placeholder='Enter here' bg={'white'} w={{ base: "", sm: "", lg: "150px" }} />
          <Box>  <Button colorScheme={'teal'} size='sm'>Subscribe</Button>
          </Box>
      
       
        </Flex>



      </Flex>
      <Divider mt='15px' />
      <Text color={'#11AD8E'} fontSize='18px' textAlign={'center'} m='auto' py='30px'>    2023 Panaverse Dao. All rights reserved.
        </Text>
        </Container>
    </RevealWrapper>



    </Box>
    

  </>
}
