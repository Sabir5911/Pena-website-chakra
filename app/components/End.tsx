import React from 'react'

import { Box, Button, Container, Flex, Heading, Text, Image, SimpleGrid, Input, Link ,Divider} from "@chakra-ui/react"

export default function Last() {
  return <>
  <Box  backgroundImage={'b.svg'}  maxW={'1440px'}  mt='50px'  h='280px'> 

      <SimpleGrid templateColumns={'repeat(4,1fr)'}    >


        <Flex direction={'column'} color='white'  fontSize={'15px'} gap='10px'  ml={'50px'}>
          <Image src='logo.svg' pt='40px' w={{base:"",sm:"",lg:"120px"}}  />
          <Text>Plot 245/2 M, PECHS Block 6, Karachi</Text>
          <Text>0308-2220203</Text>
        </Flex>


        <Flex direction={'column'} color='white' pt='40px' fontSize={'15px'} gap='10px' ml={'50px'}>
          <Link href='/'>Home</Link>
          <Link href='/About'>About</Link>
          <Link href='/Courses'>Courses</Link>
          <Link href={'https://www.piaic.org/howitworks'}> Contact</Link>

        </Flex>
        <Flex color={'#11AD8E'}  pt='50px' ml={'50px'}>

          <Heading fontSize={{base:"",sm:"",lg:"25px"}}>Follow us</Heading>
        </Flex>
        <Flex color={'#11AD8E'} direction='column' gap={'15px'}  pt='40px' ml={'50px'}>

          <Heading fontSize={{base:"",sm:"",lg:"30px"}}>Subscribe</Heading>

          <Input placeholder='Enter here' bg={'white'} w={{base:"",sm:"",lg:"150px"}}/>
          <Box>  <Button colorScheme={'teal'} size='sm'>Subscribe</Button>
          </Box>



        </Flex>



      </SimpleGrid>

<Divider color={'#11AD8E'} mt='15px'/>
      <Box    >
        <Text color={'#11AD8E'} fontSize='18px' textAlign={'center'} pt='32px'>    2023 Panaverse Dao. All rights reserved.
        </Text>
      </Box>
    </Box>
  </>
}
