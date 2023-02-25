"use client"

import { RevealList, RevealWrapper } from 'next-reveal'
import { data, Data } from './Data'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack, Divider, Link, Center } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/Footer'
export default function page() {
  return <>

    <Box bg='gray.800' >
      <Header />

      <Container maxW={'1440px'}>

        <Box mx='auto' width={'auto'} h='150px' textAlign='center' mt='50px' borderRadius={'10px'}>
          <RevealList origin='top' delay={300} duration={1000} distance='550px' reset={true} interval={100}>

            <Heading color='#11AD8E' py='20px' fontSize={'4xl'}>Specialization</Heading>
            <Text color={'white'} fontSize='15px' mx='100px'>
            The software industry is moving at a neck-breaking pace, on the other hand,
             Pakistan is facing a financial crunch that has the potential to destroy us.
              The main focus of this integrated program is to increase IT Exports of Pakistan
               and help the developers earn while they learn. We are totally focusing our courses 
               on helping our students earn dollars ASAP. Our Web 3, Metaverse, AI,
             Blockchain, Cloud-Native, and IoT courses are merging into a single course with speci
             alizations
            </Text>
          </RevealList>
          <Divider my='20px'  w='70%' mx='auto'  borderStyle={'solid'}/>
        </Box>

        <RevealWrapper origin='top' delay={200} duration={1000} distance='550px' reset={true}  >

          <Flex mt='80px' fontStyle='inherit' textAlign='center' gap={'80px'} justifyContent='center'>

            {Data.map((elm) => (

              <Box w='290px' h='370px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'8px'} mx='10px'    >

                <Image mx='auto' dropShadow={'dark-lg'} src={elm.src} borderRadius={'3px'} w='250px' h='170px' objectFit={'cover'} mt='30px' boxShadow={'dark-lg'} />

                <Heading fontSize={'18px'} py='18px' color='white'> {elm.Heading} <br /> Specialization</Heading>

                {/* <Link href={elm.} color='white' fontSize={'16px'}>Course</Link> */}
                <Divider />
                <Button colorScheme={'teal'} mt='20px' size={'md'}>Apply Now </Button>
              </Box>

            ))}

          </Flex>
        </RevealWrapper >

        {/* /////////////////////////////////// */}
        <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}  >

<Flex mt='80px' fontStyle='inherit' textAlign='center' gap={'80px'} justifyContent='center'>

  {data.map((elm) => (

    <Box w='290px' h='370px' bg='gray.700' boxShadow='dark-lg' border='10px' borderRadius={'8px'} mx='10px'    >

      <Image mx='auto' dropShadow={'dark-lg'} src={elm.src} borderRadius={'3px'} w='250px' h='170px' objectFit={'cover'} mt='30px' boxShadow={'dark-lg'} />

      <Heading fontSize={'18px'} py='18px' color='white'> {elm.Heading} <br /> Specialization</Heading>

      {/* <Link href={elm.link} color='white' fontSize={'16px'}>Course</Link> */}
      <Divider />
      <Button colorScheme={'teal'} mt='20px' size={'md'}>Apply Now </Button>
    </Box>

  ))}

</Flex>
</RevealWrapper >
 
      </Container>
      <Last />

    </Box>
  </>

}
