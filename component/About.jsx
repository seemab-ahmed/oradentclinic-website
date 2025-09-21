import AboutSection from '@/component/uiCard/AboutSection';
import AboutImg from "@/public/images/about1.webp";

export default function About() {
  return (
    <AboutSection
      subtitle="About Us"
      title='"Certified Best Dental Clinic In Islamabad that you can Trust for all your Dental Needs."'
      tagline="Experience Bright Smiles at OraDent Dental Clinic: Your Comfort, Our Priority"
      description="Welcome to the best dental clinic in islamabad OraDent Dental Clinic. Our friendly and qualified dental team is ready to take good care of you, whether it is a regular checkup, cosmetic touch-ups, or getting you pain-free. We prioritise your comfort and health and we can not wait to help you keep that confident smile. Schedule an appointment today for the most comfortable dental experience at Best Dental Clinic OraDent Dental Clinic in islamabad."
      featuresLeft={[
        {
          title: 'Positive Reputation',
          description:
            'Look for a clinic with a solid reputation in the society. Patient testimonials, online reviews, and word-of-mouth recommendations can provide useful information about the level of care you can expect.',
        },
        {
          title: 'Professional Staff',
          description:
            'Look for a clinic with a solid reputation in the society. Patient testimonials, online reviews, and word-of-mouth recommendations can provide useful information about the level of care you can expect.',
        },
      ]}
      featuresRight={[
        {
          title: 'Expertise Equipment Users',
          description:
            'Our team includes experts in cosmetic, orthodontic, and restorative dentistry for personalized care.The top clinics employ competent dentists who specialize in a variety of areas, including cosmetic dentistry, orthodontics, and restorative operations. This guarantees that you receive comprehensive care that is tailored to your individual requirements.',
        },
        {
          title: 'Technology Usage',
          description:
            'Modern dentistry is primarily reliant on modern technologies. The top clinics use cutting-edge technology and techniques, such as digital X-rays and laser dentistry, to ensure precise and effective treatments.',
        },
      ]}
      imageUrl={AboutImg}
    />
  );
}
