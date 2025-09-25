import { motion } from 'framer-motion';
import { MousePointer, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aurum-dark border-t border-gray-800">
      <div className="container mx-auto px-[30px] md:px-[80px]  py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-4 lg:mb-6"
            >
            <MousePointer className="w-6 h-6 lg:w-8 lg:h-8 text-aurum-red" />
              <span className="text-2xl lg:text-3xl font-bold text-white">Auralis AI</span>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-md text-sm lg:text-base">
              Premium bot automation services built with n8n. We create custom flows 
              that work as silent team members, growing your business 24/7.
            </p>

            <div className="space-y-3 lg:space-y-4">
              <h4 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4">OUR CONTACTS</h4>
              
              <motion.a
                href="mailto:work.shubhamdas@gmail.com"
                whileHover={{ 
                  scale: 1.05, 
                  color: "#F03636",
                  x: 5
                }}
                className="flex items-center text-gray-300 hover:text-aurum-red transition-all text-sm lg:text-base"
              >
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
                work.shubhamdas@gmail.com
              </motion.a>
              
              <div className="text-gray-300 text-sm lg:text-base">
                <span className="font-semibold text-white">Contact:</span> Shubham Das
              </div>
              
              <motion.a
                href="https://cal.com/shubham-das-2fzvdb/automation"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "#F03636",
                  boxShadow: "0 4px 15px rgba(240, 54, 54, 0.3)"
                }}
                className="inline-flex items-center bg-aurum-red/10 hover:bg-aurum-red text-aurum-red hover:text-white px-4 py-2 rounded-lg border border-aurum-red/20 hover:border-aurum-red transition-all text-sm lg:text-base font-semibold mt-2"
              >
                📞 Book a Call
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6">Quick Links</h4>
            <div className="space-y-2 lg:space-y-3">
              {['Services', 'Pricing', 'Process', 'About', 'FAQ'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ 
                    scale: 1.05, 
                    color: "#F03636",
                    x: 5
                  }}
                  className="block text-gray-300 hover:text-aurum-red transition-all text-sm lg:text-base"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}  
          <div>
            <h4 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6">Our Bots</h4>
            <div className="space-y-2 lg:space-y-3">
              {[
                'Lead Capture Bot',
                'Auto-Reply Bot', 
                'Hashtag Optimizer',
                'Follow-Up Bot',
                'DM Shop Bot'
              ].map((service) => (
                <div key={service} className="text-gray-300 text-xs lg:text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs lg:text-sm">
                © 2024 Auralis AI. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Created By Shubham Das
              </p>
            </div>
            <div className="flex space-x-4 lg:space-x-6 mt-3 md:mt-0">
              <motion.a 
                href="#" 
                whileHover={{ 
                  color: "#F03636",
                  scale: 1.05
                }}
                className="text-gray-400 hover:text-aurum-red text-xs lg:text-sm transition-all"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ 
                  color: "#F03636",
                  scale: 1.05
                }}
                className="text-gray-400 hover:text-aurum-red text-xs lg:text-sm transition-all"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;