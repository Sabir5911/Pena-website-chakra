"use client"
import React from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Image, Text, Link } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/End'
import Comman from '../Commen/Common'
import { data } from './Data'
import { RevealList } from 'next-reveal'

export default function page() {
  return <>
    <Box bg={'gray.800'}>
      <Header />
      <Container maxWidth={'1440px'} textAlign='center'>

        <Comman />
        {data.map((elm) => (

          <RevealList origin='top' delay={600} duration={2000} distance='250px' reset={true} interval={60}>

          <Box>
            <Box textAlign={'center'} boxShadow='dark-lg' fontSize={'14px'} border='10px' borderRadius={'4px'} w='930px' h='180px'
              mx='auto' mt='80px' bg={'gray.900'}>
              <Heading color='#11AD8E' py='30px' fontSize={'3xl'} >
                {elm.heading1}
              </Heading>
              <Text color='white' textAlign={'center'} px='20px' >

                {elm.text1}

              </Text>
            </Box>

            <Flex justifyContent={'space-around'} mt='100px' >
              <Box w='290px' h='360px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'15px'} >
                <Image mx='auto' borderRadius={'3px'} w='250px' h='185px' objectFit={'cover'} mt='25px' boxShadow={'dark-lg'} />

                <Heading color={'white'} fontSize='18px' my='12px' mr='142px' textDecor={'underline'}>{elm.heading2}</Heading>

                <Text color={'white'} fontSize='14px' pl='32px' pr='11px' textAlign={'justify'}> {elm.text2}</Text>

                <Divider color={'white'} my='8px' />
                <Link colorScheme={'teal'} color='white'>Read More</Link>
              </Box>

              <Box w='290px' h='360px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'15px'} >
                <Image mx='auto' borderRadius={'3px'} w='250px' h='185px' objectFit={'cover'} mt='25px' boxShadow={'dark-lg'} />

                <Heading color={'white'} fontSize='18px' my='12px' mr='142px' textDecor={'underline'}>{elm.heading3}</Heading>

                <Text color={'white'} fontSize='14px' pl='32px' pr='11px' textAlign={'justify'}> {elm.text3}</Text>

                <Divider color={'white'} my='8px' />
                <Link colorScheme={'teal'} color='white'>Read More</Link>
              </Box>


            </Flex>

          </Box>
          </RevealList>

        ))}

      </Container>

      <Last />
    </Box>




  </>
}

