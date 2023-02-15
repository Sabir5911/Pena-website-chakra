import React from 'react'
import { Box, Button, Container, Flex, Heading, Image,Text } from "@chakra-ui/react"
import Link from 'next/link'
export default function Header() {
  return <>

    <Box fontSize={{sm:'20px',base:'11px',lg:"25px"}} fontFamily='inherit' fontWeight={'medium'} bg='rgba(18, 18, 18, 0.4)' boxShadow={'rgba(18, 18, 18, 0.4)'} >

      <Container maxWidth={'auto'} height={{sm:'80px',base:'60px',lg:"120px"}} >
      <Flex   placeContent= {{sm:'space-around',base:'space-around',lg:'space-around'}}>
        
        <Box  mt={{sm:'11px',base:'16px',lg:"15px"}} ml='-11px'>

          <Image src='/logo.svg'  w={{sm:'90px',base:'50px',lg:"140px"}} />
        </Box>

        <Flex gap={{sm:'30px',base:'12px',lg:"60px"}} placeItems='center' color={'white'}  mt={{sm:'18px',base:'12px',lg:"15px"}} flexGrow={{sm:'0.3',base:'0.2',lg:"0.4"}} >

          <Link href={''}>Home</Link>

          <Link href={''}>About</Link>

          <Link href={''}>Courses</Link>

          <Link href={''}> Contact</Link>


        </Flex>

        <Flex placeItems='right' > <Button  colorScheme={'teal'} color='black'  size={{sm:'md',base:'sm',lg:"lg"}} mt={{sm:'30px',base:'18px',lg:"38px"}}>
        Apply
          </Button></Flex>

      </Flex>
      </Container>
    </Box>

  </>
}
