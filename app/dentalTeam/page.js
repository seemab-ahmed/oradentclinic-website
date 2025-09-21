import CallButton from '@/component/CallButton'
import DentistTeam from '@/component/DentistTeam'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
      <DentistTeam/>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
