import React from 'react'
import { Box, Button, Container, Flex, Heading, Image,Text } from "@chakra-ui/react"
import Link from 'next/link'
export default function Header() {
  return <>

    <Box fontSize={{sm:'12px',base:'10px',lg:"20px"}} fontFamily='inherit' fontWeight={'medium'} bg='rgba(18, 18, 18, 0.4)' boxShadow={'rgba(18, 18, 18, 0.4)'} >

      <Container maxWidth={'1440px'} height={{sm:'60px',base:'60px',lg:"110px"}} >
      <Flex   placeContent= {{sm:'space-around',base:'space-around',lg:'space-around'}}>
        
        <Box  mt={{sm:'16px',base:'16px',lg:"15px"}} ml='-11px'>

          <Image src='/logo.svg'  w={{sm:'60px',base:'50px',lg:"110px"}} />
        </Box>

        <Flex gap={{sm:'30px',base:'12px',lg:"50px"}} placeItems='center' color={'white'}  mt={{sm:'18px',base:'12px',lg:"15px"}} flexGrow={{sm:'0.3',base:'0.2',lg:"0.4"}} >

          <Link href={'/'}>Home</Link>

          <Link href={'/About'}>About</Link>

          <Link href={'/Courses'}>Courses</Link>

          <Link href={'https://www.piaic.org/howitworks'}> Contact</Link>


        </Flex>

        <Flex placeItems='right' > 

        <Link href={'https://portal.piaic.org/signup'} target='_blank'>
        
        <Button  colorScheme={'teal'} color='black'  size={{sm:'sm',base:'sm',lg:"md"}} mt={{sm:'24px',base:'10px',lg:"20px"}}>
        Apply
          </Button>
          </Link>
          </Flex>

      </Flex>
      </Container>
    </Box>

  </>
}
