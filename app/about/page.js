import About from '@/component/About'
import AboutI8Branch from '@/component/AboutI8Branch'
import AppointmentSection from '@/component/AppointmentSection'
import CallButton from '@/component/CallButton'
import Carousel from '@/component/Carousel'
import WhatsappButton from '@/component/Whatsapp'
import SocialReviewsSection from '@/component/socialReviewsSection '
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel />
      <AboutI8Branch/>
      <SocialReviewsSection/>
      <AppointmentSection/>
      <WhatsappButton />
      <CallButton />
    </>
  )
}

export default page
