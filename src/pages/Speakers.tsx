import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const speakersByYear = {
  '2026': [
    { name: 'Toria Dickson', role: 'Speaker Role', bio: 'Speaker bio placeholder. Details to be confirmed.', image: '/images/Toria Dickson Speaker 2 (1).avif' },
    { name: 'Julie Adaugo', role: 'Speaker Role', bio: 'Speaker bio placeholder. Details to be confirmed.', image: '/images/Julie Adaugo Speaker 1.avif' },
    { name: 'Coming Soon', role: 'Speaker Role', bio: 'Speaker bio placeholder. Details to be confirmed.', image: '/images/mysterious-speaker-silhouette-with-question-mark-d.jpg' },
    { name: 'Coming Soon', role: 'Speaker Role', bio: 'Speaker bio placeholder. Details to be confirmed.', image: '/images/mysterious-speaker-silhouette-with-question-mark-d.jpg' },
  ],
  '2025': [
    { name: 'Chinedu Okafor', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 1.jpg' },
    { name: 'Emeka Nwosu', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 2.jpg' },
    { name: 'Amina Bello', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 6.jpg' },
    { name: 'Sola Adeyemi', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 4.jpg' },
  ],
  '2024': [
    { name: 'David Okoro', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 5.jpg' },
    { name: 'Ifunanya Nwoye', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 7.jpg' },
    { name: 'Bolaji Ibrahim', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 3.jpg' },
    { name: 'Blessing Adekunle', role: 'Speaker', bio: 'Previous edition speaker.', image: '/images/Templated speaker 8.jpg' },
  ],
};

const Speakers = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto container-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our <span className="text-ted-red">Speakers</span></h1>
            <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">Archive of all TEDxFUTO speakers across editions.</p>

            {Object.entries(speakersByYear).sort((a, b) => Number(b[0]) - Number(a[0])).map(([year, speakers]) => (
              <div key={year} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-ted-red">{year}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {speakers.map((speaker, i) => (
                    <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                      <div className="w-full aspect-[3/4] overflow-hidden relative">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name} 
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        <h3 className="font-bold text-base md:text-lg mb-1">{speaker.name}</h3>
                        <p className="text-ted-red text-xs md:text-sm mb-2">{speaker.role}</p>
                        <p className="text-muted-foreground text-xs md:text-sm flex-1">{speaker.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
