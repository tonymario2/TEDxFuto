import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Users, Globe, Heart, Rocket, Shield, CheckCircle, FileCheck, Users2, Scale, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const missionItems = [
  {
    icon: Lightbulb,
    title: 'Ideas Worth Sharing',
    description: 'We celebrate insights that transform the way you think, spark action, and contribute to our community and beyond.'
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Bringing the best from FUTO and beyond— innovative students, visionary lecturers and dynamic alumni— for a breakthrough thinking.'
  },
  {
    icon: Rocket,
    title: 'Resilience & Growth',
    description: 'Showcasing stories of perseverance, adaptability and triumph against all odds. Our theme "Resilient Journeys" explores how individuals rise.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Creating a vibrant ecosystem where students can connect, learn, network, and collaborate in ways that will change the trajectory of their journeys.'
  },
  {
    icon: Globe,
    title: 'Global Connection',
    description: 'Connecting local innovation to global conversations. Linking FUTO to the world of TED\'s 100+ years of transforming individuals and societies.'
  },
  {
    icon: Heart,
    title: 'Inclusive Impact',
    description: 'Ensuring accessibility across ethnicities and gender. Making our events available to everyone to participate in shaping the thinking of tomorrow.'
  }
];

const valuesItems = [
  {
    icon: Award,
    title: 'Excellence Without Compromise',
    description: 'We pursue the highest standards in every aspect of our work. This means doing what we\'ve done and doing it perfectly. That\'s why TEDxFUTO remains reflected with quality and top-notch ideas that inspire and instill hope.'
  },
  {
    icon: Users2,
    title: 'Inclusive Community',
    description: 'We believe everyone has a story to tell and wisdom to share, irrespective of their background or social class. Our events are structured to welcome every voice in a fair and equal platform, with access to ideas and opportunities for impact.'
  },
  {
    icon: Rocket,
    title: 'Innovation & Courage',
    description: 'We celebrate the daring spirits who challenge the status quo, question assumptions and think with new ideas. The courage to take risks on the stage has enabled TEDxFUTO to foster the emergence of new breakthrough ideas.'
  },
  {
    icon: Handshake,
    title: 'Authentic Connection',
    description: 'We prioritize genuine, clear connections over superficial networking. Every interaction, from speakers to attendees, is designed to foster meaningful exchange. As depicted in our event/program, to encourage student building and lasting bonds.'
  }
];

const journeyItems = [
  {
    year: '2024',
    title: 'The Beginning',
    description: 'TEDxFUTO was officially licensed and launched, marking the start of our journey to bring world-class ideas to the FUTO community.',
    highlights: [
      'Secured official TED license for FUTO',
      'Pulled together a young energetic team of dedicated volunteers',
      'Launched a mega milestone to curating 2024 "Boundaries" as our first'
    ],
    isLeft: true
  },
  {
    year: '2025',
    title: 'First Event Success',
    description: 'Our inaugural event brought together 200+ attendees and 6 phenomenal speakers on "Breaking Boundaries" theme to an eager community.',
    highlights: [],
    isLeft: false
  },
  {
    year: '2026',
    title: 'Scaling Impact',
    description: 'Building on our success while expanding our reach through strategic partnerships and community programmes.',
    highlights: [],
    isLeft: true
  }
];

const licenseItems = [
  {
    icon: Shield,
    title: 'Official TEDx Event',
    description: 'TEDxFUTO is a fully independently organized TED event operating under a license from TED.'
  },
  {
    icon: CheckCircle,
    title: 'TED Standards Compliance',
    description: 'We are dedicated to preserving the world\'s most trusted platform for "Ideas worth Spreading", ensuring that every talk we host offers compelling, fresh perspectives that meet TED\'s rigorous standards of quality, integrity and authenticity.'
  },
  {
    icon: Users,
    title: 'Independent Organization',
    description: 'While we work under TED\'s overarching guidelines, TEDxFUTO is independently organized by a dedicated team of FUTO students, faculty and community members who bring in their content and resources to our mission.'
  },
  {
    icon: FileCheck,
    title: 'Content Integrity',
    description: 'All speaker content is personally vetted for accuracy, engagement with the TED values and ethics on issues of bias, misinformation, political advocacy and ideas that perpetuate hate, as per TED standards.'
  },
  {
    icon: Scale,
    title: 'Community Accountability',
    description: 'We operate transparently in stewardship of finances and decision-making, ensuring that TEDxFUTO remains a trustworthy, accessible and safe space to speak and listen to ideas emerging and established.'
  }
];

const About = () => {
  return (
    <Layout>
      {/* Our Mission Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-ted-red">Mission</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Bringing problem solvers and learners together, to gather innovative storytelling and academic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-ted-red/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-ted-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-ted-red">Story</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                TEDxFUTO was born from a simple yet powerful belief: that within the walls of the Federal University of Technology, Owerri, lies pockets of brilliance, innovation, and transformation that deserve to be heard on a global stage.
              </p>
              <p>
                What started as a yearning to create a platform for showcasing ideas has evolved into a movement that celebrates diversity, inspires resilience and offers access, guides minds into alternative ways to boldly position each and every one of us to see each other and a community of thinkers, creators, and dreamers.
              </p>
              <p>
                It's a journey already defined through events designed to reimagine norms, redefining the very fabric of our campus life, recognizing the community as an ecosystem of passionate people. We hold on strongly that every challenge has a solution worth sharing.
              </p>
              <p>
                Today, TEDxFUTO stands as a testament of determination—looking to inspire, create value, and make our community (FUTO and others) more accessible, vibrant, and inclusive as our local context.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-ted-red">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A timeline of key milestones in our TEDx adventure.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ted-red/30 transform md:-translate-x-1/2" />

            {journeyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: item.isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${item.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${item.isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="inline-flex items-center gap-2 bg-ted-red text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    {item.highlights.length > 0 && (
                      <ul className={`space-y-2 text-sm text-muted-foreground ${item.isLeft ? 'md:text-right' : ''}`}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className={`flex items-start gap-2 ${item.isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle className="w-4 h-4 text-ted-red flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-ted-red rounded-full transform -translate-x-1/2 mt-8 md:mt-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-ted-red">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our journey and shape our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {valuesItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-ted-red/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-ted-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEDx License & Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TEDx <span className="text-ted-red">License & Compliance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proudly operating under official TEDx license with full commitment to TED standards.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {licenseItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-ted-red/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-ted-red" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-6 glass-card rounded-2xl max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              <strong>Disclaimer:</strong> TEDxFUTO is not a part of TED events, even though TEDxFUTO is operated in line of TED's official protocols. The information provided here and the program does contain material that endorses or reflects TED's positions or that of other TEDx events organizers. By attending a TEDxFUTO event, you acknowledge your agreement to abide by TED's code of conduct and any other applicable policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Join the Journey Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-ted-red">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Be part of something transformative. Whether you're seeking inspiration, want to share your story, or wish to support our mission, there's a place for you in the TEDxFUTO community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="ted-gradient text-primary-foreground font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="https://www.pv.rsvp/tedxfuto-2026" target="_blank" rel="noopener noreferrer">
                  Get Tickets
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="/apply-to-speak">
                  Apply to Speak
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
