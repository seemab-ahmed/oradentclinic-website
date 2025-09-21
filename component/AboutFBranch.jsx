import Image from 'next/image';
import TickIcon from "@/public/images/icons/tickIcon.svg"

export default function AboutFBranch() {
  return (
    <section className="py-12 bg-white">
      <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4">
        <div className="mb-8">
          <h5 className="text-[#075791] font-jost font-medium text-[1rem] lg:text-[1.25rem] uppercase relative inline-block mb-2">About Us</h5>
          <h3 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold font-jost leading-snug text-[#091e3e]">
            "A Certified Dental Clinic that you can Trust for all your Dental Needs."
          </h3>
        </div>

        <h4 className="mb-4 italic text-[#6b6a75] font-semibold text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] font-jost">
          Experience Bright Smiles at OraDent Dental Clinic: Your Comfort, Our Priority
        </h4>

        <p className="mb-6 text-sm md:text-[1rem] text-[#6b6a75] font-openSans">
          Welcome to OraDent Dental Clinic. Our friendly and qualified dental team is ready to take good care
          of you, whether it is a regular checkup, cosmetic touch-ups, or getting you pain-free. We prioritise
          your comfort and health and we can not wait to help you keep that confident smile.
          Schedule an appointment today for the most comfortable dental experience at OraDent Dental Clinic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <Image src={TickIcon} alt="Check" width={26} height={26} className="mr-3" />
              <span className="flex items-center font-medium text-[1rem] md:text-[1.25rem] text-[#091e3e] font-jost leading-[1.2] mb-1">HRA Registered</span>
            </div>
            <div className="flex items-center mb-4">
             <Image src={TickIcon} alt="Check" width={26} height={26} className="mr-3" />
              <span className="flex items-center font-medium text-[1rem] md:text-[1.25rem] text-[#091e3e] font-jost leading-[1.2] mb-1">Professional Staff</span>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
             <Image src={TickIcon} alt="Check" width={26} height={26} className="mr-3" />
              <span className="flex items-center font-medium text-[1rem] md:text-[1.25rem] text-[#091e3e] font-jost leading-[1.2] mb-1">Sterilized Equipment</span>
            </div>
            <div className="flex items-center mb-4">
             <Image src={TickIcon} alt="Check" width={26} height={26} className="mr-3" />
              <span className="flex items-center font-medium text-[1rem] md:text-[1.25rem] text-[#091e3e] font-jost leading-[1.2] mb-1">Fair Prices</span>
            </div>
          </div>
        </div>

        {/* Optional appointment button */}
        {/* 
        <div className="mt-8">
          <a
            href="/appointment"
            className="inline-block px-6 py-3 text-white bg-primary hover:bg-blue-700 rounded-md transition"
          >
            Make Appointment
          </a>
        </div> 
        */}
      </div>
    </section>
  );
}
