import React from 'react'
import { Box, Button, Container, Flex, Heading, Image,Text } from "@chakra-ui/react"

export default function Section() {
  return <>
  
             <Box  bg='#09121D' pt='100px' >
                
                <Container maxW={'1440px'} height='750px'>


                    <Box textAlign={'center'} color='#11AD8E' >
                        <Heading fontSize={'45px'}>Why to join</Heading>

                        <Text color={'white'} fontSize='22px' pt='20px'>
                        In this brand-new type of curriculum, students will learn how to make money and boost exports<br />
                         in the classroom and will begin doing so within six months of the program's beginning. It <br />
                         resembles a cross between a corporate venture and an educational project.
                        </Text>
                    </Box>

                    <Flex justifyContent={'center'} gap='25px' mt='100px'  color={'white'} fontWeight='thin' letterSpacing={'2px'}>

                        <Box  height={'400'} w='280px' border={'2px'} borderColor='#11AD8E' borderRadius={'10px'} bg='rgba(112,107,107,0.36)' > 
                            <Heading mt='90px'  textAlign={'center'}  fontSize={'35px'} >Product<br /> Owner</Heading>

                            <Image src='box1.svg' mt={'34px'} ml='77px'/>
                        </Box>
                        <Box height={'400'} w='280px' border={'2px'} borderColor='#11AD8E' borderRadius={'10px'}  bg='rgba(112,107,107,0.36)'>
                            <Heading  mt='90px'  textAlign={'center'}  fontSize={'35px'} >Freelance</Heading>
                            <Image src='box2.svg' mt={'34px'} ml='44px'/>
                        </Box>
                        <Box height={'400'} w='280px' border={'2px'} borderColor='#11AD8E' borderRadius={'10px'}  bg='rgba(112,107,107,0.36)'>
                            <Heading  mt='90px'  textAlign={'center'}  fontSize={'30px'} >Access to <br /> Global Market <br />by dao
</Heading>
<Image src='box3.svg' mt={'44px'} ml='77px'/>
                        </Box>
                        <Box height={'400'} w='280px' border={'2px'} borderColor='#11AD8E' borderRadius={'10px'}  bg='rgba(112,107,107,0.36)'>
                            <Heading  mt='90px'  textAlign={'center'}  fontSize={'33px'} >Boost <br /> Economy
</Heading>
<Image src='box4.svg' mt={'34px'} ml='37px'/>
                        </Box>
                    </Flex>

                </Container>
                
                </Box> 
  
  
  </>
  


}
