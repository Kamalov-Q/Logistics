import { Box, Modal } from '@mui/material'
import React from 'react'

const ContactModal = ({ open, close }) => {
    return (
        <>
            {
                open && <div>
                    <Modal open={open} onClose={close}>
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: 2,
                        }}>
                            <div>
                                <div className='text-center text-[30px]'>Contact with us</div>
                                <form className='mt-5 flex flex-col gap-5'>
                                    <div>
                                        <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md w-full p-2 border-black' />
                                    </div>
                                    <div>
                                        <input type="text" id='familiya' placeholder='Ismingizni kiriting' className='border rounded-md w-full p-2 border-black' />
                                    </div>
                                    <div>
                                        <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md w-full p-2 border-black' />
                                    </div>
                                    <div>
                                        <input type="text" id='ism' placeholder='Ismingizni kiriting' className='border rounded-md w-full p-2 border-black' />
                                    </div>
                                    <button type='submit' className='bg-green-700 text-white px-5 py-2 rounded-md'>Jo'natish</button>
                                </form>
                            </div>
                        </Box>
                    </Modal>
                </div>
            }
        </>
    )
}

export default ContactModal
