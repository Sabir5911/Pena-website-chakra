import React from 'react'
import { Box, Button, Container, Divider, Flex, Heading, Image, Text, Link } from "@chakra-ui/react"
import { data2 } from '@/app/Commen/Comman'
import { RevealList, RevealWrapper } from 'next-reveal'

export default function Common() {
    return <>

        <Box textAlign={'center'} boxShadow='dark-lg' border='10px' borderRadius={'8px'} w='830px' h='170px' mx='auto' mt='40px' bg={'gray.900'}>
        <RevealWrapper origin='top' delay={200} duration={1200} distance='50px' reset={true}>

            <Heading color='#11AD8E' py='10px' pt='51px' fontSize={'3xl'}>
                Core Courses Common in All Specializations

            </Heading>
            </RevealWrapper>
            <Text color='white' mt='15px' fontSize={'14px'}>
                Every participant of the program will start by completing the following three Quarter:
            </Text>

        </Box>
        <RevealWrapper origin='left' delay={200} duration={1200} distance='500px' reset={true}>

        <Flex justifyContent={'center'} mt='100px' gap='20' >
            {data2.map((elm) => (

                <Box w='290px' h='360px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'15px'}  >

                    <Image src={elm.src} mx='auto' borderRadius={'3px'} w='250px' h='170px' objectFit={'cover'} mt='30px' boxShadow={'dark-lg'} />

                    <Heading color={'white'} fontSize='18px' my='15px' mr='140px' textDecor={'underline'}>{elm.Heading}</Heading>

                    <Text color={'white'} fontSize='14px' pl='32px' pr='11px' textAlign={'justify'}>{elm.Text}  </Text>
                    <Divider color={'white'} my='15px' />
                    <Link href='../AI' color='white'>Read More</Link>

                </Box>
               

            ))}


        </Flex>
        </RevealWrapper>


    </>
}
