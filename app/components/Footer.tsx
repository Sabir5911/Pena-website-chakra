import React from 'react'
import { Box, Button, Container, Flex, Heading, Text ,Image} from "@chakra-ui/react"
import Header from './Header'

export default function Footer() {
    return <>

        <Box backgroundImage={'banner.jpeg'} height='auto' >
            <Header />
            <Flex flexDirection={'column'} gap={{base:"9px",sm:"25px",lg:"30px"}} ml={{base:"30px",sm:"75px",lg:"200px"}} mt={{base:"60px",sm:"150px",lg:"200px"}} fontFamily={'inherit'}>
                <Box pb='20px' >

                    <Heading color={'teal'} fontSize={{base:"15px",sm:"25px",lg:"45px"}}>
                        <Text color={'white'}>Become</Text>
                        Certified Web 3.0 <Text color={'white'} display='inline'>and</Text> <br />
                        Metaverse Developer

                    </Heading>

                    <Text color={'white'} fontSize={{base:"8px",sm:"14px",lg:"28px"}} mt={{base:"10px",sm:"5px",lg:"25px"}}>launch Your Dev Career With Web 3 and Metaverse <br />
                        Getting Ready for the Next Generation of the <br /> Internet</Text>
                </Box>


                <Box><Button colorScheme={'teal'} size={{base:"sm",sm:"sm",lg:"lg"}} color={'black'} mt='-15px' >join Now</Button></Box>
                {/* <Image /> */}

            </Flex>

            <Flex justifyContent={'right'} mt={{base:"-12rem",sm:"-18rem",lg:"-28rem"}} mr={{base:"-13px",sm:"-40px",lg:"-40px"}}>
                <Image src='banner2.svg' alt='logo' width={{base:"180px",sm:"350px",lg:"600px"}}/>

            </Flex>
        </Box>
    </>
}
