import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Owner",
      company: "Fashion Forward",
      content: "Auralis AI's WhatsApp chatbot transformed our customer service. 80% of inquiries are now handled automatically, and sales increased by 150%!",
      rating: 5,
      avatar: "🦋"
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Director",
      company: "Tech Innovators",
      content: "Their custom n8n workflow automation saved us 40 hours per week. The multi-platform integration is seamless and incredibly powerful.",
      rating: 5,
      avatar: "🐉"
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      company: "Taste Paradise",
      content: "The website chatbot handles reservations, menu questions, and takeaway orders 24/7. Our staff can now focus on actual food service!",
      rating: 5,
      avatar: "🦄"
    },
    {
      name: "David Park",
      role: "Coaching Business",
      company: "Life Transformation Hub",
      content: "The Instagram and Facebook bots handle lead qualification perfectly. We went from 10 to 100 qualified leads per month effortlessly.",
      rating: 5,
      avatar: "🐺"
    },
    {
      name: "Lisa Thompson",
      role: "SaaS Company CEO",
      company: "BusinessFlow Pro",
      content: "Auralis AI built us a complete customer support chatbot ecosystem. Discord, Telegram, Website - everything is automated and works flawlessly.",
      rating: 5,
      avatar: "🦊"
    },
    {
      name: "Alex Kumar",
      role: "Tech Consultant",
      company: "CloudTech Solutions",
      content: "Working with Auralis AI was seamless. They understood our complex n8n requirements and delivered enterprise-grade automation solutions.",
      rating: 5,
      avatar: "🐅"
    }
  ];

  return (
    <section id="testimonials" className="py-12 lg:py-20 bg-gradient-to-b from-black to-aurum-gray overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            CLIENT <span className="text-aurum-red">SUCCESS</span> STORIES
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            See what our clients say about their automation journey
          </p>
        </motion.div>

        {/* Infinite Scroll Testimonials */}
        <div className="relative">
          <div className="flex space-x-6 lg:space-x-8 animate-marquee">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(240, 54, 54, 0.3)"
                }}
                className="flex-shrink-0 w-80 lg:w-96 bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4 lg:mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-aurum-red to-red-600 rounded-full flex items-center justify-center text-xl lg:text-2xl mr-3 lg:mr-4"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs lg:text-sm">{testimonial.role}</p>
                    <p className="text-aurum-red text-xs lg:text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-aurum-red mb-3 lg:mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute top-0 flex space-x-6 lg:space-x-8 animate-marquee2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index + testimonials.length}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(240, 54, 54, 0.3)"
                }}
                className="flex-shrink-0 w-80 lg:w-96 bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4 lg:mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-aurum-red to-red-600 rounded-full flex items-center justify-center text-xl lg:text-2xl mr-3 lg:mr-4"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold text-sm lg:text-base">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs lg:text-sm">{testimonial.role}</p>
                    <p className="text-aurum-red text-xs lg:text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-aurum-red mb-3 lg:mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;