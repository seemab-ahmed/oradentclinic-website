import FeaturesSectionCard from '@/component/uiCard/ServiceFeaturesCard'
import CosmeticdentistryFeatur from "@/public/images/serviceFeatures/cosmeticdentistry-2.webp"

const left = [
  { title: 'Nasolabial Folds', description: 'These are the lines that run from the sides of the nose to the corners of the mouth.They are not directly related to teeth but can affect the overall appearance of a smile.' },
  { title: 'Gum Contouring', description:'Gum contouring or reshaping is a procedure that involves removing excess gum tissue to improve the symmetry and appearance of the gums and teeth.It is often performed to address issues like a "smile."' },
  { title: 'Tooth-Colored Fillings.', description: 'Instead of traditional silver amalgam fillings, tooth-colored fillings (composite resin) can be used to repair cavities and tooth damage. They blend in with natural teeth, making them a more aesthetically pleasing option.' },
]

const right = [
  { title: 'Smile Makeovers', description: 'A smile makeover is a comprehensive treatment plan that combines multiple cosmetic procedures to address various dental issues and create a harmonious and attractive smile.' },
  { title: 'Dental Bridges', description: 'Bridges are used to replace one or more missing teeth by attaching artificial teeth to adjacent natural teeth or dental implants. They can improve the appearance and function of the smile' },
  { title: 'Invisalign and Orthodontics', description: 'Invisalign is a popular alternative to traditional braces for correcting misaligned teeth and bite issues. These clear aligners gradually shift teeth into their proper positions, offering a more discreet and comfortable orthodontic treatment' },
]

export default function CosmeticDentistry() {
  return (
    <FeaturesSectionCard
      leftItems={left}
      rightItems={right}
      imageSrc={CosmeticdentistryFeatur}
      imageAlt="Teeth Filling"
    />
  )
}
