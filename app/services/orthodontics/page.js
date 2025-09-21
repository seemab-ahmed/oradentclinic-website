import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import CosmeticDentistry from '@/component/CosmeticDentistryFeature'
import Orthodontics from '@/component/Orthodontics'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Orthodontics/>
    <AppointmentSection/>
    <CosmeticDentistry/>
     <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
