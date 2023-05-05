import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor } from '../client';

const Modal2 = ({ setModal2, imgsrc }) => {
    return (
        <Box bg={'rgba(0, 0, 0, 0.6)'} w={'full'} h={'100vh'} zIndex={3} pos={'fixed'}>
            <Flex
                borderRadius={10} overflow={'clip'} bg={'whiteAlpha.900'}
                pos={'fixed'} top={'50%'} left={'50%'} transform={'translate(-50%,-50%)'} alignItems={'center'}
                w={window.innerWidth > 1200 ? "45vw" : "85vw"} h={'70vh'} flexDir={'column'}>
                <AiFillCloseCircle style={{ position: 'absolute', right: 0 }} color='black' cursor={'pointer'}
                    onClick={() => setModal2(false)} />
                <Image
                    as={motion.img} initial={{ scale: 0 }} animate={{ scale: 1 }}
                    src={urlFor(imgsrc)} h={'full'} borderRadius={10} objectFit={'contain'} alt={'image'} />
            </Flex>

        </Box>
    )
}

export default Modal2