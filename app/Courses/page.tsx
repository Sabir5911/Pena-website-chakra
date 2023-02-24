"use client"

import { RevealList, RevealWrapper } from 'next-reveal'
import { Data } from './Data'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack, Divider, Link, Center } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/End'
export default function page() {
  return <>

    <Box bg='gray.800' >
      <Header />

      <Container maxW={'1440px'}>
 
           <Box mx='auto' width={'600px'} h='150px' boxShadow={'dark-lg'} textAlign='center' mt='50px' borderRadius={'10px'}>
            <RevealList origin='top' delay={300} duration={1000} distance='550px' reset={true} interval={100}>

                       <Heading color='#11AD8E' py='20px'>Available Programs</Heading>
                       <Text color={'white'} fontSize='15px'>Earn While You Learn</Text>
                       </RevealList>

      </Box>  

<RevealWrapper  origin='left' delay={600} duration={2000} distance='550px' reset={true}  >

          <Flex mt='80px'  fontStyle='inherit' textAlign='center' gap={'60px'} flexWrap={'wrap'} justifyContent='center'>

          {Data.map((elm) => (

              <Box w='290px' h='370px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'8px'} mx='10px'    >

                <Image mx='auto' dropShadow={'dark-lg'} src={elm.src} borderRadius={'3px'} w='250px' h='170px' objectFit={'cover'} mt='30px' boxShadow={'dark-lg'} />

                <Heading fontSize={'16px'} py='18px' color='white'> {elm.Heading} <br /> Specialization</Heading>

                <Link href={elm.link} color='white' fontSize={'16px'}>Course</Link>
                <Divider />
                <Button colorScheme={'teal'} mt='10px' size={'md'}>Apply Now </Button>
              </Box>                
     
              ))} 

                        </Flex>
                        </RevealWrapper > 

      </Container>
      <Last />

    </Box> 
  </>
 
}
