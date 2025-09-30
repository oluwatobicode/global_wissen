import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "community" },
    { name: "Our Services", href: "services" },
    { name: "Contact Us", href: "contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full p-6 md:h-[95px] bg-white">
      <div className="mx-auto max-w-6xl flex items-center">
        <div className="mr-auto">
          <img src="logo.png" alt="Global Wissen Logo" className="w-20" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center mr-auto">
          <div className="flex items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                smooth={true}
                duration={500}
                className="cursor-pointer font-family-montserrat text-[16px] font-medium text-[#222222] hover:text-black transition-colors duration-200"
                to={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#58595B] hover:text-black transition-colors duration-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-100">
          <div className="flex flex-col items-center justify-center space-y-4 p-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                smooth={true}
                duration={500}
                className="cursor-pointer text-[16px] text-[#222222] font-normal hover:text-black transition-colors duration-200"
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
