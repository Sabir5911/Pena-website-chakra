"use client"
import React from 'react'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/Footer'
import { RevealList, RevealWrapper } from 'next-reveal'
import { Data4 } from './Data'
export default function page() {
  return <>

    <Box bg='gray.800'  >
      <Header />

      <Container maxW={'1440px'}>

        <Flex direction={'column'} textAlign='center' placeItems={'center'} fontFamily='inherit' gap={'30px'} pt='50px' >

          {Data4.map((elm) => (
            <Box>

              <RevealList interval={100} origin='left' delay={200} duration={1000} distance='500px' reset={true}>

                <Heading color={'White'} fontSize='30px' pb='40px'> {elm.Heading1}
                </Heading>

                <Box width='750px' height='auto' border={'4px'} bg='gray.800' borderColor={'#11AD8E'} fontSize='15px' borderRadius={'12px'} ml='20px' boxShadow={'dark-lg'}>

                  <Text py='30px' color='#11AD8E' textAlign={'justify'} px='20px'>
                    {elm.text1}
                  </Text>
                </Box>
              </RevealList>
            </Box>
          ))}

        </Flex>
      </Container>
      <Last />

    </Box>

  </> 
   




}

