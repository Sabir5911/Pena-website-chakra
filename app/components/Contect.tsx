import React from 'react'
import { Box, Button, Container, Flex, Heading, Text,Image } from "@chakra-ui/react"

export default function Contect() {
  return <>

  <Box  bg='#09121D'>
             <Flex flexDirection={'row'} justifyContent='center'>
              
           <Box>
            <Image src='img.svg' width={'500px'} mt='14rem'/>
            </Box>        

            <Box textAlign={'center'} width='680px' height={'380px'} borderRadius='10px'mt='140px' fontFamily={'inherit'} color={'#11AD8E'} bg='blackAlpha.500'>
                <Heading pt='65px'>The Program in a Nutshell</Heading>
                <Heading pt='0.9rem' fontSize={'30px'}>Earn While You Learn</Heading>

                <Text mt='20px' fontSize={'20px'} color='white'>In this brand-new type of curriculum, students will learn how to <br />
                  make money and boost exports in the classroom and will begin <br />
                   doing so within six months of the program's beginning. It <br />
                    resembles a cross between a corporate venture and an  <br />
                    educational project.</Text>
            </Box>

         
          </Flex>      



  </Box>
  </>

}
