import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is n8n and why do you use it for chatbot development?",
      answer: "n8n is an enterprise-grade workflow automation platform that allows us to create sophisticated, custom chatbots without the limitations of pre-built templates. It enables seamless integration with WhatsApp Business API, Instagram Graph API, Discord bots, Telegram bots, website chat widgets, and virtually any platform with an API. This means your chatbots can work across all your customer touchpoints with unified logic and data flow."
    },
    {
      question: "How long does it take to build and deploy a custom bot?",
      answer: "Most bots are completed within 5-7 business days after the discovery call. This includes custom design, testing, integration, and deployment. Enterprise solutions with multiple bots may take 2-3 weeks depending on complexity and integration requirements."
    },
    {
      question: "Do you provide ongoing support and optimization?",
      answer: "Absolutely! We provide comprehensive support packages ranging from 7 days for Starter Flow to 90 days white-glove support for Enterprise clients. This includes monitoring, optimization, troubleshooting, and regular performance reviews to ensure your bots continue performing at peak efficiency."
    },
    {
      question: "Can your bots integrate with my existing tools and platforms?",
      answer: "Yes! Our n8n-based bots can integrate with virtually any platform that has an API, including CRM systems, email marketing tools, e-commerce platforms, booking systems, and more. We ensure seamless integration with your existing tech stack."
    },
    {
      question: "What makes Auralis AI different from other bot services?",
      answer: "We're intentionally private and selective with clients, ensuring personalized attention and custom-built solutions rather than resold templates. Every bot is tailored specifically for your business, built using enterprise-grade n8n platform, and comes with ongoing optimization and support."
    },
    {
      question: "Is there a limit to how many messages the bots can handle?",
      answer: "Our bots are designed to handle high-volume messaging without limitations. They operate 24/7 and can process hundreds or thousands of interactions simultaneously, ensuring no lead or customer inquiry goes unanswered, even during peak traffic periods."
    },
    {
      question: "What kind of analytics and reporting do you provide?",
      answer: "We provide comprehensive analytics including response rates, conversion metrics, lead capture data, engagement patterns, and ROI tracking. Enterprise clients receive custom dashboards with real-time monitoring and detailed performance insights."
    },
    {
      question: "Can I make changes to the bot after it's deployed?",
      answer: "Yes! We include optimization sessions in our packages, and you can request modifications. Minor tweaks are often included in your support package, while major feature additions may require additional development time, which we'll discuss transparently."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-20 bg-aurum-dark">
      <div className="container mx-auto px-[30px] md:px-[40px] lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
            Frequently Asked <span className="text-aurum-red">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Everything you need to know about our bot automation services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-3 lg:mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 30px rgba(240, 54, 54, 0.2)"
                }}
                className="w-full bg-aurum-gray/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-gray-800 hover:border-aurum-red/50 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base lg:text-lg font-semibold text-white pr-4 lg:pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 lg:w-6 lg:h-6 text-aurum-red" />
                      ) : (
                        <Plus className="w-5 h-5 lg:w-6 lg:h-6 text-aurum-red" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-aurum-gray/30 rounded-b-xl p-4 lg:p-6 border-l border-r border-b border-gray-800 -mt-1">
                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 lg:mt-12"
        >
          <p className="text-gray-300 mb-4 lg:mb-6">Still have questions?</p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(240, 54, 54, 0.5)",
              backgroundColor: "#d32f2f"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-aurum-red hover:bg-red-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold transition-all"
          >
            <a href="https://cal.com/shubham-das-2fzvdb/automation" target="_blank" rel="noopener noreferrer">Schedule a Discovery Call</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;