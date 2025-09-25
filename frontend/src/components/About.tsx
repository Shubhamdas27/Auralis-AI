import { motion } from 'framer-motion';
import { Shield, Users, Zap, Award, Target, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Private & Exclusive",
      description: "We maintain a selective client base to ensure premium quality and personalized attention."
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Every bot is custom-built for your specific needs—no templates or one-size-fits-all solutions."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Built on n8n platform for maximum flexibility, scalability, and integration capabilities."
    },
    {
      icon: Award,
      title: "Premium Support",
      description: "Dedicated support and ongoing optimization to ensure your bots perform at their best."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      stat: "5-10h",
      label: "Save weekly",
      description: "Automate repetitive tasks"
    },
    {
      icon: Target,
      stat: "24/7",
      label: "Run conversions in your sleep",
      description: "Never miss a lead"
    },
    {
      icon: Zap,
      stat: "Auto",
      label: "Engage leads automatically",
      description: "Instant responses"
    },
    {
      icon: Award,
      stat: "Focus",
      label: "On your craft—not logistics",
      description: "What matters most"
    }
  ];

  return (
    <section id="about" className="py-12 lg:py-20 bg-gradient-to-b from-aurum-gray to-black">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px] overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            YOUR BRAND, <span className="text-aurum-red">BUT SMARTER</span>
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-aurum-red mx-auto"></div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-12 lg:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(240, 54, 54, 0.2)"
              }}
              className="text-center group bg-aurum-gray/30 rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-aurum-red to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:shadow-lg group-hover:shadow-aurum-red/50"
              >
                <benefit.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </motion.div>
              <div className="text-xl lg:text-3xl font-bold text-aurum-red mb-1 lg:mb-2 group-hover:scale-110 transition-transform">
                {benefit.stat}
              </div>
              <div className="text-xs lg:text-sm text-gray-300 mb-1 lg:mb-2 font-medium">
                {benefit.label}
              </div>
              <div className="text-xs text-gray-400">
                {benefit.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
              Custom n8n Chatbots for <span className="text-aurum-red">Every Platform</span>
            </h3>

            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed">
              In a world overwhelmed by generic chatbot templates and limited platform support,
              Auralis AI stands apart as a beacon of craftsmanship and precision. We specialize in
              building custom chatbots using enterprise-grade n8n automation platform, ensuring
              seamless integration across WhatsApp, Instagram, websites, Discord, Telegram and more.
            </p>

            <p className="text-sm lg:text-lg text-gray-300 leading-relaxed">
              Our approach goes beyond simple auto-replies. We create intelligent automation workflows
              that understand your business processes, integrate with your existing tools, and scale
              with your growth. Every chatbot is custom-built from scratch - no templates, no limitations.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-aurum-gray/30 rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
            >
              <h4 className="text-lg lg:text-xl font-bold text-aurum-red mb-3 lg:mb-4">Our Mission</h4>
              <p className="text-sm lg:text-base text-gray-300">
                To deliver enterprise-grade chatbot solutions using n8n automation platform that
                work as your silent team members, handling customer interactions 24/7 while
                you focus on growing your business.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(240, 54, 54, 0.2)"
                }}
                className="bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-aurum-red to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:shadow-lg group-hover:shadow-aurum-red/50"
                >
                  <value.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </motion.div>
                <h4 className="text-sm lg:text-lg font-bold text-white mb-2 group-hover:text-aurum-red transition-colors">
                  {value.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-aurum-gray/30 rounded-2xl p-6 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8">
            Ready to Experience the <span className="text-aurum-red">Auralis AI</span> Difference?
          </h3>

          <p className="text-base lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Join our exclusive community of businesses that have discovered the power of
            truly custom automation. Let's build something extraordinary together.
          </p>

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
              className="bg-aurum-red hover:bg-red-600 text-white px-8 py-3 lg:px-12 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all"
            >
              Start Your Journey
            </motion.button>
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
