import React from 'react'
import { Box, Button, Container, Flex, Heading, Text ,Image} from "@chakra-ui/react"
import Header from './Header'
export default function Second() {
    return <>

        <Box backgroundImage={'banner.jpeg'} maxWidth={'1440px'}  >
        <Header />

            <Flex flexDirection={'column'} gap={{base:"9px",sm:"25px",lg:"30px"}} ml={{base:"30px",sm:"80px",lg:"90px"}} mt={{base:"60px",sm:"150px",lg:"150px"}} fontFamily={'inherit'}>
                <Box  >

                    <Heading color={'teal'} fontSize={{base:"15px",sm:"15px",lg:"40px"}}>
                        <Text color={'white'}>Become</Text>
                        Certified Web 3.0 <Text color={'white'} display='inline'>and</Text> <br />
                        Metaverse Developer

                    </Heading>

                    <Text color={'white'} fontSize={{base:"8px",sm:"10px",lg:"18px"}} mt={{base:"10px",sm:"5px",lg:"25px"}}>launch Your Dev Career With Web 3 and Metaverse <br />
                        Getting Ready for the Next Generation of the <br /> Internet</Text>
                </Box>


                <Box><Button colorScheme={'teal'} size={{base:"sm",sm:"sm",lg:"md"}} color={'black'} mt='1px' >join Now</Button></Box>
                {/* <Image /> */}

            </Flex>

            <Flex justifyContent={'right'} mt={{base:"-10rem",sm:"-159px",lg:"-20rem"}} >
                <Image src='banner2.svg' alt='logo' width={{base:"160px",sm:"200px",lg:"450px"}}/>

            </Flex>
        </Box>
    </>
}
