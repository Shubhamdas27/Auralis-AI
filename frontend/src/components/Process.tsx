import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Settings, Rocket, HeadphonesIcon } from 'lucide-react';

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create the transforms outside the map function
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yOffsetReverse = useTransform(yOffset, (value) => -value);

  const steps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "We understand your brand",
      details: "Deep dive into your business needs, current challenges, and automation goals"
    },
    {
      icon: Settings,
      title: "Custom Bot Design",
      description: "We build what fits you",
      details: "Tailored n8n workflows designed specifically for your brand and requirements"
    },
    {
      icon: Rocket,
      title: "Setup + Launch",
      description: "Delivered ready-to-use",
      details: "Complete integration, testing, and deployment with full documentation"
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "We monitor and optimize",
      details: "Continuous monitoring, performance optimization, and feature enhancements"
    }
  ];

  return (
    <section ref={containerRef} className="py-12 lg:py-20 bg-aurum-dark relative overflow-hidden">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            OUR <span className="text-aurum-red">PROCESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Simple, Tailored, and Hands-Free
          </p>
        </motion.div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-aurum-red via-gray-600 to-aurum-red transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  style={{ y: index % 2 === 0 ? yOffset : yOffsetReverse }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(240, 54, 54, 0.3)"
                  }}
                  className="text-center group"
                >
                  <div className="bg-aurum-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300 mb-6">
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-aurum-red to-red-600 flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-aurum-red/50"
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-aurum-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-aurum-red transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(240, 54, 54, 0.2)"
              }}
              className="bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-aurum-red to-red-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-aurum-red/50"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-aurum-red rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-aurum-red transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-2 text-sm">
                    {step.description}
                  </p>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <a
            href="https://cal.com/shirin-kulkarni-sg0r33/demo-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(240, 54, 54, 0.5)",
                backgroundColor: "#d32f2f"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-aurum-red hover:bg-red-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all"
            >
              Start Your Automation Journey
            </motion.button>
          </a>


        </motion.div>
      </div>
    </section>
  );
};

export default Process;