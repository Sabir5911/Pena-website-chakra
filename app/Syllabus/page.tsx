"use client"
import React from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Image, Text, Link } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/Footer'
import Comman from '../Commen/Common'
import { data } from './Data'
import { RevealList } from 'next-reveal'

export default function page() {
  return <>
    <Box bg={'gray.800'}>
      <Header />
      <Container maxWidth={'1440px'} textAlign='center' >

        <Comman />
        {data.map((elm) => (


            <Box>
              
                <Heading color='white' py='30px' fontSize={'3xl'}  >
                  {elm.heading1} <br /> Specialization
                </Heading>
                <RevealList origin='top' delay={600} duration={1200} distance='50px' reset={true} interval={60}>

              <Flex justifyContent={'center'} mt='50px' gap='50px' >
                <Box w='300px' h='380px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'8px'} fontFamily='inherit' >
                  <Image mx='auto' src={elm.src1} borderRadius={'3px'} w='250px' h='185px' objectFit={'cover'} mt='25px' boxShadow={'dark-lg'} />

                  <Heading color={'white'} fontSize='18px' my='12px' mr='142px' textDecor={'underline'}>{elm.heading2}</Heading>

                  <Text color={'white'} fontSize='14px' pl='32px' pr='11px' textAlign={'justify'}> {elm.text2}</Text>

                  <Divider color={'white'} my='16px' /> 
                  <Link colorScheme={'teal'} color='white' >Read More</Link>     
                </Box>
                
                <Box w='300px' h='380px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'8px'}fontFamily='inherit' >
          <Image mx='auto' borderRadius={'3px'} src={elm.src2} w='250px' h='185px' objectFit={'cover'} mt='25px' boxShadow={'dark-lg'} />

                  <Heading color={'white'} fontSize='18px' my='12px' mr='142px' textDecor={'underline'}>{elm.heading3}</Heading>

                  <Text color={'white'} fontSize='14px' pl='32px' pr='11px' textAlign={'justify'}> {elm.text3}</Text>

                  <Divider color={'white'} my='16px' />
                  <Link colorScheme={'teal'} color='white'>Read More</Link>
                </Box>

              </Flex>

              </RevealList>
              <Divider my='20px' color={'gray.800'} w='70%' mx='auto' />

            </Box>


        ))}
     
      </Container>

      <Last />
    </Box>




  </>
}

