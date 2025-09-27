export default function DrHeader({ title }) {
  return (
    <header data-aos="fade-down" className="w-full bg-[#075791] text-white py-6 sm:py-12 text-center shadow-md">
      <h1 className="text-[1.3rem] sm:text-[2.5rem] font-semibold font-jost leading-normal text-center">{title}</h1>
    </header>
  );
}