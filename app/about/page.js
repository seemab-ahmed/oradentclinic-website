import About from '@/component/About'
import CallButton from '@/component/CallButton'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
      <About />
      <WhatsappButton />
      <CallButton />
    </>
  )
}

export default page
