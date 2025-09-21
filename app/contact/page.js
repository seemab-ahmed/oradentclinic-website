import React from 'react'
import Map from '@/component/MapContacInfo'
import ContactForm from '@/component/ContactForm'
import WhatsappButton from '@/component/Whatsapp'
import CallButton from '@/component/CallButton'

const page = () => {
  return (
    <>
      <Map />
      <WhatsappButton />
      <CallButton />

    </>
  )
}

export default page
