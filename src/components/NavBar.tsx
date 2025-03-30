
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isMainPage) {
      // If we're not on the main page, navigate to main page with hash
      return; // The Link component will handle navigation
    }
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-glucose-100">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/94d02c19-eb94-480c-a81f-06f80c5b0cb8.png" 
                alt="Risi Lab Logo" 
                className="w-8 h-8 mr-2" 
              />
              <span
                className={cn(
                  "font-medium text-lg transition-colors duration-300",
                  scrolled ? "text-glucose-900" : "text-glucose-800"
                )}
              >
                Risi Lab
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              isMainPage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={`/${link.href}`} className="nav-link">
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md",
          mobileMenuOpen ? "max-h-screen py-4 border-b" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) =>
            isMainPage ? (
              <a
                key={link.name}
                href={link.href}
                className="text-lg py-2 border-b border-gray-100 last:border-0"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={`/${link.href}`}
                className="text-lg py-2 border-b border-gray-100 last:border-0"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};
