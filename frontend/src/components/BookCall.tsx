import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BookCall = () => {
  return (
    <section id="book-call" className="py-16 lg:py-24 bg-aurum-dark">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation? Let's discuss your specific 
            needs and create a custom solution.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-gray-500 rounded-sm flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Free Consultation</h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Get expert advice tailored to your business needs with no commitment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-gray-500 rounded-sm flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Direct Communication</h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Speak directly with our AI automation experts about your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 border-2 border-gray-500 rounded-sm flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Quick Response</h3>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                    Book instantly and get confirmation within minutes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Cal.com booking */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-900/70 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Schedule Your Free Call</h3>
                <p className="text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                  Choose a time that works for you and let's discuss how we can automate your business processes.
                </p>
                
                <motion.a
                  href="https://cal.com/shubham-das-2fzvdb/automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 30px rgba(240, 54, 54, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block w-full bg-aurum-red hover:bg-red-600 text-white font-semibold py-4 lg:py-5 px-6 lg:px-8 rounded-xl text-base lg:text-lg transition-all duration-300 shadow-lg"
                >
                  Book Your Free Call Now
                </motion.a>

                <p className="text-sm lg:text-base text-gray-400 mt-4 lg:mt-6">
                  No commitment required • 30-minute discovery call
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;