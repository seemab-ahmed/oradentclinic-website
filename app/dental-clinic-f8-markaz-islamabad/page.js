import AboutI8Branch from '@/component/AboutI8Branch'
import CallF8 from '@/component/CallF8'
import Carousel from '@/component/Carousel'
import F8AppoinmentSection from '@/component/F8AppoinmentSection'
import F8ContactInfo from '@/component/F8ContactInfo'
import F8DentistTeam from '@/component/F8DentistTeam'
import F8ContactSection, { F8Map } from '@/component/F8Map'
import F8TimingSection from '@/component/F8TimingSection'
import OnlinePaymentSection from '@/component/OnlinePaymentSection'
import Testimonial from '@/component/Testimonial'
import WhatsAppF8 from '@/component/WhatAppF8'
import React from 'react'

const page = () => {
  return (
    <>
    <Carousel />
    <F8TimingSection/>
    <F8ContactInfo/>
    <AboutI8Branch/>
    <F8DentistTeam/>
    <F8AppoinmentSection/>
    <F8ContactSection/>
    <WhatsAppF8/>
    <CallF8/>
    <Testimonial/>
    </>
  )
}

export default page
