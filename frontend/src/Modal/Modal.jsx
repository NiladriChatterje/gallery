import React, { useRef } from 'react';
import { Button, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { client } from '../client';
import { toast } from 'react-hot-toast';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const Modal = () => {
    const [toggle, setToggle] = React.useState(() => false)

    const passwordRef = useRef();
    const modalRef = useRef();
    async function checkCredentials() {
        toast('Validating Credentials...')
        const data = await client.fetch('*[_type == "credentials"]');

        if (data[0]?.password === passwordRef.current.value) {
            modalRef.current.style.display = 'none';
            toast('Credentials matched successfully')
        } else {
            toast('wrong credentials!!')
        }

    }

    return (
        <Flex
            ref={modalRef}
            bg={'rgba(0,0,0,0.6)'}
            backdropFilter={'blur(55px)'}
            w={'100vw'}
            h={'100vh'}
            zIndex={5}
            left={0}
            top={0}
            pos={'fixed'}>
            <FormControl
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                w={window.innerWidth > 1200 ? '45vw' : '85vw'}
                h={'40vh'}
                left={'50%'}
                top={'50%'}
                borderRadius={10}
                bg={'white'}
                transform={'translate(-50%,-50%)'}
                pos={'fixed'}>
                <InputGroup w={'60%'}>
                    <Input textAlign={'center'} placeholder='PassWord'
                        fontWeight={900} ref={passwordRef} color={'black'}
                        type={toggle ? 'text' : 'password'} />
                    <InputRightElement children={toggle ? <AiFillEye color={'black'} cursor={'pointer'} /> : <AiFillEyeInvisible color={'black'} cursor={'pointer'} />}
                        onClick={() => setToggle(prev => !prev)} />
                </InputGroup>
                <Button bg={'teal.900'}
                    onClick={checkCredentials}
                    variant={'solid'} mt={10} >Check In</Button>
            </FormControl>
        </Flex>
    )
}

export default Modal