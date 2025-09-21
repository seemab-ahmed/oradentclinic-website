import FeaturesSectionCard from '@/component/uiCard/ServiceFeaturesCard'
import GeneralDentistry from "@/public/images/serviceFeatures/generalDentistry.webp"

const left = [
  { title: 'Preventive Care for Long-Term Health', description: 'Sealants, fluoride treatments, and oral health education are critical tools for protecting teeth, particularly in youngsters, against decay and damage. Our experts are focused on lasting results.' },
  { title: 'Improved Quality of Life', description: 'Patients benefit from greater oral health, improved chewing, and a higher quality of life when dental problems are avoided. You can achieve this with our credible general dentistry services.' },
  { title: 'Routine Checkups and Cleanings.', description: 'Regular visits to a general dentist assist in maintaining oral hygiene and detect early symptoms of problems such as cavities or gum disease before they progress.' },
  { title: 'Treatment', description: 'General dentists provide a variety of treatments to address dental problems such as fillings, dental crowns and bridges for damaged teeth, root canals for infected teeth, and extractions.' },
]

const right = [
  { title: 'Emergency Care', description: 'General dentists are often available for dental emergencies, such as toothaches, broken teeth, or dental trauma.' },
  { title: 'Early Detection Saves Time and Money', description: 'General dentistry ensures that possible issues are identified early on, eliminating the need for more intrusive and costly procedures later on. At Oradent Dental Care, we consider everything to make your money value.' },
  { title: 'Collaboration with Specialists', description: 'If specialized care is needed (e.g., orthodontics, oral surgery), general dentists coordinate referrals and collaborate with specialists to ensure comprehensive treatment plans.' },
]

export default function GeneralDentistryFeature() {
  return (
    <FeaturesSectionCard
      leftItems={left}
      rightItems={right}
      imageSrc={GeneralDentistry}
      imageAlt="Teeth Filling"
    />
  )
}
