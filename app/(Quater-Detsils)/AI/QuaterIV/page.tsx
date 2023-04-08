"use client"
import React from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Image, Text, Link ,Center} from "@chakra-ui/react"
import { data } from './Data'
import Header from '@/app/components/Header'
import Last from '@/app/components/Footer'
export default function page() {
  return <>
  
  <Box bg="gray.800">
<Header />
<Container maxW={'1440px'}>

               <Box textAlign={'center'}>
                <Heading color={'white'} my='60px'>AI and Deep Learning Quarter IV</Heading>

      

{
  data.map((elm)=>(

         <Center>

                   <Box color={'white'}  fontFamily='inherit' margin={'40px'} width='780px' height={'300px'} boxShadow={'dark-lg'} borderRadius='10px' fontSize={'17px'}>
                    <Heading color={'#11AD8E'} py='40px'>{elm.Heading}</Heading>
                    <Text px='50px'>{elm.Text}</Text><br />
                       <Text>{elm.Text2}</Text><br />
                       <Link  px='50px' color={'#11AD8E'}>{elm.link}</Link>
                   </Box>

 
         </Center>
                

  ))
}   

</Box>

<Last />

</Container>

  </Box>
  
  
  </>
}
