import React from 'react'
import { Box, Button, Container, Flex, Heading, Image,Text } from "@chakra-ui/react"
import Link from 'next/link'
import { RevealWrapper } from  'next-reveal'

export default function Header() {
  return <>
         <RevealWrapper origin='top' delay={100} duration={600} distance='1000px' reset={true}>

     <Box  fontSize={{sm:'12px',base:'10px',lg:"20px"}} fontFamily='inherit'  height={{sm:'60px',base:'60px',lg:"110px"}} fontWeight={'medium'} bg='rgba(18, 18, 18, 0.4)' boxShadow={'rgba(18, 18, 18, 0.4)'} >

<Container maxWidth={'1440px'}>
 



      <Flex   placeContent= {{sm:'space-around',base:'space-around',lg:'space-around'}}>
        
        <Box  mt={{sm:'16px',base:'16px',lg:"20px"}} ml='-11px'>

          <Image src='/logo.svg'  w={{sm:'60px',base:'50px',lg:"110px"}} />
        </Box>

        <Flex gap={{sm:'30px',base:'12px',lg:"40px"}} placeItems='center' color={'white'}  mt={{sm:'18px',base:'12px',lg:"25px"}} flexGrow={{sm:'0.3',base:'0.2',lg:"0.4"}} >

          <Link href={'/'}>Home</Link>

          <Link href={'/About'}>About</Link>
 
          <Link href={'/Courses'}>Courses</Link>

          <Link href={'/Syllabus'}>Syllabus</Link>




        </Flex>

        <Flex placeItems='right' > 

        <Link href={'https://portal.piaic.org/signup'} target='_blank'>
        
        <Button  colorScheme={'teal'} color='black'  size={{sm:'sm',base:'sm',lg:"md"}} mt={{sm:'34px',base:'15px',lg:"30px"}}>
        Apply
          </Button>
          </Link>
          </Flex>

      </Flex>
      </Container>

    </Box>
    </RevealWrapper>

  </>
}
