"use client"
import React from 'react'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/End'
import { RevealList, RevealWrapper } from 'next-reveal'
export default function page() { 
  return <>

<Box    bg='gray.800'  >
<Header />

  <Container maxW={'1440px'}>

  

      <Flex direction={'column'} textAlign='center' placeItems={'center'} fontFamily='inherit' gap={'30px'} pt='50px' >

      {/* <RevealList interval={100}  */}

<RevealWrapper origin='top' delay={300} duration={2000} distance='500px'  reset={true}>    <Heading color={'White'} fontSize='30px' letterSpacing={'3px'}> Our Mission { " " }</Heading> </RevealWrapper>  


      <Box  width='750px'height='140px' border={'4px'} borderColor={'#11AD8E'} fontSize='15px' borderRadius={'12px'} ml='20px'>

<Text pt='25px' color='#11AD8E' textAlign={'justify'} px='20px'>
              The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest,
              cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global
              hub for AI, data science, native computing, edge computing, blockchain, augmented reality, and internet of things.
              </Text>
          </Box> 

        


          <RevealWrapper origin='top' delay={300} duration={2000} distance='500px'  reset={true}> 
                     <Heading color={'White'} fontSize='30px' letterSpacing={'1px'}> Program of Studies</Heading> 
</RevealWrapper>

<Box  width='750px'height='250px' border={'4px'} borderColor={'#11AD8E'} fontSize='15px' borderRadius={'12px'} >

<Text pt='30px' color='#11AD8E' textAlign={'justify'} px='20px'>
This curriculum is intended for beginners who want to learn software development from the ground up
. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented
 Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid 
 program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The
  emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses
   will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, 
with core onsite classes complemented by online Zoom laboratories and recorded videos.
        </Text>
    </Box>


   


<Heading color={'White'} fontSize='30px' letterSpacing={'1px'}> Program in a Nutshell{' '}</Heading>

<Box width='750px'height='150px' border={'4px'} borderColor={'#11AD8E'} fontSize='15px' borderRadius={'12px'}>

<Text pt='35px' color='#11AD8E' textAlign={'justify'} px='20px'>
In this brand-new type of curriculum, students will learn how to make money and boost
 exports in the classroom and will begin doing so within six months of the program's beginning.
 It resembles a cross between a corporate venture and an educational project.
        </Text>
    </Box>

    </Flex>

    </Container> 
    <Last />           

   </Box>
         
  </>





}
