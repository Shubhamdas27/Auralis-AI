import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MousePointer } from 'lucide-react';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    // { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-aurum-dark/95 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="container mx-auto px-[30px] md:px-[80px] py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <MousePointer className="w-6 h-6 lg:w-8 lg:h-8 text-aurum-red" />
            <span className="text-xl lg:text-2xl font-bold text-white">Auralis AI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{
                  scale: 1.1,
                  color: "#F03636"
                }}
                className="text-gray-300 hover:text-aurum-red transition-colors text-sm lg:text-base"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <a
            href="https://cal.com/shubham-das-2fzvdb/automation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(240, 54, 54, 0.5)",
                backgroundColor: "#d32f2f"
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-aurum-red hover:bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold transition-all text-sm lg:text-base"
            >
              Book a Call
            </motion.button>
          </a>
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    scale: 1.05,
                    color: "#F03636"
                  }}
                  className="text-gray-300 hover:text-aurum-red transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}

            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;