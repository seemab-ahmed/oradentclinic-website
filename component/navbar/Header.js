"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Logo from '@/public/images/oraLogo.webp';
import SearchIcon from "@/public/images/icons/searchIcon.png";
import RotateIcon from "@/public/images/icons/rotateIcon.png";


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (name) => {
    setOpenSubmenu(prev => (prev === name ? null : name));
  };
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Our Locations', path: '/',
      submenu: [
        { name: 'I-8 Branch ', path: '/' },
        { name: 'F-8 Branch ', path: 'f8Branch' }
      ]
    },
    {
      name: 'Services',
      submenu: [
        { name: 'All Services', path: '/services/allServices' },
        { name: 'General dentistry', path: '/services/generalDentistry' },
        { name: 'Cosmetic dentistry', path: '/services/cosmeticDentistry' },
        { name: 'Dental Implants', path: '/services/dentalImplants' },
        { name: 'Orthodontics', path: '/services/orthodontics' },
        { name: 'Teeth Whitening', path: '/services/teethWhitening' },
        { name: 'Denture', path: '/services/denture' },
        { name: 'Root Canal', path: '/services/rootCanal' },
        { name: 'Teeth Filling', path: '/services/teethFilling' }
      ],
    },
    {
      name: 'More',
      submenu: [
        { name: 'Dental Team', path: 'dentalTeam' },
        { name: 'Testimonial', path: 'testimonial' }
      ],
    },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blog' },
    { name: 'About', path: '/about' }
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className="py-2 border-b border-[#D6D6D6] bg-white ">
      {/* ${sticky fixed w-full top-0 z-[99] */}
      <div className='max-w-[99%] m-auto px-5 flex justify-between items-center'>
        <Link href="/" className="flex items-center">
          <div className="flex items-center max-w-[221px]">
            <Image
              src={Logo}
              alt="Oradent dental"
              className="w-[80px] md:w-[100px] lg:w-[140px] h-auto"
              priority
            />
          </div>
        </Link>
        <nav className={`
              fixed top-[126px] sm:top-[100px] md:top-[108px] lg:top-28 right-0 h-full max-w-[400px] w-full bg-secondry p-6
              transform duration-300 ease-in-out z-50
              lg:static lg:transform-none lg:flex lg:flex-row bg-[#1B5795] lg:bg-transparent lg:p-0
              flex flex-col gap-[30px] lg:max-w-fit md:space-x-6 transition-all
              ${menuOpen ? "translate-x-0 opacity-100 visible h-full" : "translate-x-full opacity-0 invisible h-0"}
              lg:translate-x-0 lg:opacity-100 lg:visible
            `}>
          <ul className="lg:gap-4 flex items-center space-x-8 flex-col lg:flex-row">
          {navItems.map((item) => (
  <li key={item.name} className="relative text-start m-0 py-2">
    {item.submenu ? (
      <div
        onClick={() => handleSubmenuToggle(item.name)}
        className="flex items-center justify-start lg:justify-center gap-1 px-4 w-full lg:w-fit text-xl leading-5 font-jost font-medium text-[#fff] lg:text-[#1E1E1E] cursor-pointer hover:text-black lg:hover:text-[#1B5795]"
      >
        <span>{item.name}</span>
        <Image 
          src={RotateIcon} 
          alt="Rotate icon" 
          className={`w-3 h-3 mt-1 transition-transform duration-300 ${openSubmenu === item.name ? "rotate-90" : ""}`}
        />
      </div>
    ) : (
      <Link 
        href={item.path}
        className="px-4 w-full lg:w-fit text-lg leading-5 font-jost font-medium text-[#fff] lg:text-[#1E1E1E] hover:text-black lg:hover:text-[#1B5795]"
      >
        {item.name}
      </Link>
    )}

    {/* Submenu: show only if this item is active */}
    {item.submenu && openSubmenu === item.name && (
      <ul className="absolute left-0 top-full lg:pt-9 w-48 bg-white shadow-2xl rounded-lg z-50 transition-all duration-300">
        {item.submenu.map((sub) => (
          <li key={sub.name}>
            <Link
              href={sub.path}
              className="block px-4 text-base lg:text-xl font-jost py-1.5 hover:bg-[#85c441] hover:text-white"
              onClick={() => setOpenSubmenu(null)} // Close on link click
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
))}

            {/* -------------- */}
          </ul>
          <div className="flex lg:hidden items-center gap-4">
            <Link
              href="/"
              className="w-100px"
            >
              <div
                onClick={() => setIsClicked(!isClicked)}
                className={`rounded cursor-pointer transition-all p-2 ${isClicked ? 'border-3 border-[#52a2fd]' : 'border-3 border-[#1B5795]'
                  }`}
              >
                <Image
                  src={SearchIcon}
                  alt="Oradent dental"
                  className="w-[30px] h-auto"
                  priority
                />
              </div>
            </Link>
            <Link
              href="/"
              className=" w-full text-center text-lg leading-5 font-jost font-medium  px-4 py-3 text-white bg-[#85c441] rounded-[8px] hover:bg-[#85c441] transition-colors"
            >
              Appointment
            </Link>
          </div>
        </nav>


        <div className='flex gap-5 items-center'>

          {/* Hamburger */}
          <div className="flex items-end flex-col lg:hidden cursor-pointer" onClick={toggleMenu}>
            <div className="w-7 h-1 bg-black mb-1"></div>
            <div className="w-9 h-1 bg-black mb-1"></div>
            <div className="w-7 h-1 bg-black"></div>
          </div>

          <div className=" hidden lg:flex items-center gap-4">
            <div className='border-4 border-white hover:border-[#c1e8f6] rounded'>
              <Image
                src={SearchIcon}
                alt="Oradent dental"
                className="w-[20px] h-auto m-2"
                priority
              />
            </div>
            <Link
              href="/"
              className="text-[20px] font-medium leading-5 font-jost  px-5 py-3 text-white bg-[#075791] hover:bg-[#85c441] transition-colors"
            >
              Appointment
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;