import React from 'react'
import { Box, Button, Container, Flex, Heading, Text,Image } from "@chakra-ui/react"

export default function Contect() {
  return <>

  <Box  bg='#09121D' maxWidth={'1440px'}>
             <Flex flexDirection={'row'} justifyContent='center'>
              
           <Box>
            <Image src='img.svg' width={{base:"9px",sm:"25px",lg:"450px"}} mt='14rem'/>
            </Box>        

            <Box textAlign={'center'} width={{base:"9px",sm:"25px",lg:"550px"}} height={{base:"9px",sm:"25px",lg:"350px"}} borderRadius='10px'mt='140px' fontFamily={'inherit'} color={'#11AD8E'} bg='gray.800'>
                <Heading pt='65px'>The Program in a Nutshell</Heading>
                <Heading pt='0.9rem' fontSize={{base:"9px",sm:"25px",lg:"20px"}} textDecoration='underline'>Earn While You Learn</Heading>

                <Text mt='20px' fontSize={{base:"8px",sm:"10px",lg:"18px"}} color='white'>In this brand-new type of curriculum, students will learn how to <br />
                  make money and boost exports in the classroom and will begin <br />
                   doing so within six months of the program's beginning. It <br />
                    resembles a cross between a corporate venture and an  <br />
                    educational project.</Text>
            </Box>

         
          </Flex>      


  </Box>
  </>

}
