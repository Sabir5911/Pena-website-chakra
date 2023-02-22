import React from 'react'
import { Box, Button, Container, Flex, Heading, Text,Image, Card } from "@chakra-ui/react"
import Last from './End'
import { RevealWrapper } from 'next-reveal'

export default function Secondlast() {
  return <>
  
  <Box bg='#09121D'   >
                          <Container maxWidth={'1440px'}>
                         

           <Box color={'#11AD8E'} fontFamily='inherit' > 
           <RevealWrapper origin='left' delay={300} duration={1000} distance='500px'  reset={true}> <Heading textAlign={'center'} justifyContent='center' fontSize={'60px'} pt='100px'>Our Partners</Heading></RevealWrapper> 
            <Image src='/Group/fire.svg' ml='-19px' backgroundColor={'#09121D'}/ >
            <Image src='/Group/rocket.svg' ml='25px' mt='-263px'/>

<Flex justifyContent={'center'} gap='55px' bg='#343232' >
    <Image src='/Group/2.svg'/>
    <Image src='/Group/3.svg'/>
    <Image src='/Group/4.svg'/>
    <Image src='/Group/5.svg'/>
    <Image src='/Group/6.svg'/>
    <Image src='/Group/7.svg'/>


</Flex>


<Flex gap={'10px'} ml='-95px' mt='100px'>
    <Box ml='150px' letterSpacing={'1px'} textAlign='center' mt='50px'  boxShadow={'rgba(22,22,22,22)'}>
            <Heading fontSize={'40px'}>Operational<br />{" "} </Heading>
            <Heading >Cities</Heading>
    </Box>

    <Image src='/city/isl.svg' /> 
    <Image src='/city/kar.svg' />
    <Image src='/city/lah.svg' />
    <Image src='/city/pesh.svg' />
    

    <Card  bg='#343232' width={'208px'} height='309px' textAlign={'center'} justify='center'>
       
       <Heading color={'#11AD8E'} fontSize='38px'>
        Coming <br /> Soon
       </Heading>
    </Card>
</Flex>
 

           </Box>

           </Container>
           <Last />


  </Box>
  
  
  
  </>
}
