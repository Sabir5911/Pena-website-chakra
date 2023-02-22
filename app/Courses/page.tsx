"use client"

import { RevealWrapper } from 'next-reveal'
import { Data, Data2 } from '../DataBase/Data'
import { Box, Button, Container, Flex, Heading, Text, Image, HStack, Divider } from "@chakra-ui/react"
import Header from '../components/Header'
import Last from '../components/End'
export default function page() {
  return <>

    <Box bg='gray.800' >
      <Header />

      <Container maxW={'1440px'}> 
<Box textAlign={'center'}>
<RevealWrapper origin='top' delay={200} duration={1200} distance='50px' reset={true}>

<Heading  color='white' mt='50px' >Available Programs</Heading>
          <Text textAlign={'center'} color='#11AD8E' mt='15px' fontSize={'18px'}>
            After completing the first two quarters the participants will select one or more specializations consisting of two courses each

          </Text>
          </RevealWrapper >

</Box>
        
        <RevealWrapper origin='top' delay={200} duration={1400} distance='500px' reset={true}  >
          <Flex mt='50px' justifyContent={'center'} fontStyle='inherit' textAlign='center' gap={'60px'} >

            {Data.map((elm) => (


              <Box w='320px' bg='gray.700' boxShadow='dark-lg' letterSpacing='1px' border='10px' borderRadius={'15px'} >

                <Image mx='auto' dropShadow={'2xl'} src={elm.src} borderRadius={'8px'} w='262px' h='230px' objectFit={'cover'} mt='40px' />

                <Heading fontSize={'20px'} py='25px' color='white'> {elm.Headin1} <br /> Specialization</Heading>

                <Button colorScheme={'teal'}  mb='30px' size={'md'}>{elm.Text1}</Button>


              </Box>
            ))} 
 
          </Flex>
        </RevealWrapper >
        {/* ///////////////////////// */}
        <RevealWrapper origin='left' delay={200} duration={1500} distance='500px' reset={true}  >


          <Flex mt='120px' justifyContent={'center'} fontStyle='inherit' textAlign='center' gap={'60px'} mb='80px'>

            {Data2.map((elm) => (
              <Box w='320px' bg='gray.700' flexDirection={'column'} boxShadow='dark-lg' letterSpacing='1px' border={'10px'} borderRadius='15px' >

                <Image mx='auto' dropShadow={'2xl'} src={elm.src} w='262px' h='230px' objectFit={'cover'} mt='40px' borderRadius={'8px'} />

                <Heading fontSize={'20px'} py='25px' color='white'>{elm.Headin1} <br />Specialization</Heading>

                <Button colorScheme={'teal'}  mb='30px'>{elm.Text1}</Button>

              </Box>
            ))}

          </Flex>
        </RevealWrapper >

        <Divider color={'white'}/>
        <Box w={'700px'} mx='auto' mt='40px' textAlign={'center'}>
        <RevealWrapper origin='top' delay={300} duration={1000} distance='5px'  reset={true} >

          <Heading color={'#11AD8E'}>Getting Ready for the Next Generation <br />  of the Internet</Heading> 
          </RevealWrapper>

          <Text textAlign={'justify'} color='white' mt='20px' fontSize={'18px'}>
            The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse
            , AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements
            . Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge
            computing, voice computing, ambient computing, and more.
            In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and
            will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Box>

      </Container>

      <Last />

    </Box>
  </>

}
