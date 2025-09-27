import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import DentistTeam from '@/component/DentistTeam'
import WhatsappButton from '@/component/Whatsapp'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel />
    <div className='mt-2 sm:mt-32'>
      <DentistTeam/>
    </div>
      <WhatsappButton/>
      <CallButton/>
    </>
  )
}

export default page
