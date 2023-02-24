import React from 'react'
import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { RevealList, RevealWrapper } from 'next-reveal'
import { Data5 } from '../Courses/Data'

export default function Section() {
    return <>

        <Box bg='#09121D' pt='100px'  >
            <Container maxWidth={'1440px'}>

                <Box textAlign={'center'} color='#11AD8E' >
                    <RevealWrapper origin='left' delay={300} duration={2000} distance='500px' reset={true}>
                        <Heading fontSize={'45px'}>Why to join</Heading>                         </RevealWrapper>

                    <Text color={'white'} fontSize='22px' pt='20px'>
                        In this brand-new type of curriculum, students will learn how to make money and boost exports<br />
                        in the classroom and will begin doing so within six months of the program's beginning. It <br />
                        resembles a cross between a corporate venture and an educational project.
                    </Text>
                </Box>
                <RevealWrapper origin='left' delay={200} duration={1000} distance='250px' reset={true}>

                    <Flex justifyContent={'center'} gap='25px' mt='100px' pb={'40px'} color={'white'} fontWeight='thin' letterSpacing={'1px'}>
                        {
                            Data5.map((elm) => (

                                <Box height={'400'} w='280px' border={'2px'} borderColor='#11AD8E' borderRadius={'10px'} bg='rgba(112,107,107,0.36)' >
                                    <Heading mt='90px' textAlign={'center'} fontSize={'28px'} > {elm.Heading}</Heading>

                                    <Image src={elm.src} mt={'38px'} mx='auto' />
                                </Box>
                            ))
                        }

                    </Flex>
                </RevealWrapper>

            </Container>
        </Box>


    </>



}
