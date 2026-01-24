import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is TEDx?',
    answer:
      'TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection.',
  },
  {
    question: 'What is TEDxFUTO?',
    answer:
      'TEDxFUTO is an independently organized TEDx event at the Federal University of Technology, Owerri. It brings together innovative thinkers, creators, and storytellers to share ideas worth spreading with the FUTO community and beyond.',
  },
  {
    question: 'Who can attend?',
    answer:
      'TEDxFUTO is open to everyone—students, staff, alumni of FUTO, as well as professionals, entrepreneurs, and curious minds from outside the university who want to experience inspiring talks and connect with a vibrant community.',
  },
  {
    question: 'How do I get tickets?',
    answer:
      'Tickets can be purchased through our official website or at designated physical locations. Both online and physical ticket options are available. Click the "Get Tickets" button for more information.',
  },
  {
    question: 'Is this a TED event?',
    answer:
      'TEDxFUTO is an independently organized event operating under license from TED. The "x" in TEDx signifies that it\'s an independently organized event, following TED\'s format and guidelines while featuring local speakers and ideas.',
  },
  {
    question: 'How can I speak at TEDxFUTO?',
    answer:
      'If you have an idea worth spreading, you can apply to be a speaker through our "Apply to Speak" page. We look for diverse perspectives and stories that align with our theme and can inspire our audience.',
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-ted-red">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about TEDxFUTO 2026.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-ted-red hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
