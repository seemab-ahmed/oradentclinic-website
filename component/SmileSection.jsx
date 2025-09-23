import React from 'react'
import SmileImg from "@/public/images/smileImg.png"
import AboutSection from './uiCard/AboutSection'

const SmileSection = () => {
  return (
    <AboutSection
    subtitle="Why Your Smile Matters"
    title='"Come or simply visit to best dental clinic in Islamabad."'
    tagline="Experience Bright Smiles at OraDent Dental Clinic: Your Comfort, Our Priority"
    description="One of the most crucial parts of your look is your smile, which also greatly affects your confidence and sense of self-worth. A beautiful smile is a reflection of your general health and wellbeing, not just a superficial attribute. Poor dental hygiene can cause a variety of issues, including cavities, gum disease, and even more serious disorders like heart disease and diabetes. A healthy grin demonstrates that you care about yourself and can lead to personal prospects just Book an appointment today for the most Comfortable & Best Dental Clinic OraDent Dental Clinic in islamabad."
    featuresLeft={[
      { title: "Stairlized Equipment" },
      { title: "Fair Price" },
    ]}
    featuresRight={[]}
    imageUrl={SmileImg}
    reverse={true} 
  />
  
  )
}

export default SmileSection
