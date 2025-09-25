import { motion } from 'framer-motion';
import { Check, Star, Crown } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 lg:py-20 bg-gradient-to-b from-aurum-gray to-aurum-dark">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            SIMPLE <span className="text-aurum-red">PRICING</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs. All plans include custom development and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-aurum-gray/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
          >
            <div className="text-center mb-6 lg:mb-8">
              <div className="flex justify-center mb-3 lg:mb-4">
                <Star className="w-8 h-8 lg:w-12 lg:h-12 text-aurum-gold" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">Starter Chatbot</h3>
              <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Perfect for single platform automation</p>
              
              <div className="mb-4 lg:mb-6">
                <span className="text-2xl lg:text-4xl font-bold text-white">₹20,000</span>
                <span className="text-gray-400 ml-2 text-sm lg:text-base">per chatbot</span>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">1 Custom n8n Chatbot (WhatsApp/Instagram/Website)</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Platform-Specific Setup & Integration</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">7 Days Support & Troubleshooting</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Basic Analytics Dashboard</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Email Support</span>
              </div>
            </div>

            <a
              href="https://cal.com/shubham-das-2fzvdb/automation"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 lg:py-4 rounded-lg font-semibold transition-all text-sm lg:text-base text-center bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-aurum-red"
            >
              Get Started
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-aurum-gray/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-aurum-red shadow-lg shadow-aurum-red/20 scale-105 transition-all duration-300"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-aurum-red text-white text-xs lg:text-sm font-bold px-3 py-1 lg:px-4 lg:py-1.5 rounded-full">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-6 lg:mb-8">
              <div className="flex justify-center mb-3 lg:mb-4">
                <Crown className="w-8 h-8 lg:w-12 lg:h-12 text-aurum-red" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">Multi-Platform Suite</h3>
              <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Most popular for comprehensive automation</p>
              
              <div className="mb-4 lg:mb-6">
                <span className="text-2xl lg:text-4xl font-bold text-white">₹50,000</span>
                <span className="text-gray-400 ml-2 text-sm lg:text-base">complete package</span>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">3 Platform Chatbots (WhatsApp + Instagram + Website)</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Advanced n8n Workflow Integration</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">30 Days Premium Support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Cross-Platform Analytics & Reporting</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Priority Phone Support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">1 Free Optimization Session</span>
              </div>
            </div>

            <a
              href="https://cal.com/shubham-das-2fzvdb/automation"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 lg:py-4 rounded-lg font-semibold transition-all text-sm lg:text-base text-center bg-aurum-red hover:bg-red-600 text-white shadow-lg"
            >
              Get Started
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-aurum-gray/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
          >
            <div className="text-center mb-6 lg:mb-8">
              <div className="flex justify-center mb-3 lg:mb-4">
                <Crown className="w-8 h-8 lg:w-12 lg:h-12 text-aurum-gold" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">Enterprise Automation</h3>
              <p className="text-gray-400 mb-3 lg:mb-4 text-sm lg:text-base">Complete business automation ecosystem</p>
              
              <div className="mb-4 lg:mb-6">
                <span className="text-2xl lg:text-4xl font-bold text-white">Custom</span>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Unlimited Platform Chatbots</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Complex n8n Workflow Automation</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">90 Days White-Glove Support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Custom Analytics Dashboard</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">24/7 Dedicated Support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Monthly Strategy Sessions</span>
              </div>
              <div className="flex items-start">
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-aurum-red mr-2 lg:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">API Integrations & Custom Development</span>
              </div>
            </div>

            <a
              href="https://cal.com/shubham-das-2fzvdb/automation"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 lg:py-4 rounded-lg font-semibold transition-all text-sm lg:text-base text-center bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-aurum-red"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;