import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "about" },
    { name: "Community", href: "community" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed top-0 z-50  w-full p-6 md:h-[95px] bg-white">
      <div className="mx-auto max-w-6xl flex items-center">
        <div className="mr-auto">
          <img
            src="/image/logo.png"
            alt="Global Wissen Logo"
            className="w-20"
          />
        </div>
        <div className="hidden md:flex items-center justify-center mx-auto">
          <div className="flex items-center justify-center gap-8 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                smooth={true}
                duration={500}
                className="cursor-pointer text-[16px] text-[#58595B] font-normal hover:text-black transition-colors duration-200"
                to={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="cursor-pointer p-1 w-24 h-11 rounded-[12px] text-[16px] font-normal text-black  hover:text-[#1077ED] transition-colors duration-200">
            Login
          </button>
          <button className="w-36 h-11 p-1 cursor-pointer bg-[#003057] rounded-[12px] text-[16px] font-normal text-white">
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
