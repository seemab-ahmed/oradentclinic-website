// components/TeethFilling.jsx
"use client";

import { Breadcrumb, ImageSection, TextContent } from "@/component/uiCard/EachServiceCard";
import TeethWhiteningImg from "@/public/images/services/teeth-whitening.webp"

export default function TeethWhitening() {
  const breadcrumbItems = [
    { label: "Home", href: "https://oradentdentalclinic.com" },
    { label: "Teeth Whitening" },0
  ];
0
  const description =
    "Teeth whitening is a general dental procedure. While some people prefer getting this done professionally, others resort to at-home whitening products." +
    "Whatever the method may be, whitening helps people in getting their bright smile back. " +
    " Apart from removing the tough stains from your teeth, whitening may also bring out the craze lines." +<br/>
    "Do you hesitate while smiling among a bunch of people? Stay fret-free because oradent dental clinic has got your back." +
    "We understand the importance of a shiny and beautiful smile. Do not dull your spark due to stained or yellow teeth."+
    "Take our credible services of teeth whitening in Islamabad.";

  return (
    <div className="container w-full max-w-[1400px] lg:max-w-[1337px] mx-auto px-4 mb-20 mt-26">
      <Breadcrumb items={breadcrumbItems} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <ImageSection
          src={TeethWhiteningImg}
          alt="Teeth Whitening"
        />
        <TextContent
          title="TEETH WHITENING"
          description={description}
          highlight="Some key aspects of general dentistry"
        />
      </div>
    </div>
  );
}
