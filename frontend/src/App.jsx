import { useEffect, useRef, useState } from 'react'
import './App.css';
import { client, urlFor } from './client'
import Modal from './Modal/Modal';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Modal2 from './Modal/Modal2';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { ReactComponent as Sparrow } from './sparrow.svg'

function App() {

  const [imagesObjArr, setImagesObjArr] = useState(() => []);
  const [modal2, setModal2] = useState(() => false);
  const [imgsrc, setImgSrc] = useState(() => null)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo("#svg", {
      scale: 0,
    }, {
      scrollTrigger: {
        scrub: 1
      },
      scale: 1,
      duration: 2
    })
  })
  useEffect(() => {
    (async function () {
      const data = await client.fetch('*[_type == "images" ]');
      setImagesObjArr(data);
    })()
  }, [])
  return (
    <Flex color={'rgba(255, 255, 255, 0.87)'} w={'100%'} className="App">
      <Toaster />
      {modal2 && <Modal2 setModal2={setModal2} imgsrc={imgsrc} />}
      {true && <Modal />}
      <Flex w={window.innerWidth > 1200 ? '50%' : '100%'}
        zIndex={window.innerWidth > 1200 ? 0 : 1} flexWrap={'wrap'}>
        <Text
          pos={'sticky'} bg={'white'}
          display={'block'} color={'black'} p={15} textAlign={'center'} w={'full'} >Shinzou</Text>
        <Flex flexWrap={'wrap'} mt={15} justifyContent={'center'}>
          {imagesObjArr?.map((item, i) => <Box
            key={i}
            borderRadius={10}
            overflow={'clip'}
            id='img_container'
          >
            <Image as={motion.img} borderRadius={10}
              id={'img'}
              onClick={() => {
                setImgSrc(item?.galleryImage)
                setModal2(true);
              }}
              initial={{ scale: 0.1 }} whileInView={{ scale: 1 }}
              src={urlFor(item?.galleryImage)} alt={item?.imageTitle} />
          </Box>)}
        </Flex>

      </Flex>
      <Box id={'sv-container'} pos={'fixed'} h={'100vh'}>
        <Sparrow id={'svg'} />
      </Box>
    </Flex>
  )
}

export default App
