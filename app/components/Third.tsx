
import React from 'react'
import { Box, Heading, Text, Flex, Image, Container, HStack,AvatarGroup,AvatarBadge,Avatar} from '@chakra-ui/react'


export default function Third() {
    return <>
        <Box height='870px' backgroundImage={'/back/back.svg'} maxWidth={'1440px'} >


            <Flex color='white'  direction='column' placeItems={'center'} fontSize='20px' ml='-190px' gap={'40px'}>
                <Heading color={'white'} mt='100px' fontSize={'50px'}>Student Feedback</Heading>

                <Box mt='20px' border='2px' borderRadius={'15px'} borderColor={'#11AD8E'} w='655px' h='380px' bg='rgba(44,44,44,0.95)' textAlign={'center'} fontFamily={'inherit'} >
                    <HStack px='160px' mt='50px' gap={'10px'}>
                    <AvatarGroup size='xl' max={1} >
  <Avatar name='Ryan Florence' src='sabir.jpg' />

</AvatarGroup>
                        <Text fontSize={'40px'} ml='30px' color={'#11AD8E'}>
                            Sabir.Ali
                        </Text>
                    </HStack>

                    <Text ml='36px' fontSize={'15px'} mb='30px'  mt='-24px'  letterSpacing={'1px'}>
                    Software Engineer
                    </Text>

                    <Text  textAlign={'center'} letterSpacing='2px'>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry. Lorem <br />
                        Ipsum has been the industry's standard<br />
                        dummy text ever since the 1500s, when<br />
                        an unknown printer took a galley.
                    </Text>
                    
                </Box>


             
               
            </Flex>
          
            {/* assssssss */}
            
            <Flex color='white'  direction='row' justify={'center'} fontSize='12px' mt='-490px' ml={'663px'} >
               

                <Box mt='12px' border='1px' borderRadius={'10px'} borderColor={'#11AD8E'} w='350px' h='200px' bg='rgba(44,44,44,0.95)' textAlign={'center'} fontFamily={'inherit'} >
                    <HStack mt='10px'>
                    <AvatarGroup size='sm' max={1} ml='20px' >
  <Avatar name='Ryan Florence' src='sabir.jpg' />

</AvatarGroup>
                        <Text fontSize={'25px'}  color={'#11AD8E'}>
                            Sabir.Ali
                        </Text>
                        
                        
                    </HStack>

                    <Text ml='-45px' fontSize={'12px'}  mb='13px'  mt='-2px' >
                    Software Engineer
                    </Text>

                    <Text  textAlign={'center'} letterSpacing='1px'>
                        Lorem Ipsum is simply dummy text of the <br />
                        printing and typesetting industry. Lorem <br />
                        Ipsum has been the industry's standard<br />
                        dummy text ever since the 1500s, when<br />
                        an unknown printer took a galley.
                    </Text>
                    
                </Box>


             
               
            </Flex>
          
            
            <Flex justify={'right'}>
            <Image src='/back/2.svg' mt='180px' />
            </Flex>

        </Box>


    </>
}
