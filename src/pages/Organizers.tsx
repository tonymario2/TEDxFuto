import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const organizers = [
  { name: 'Atim Success Silver', role: 'Convener', image: '/images/Atim Success Silver - Convener .avif' },
  { name: 'Ezegamba William', role: 'Co-convener', image: '/images/Ezegamba William Co-convener.avif' },
  { name: 'Damian Okpala', role: 'Front Desk Team', image: '/images/Damian Okpala - Front Desk Team.avif' },
  { name: 'Daniel Victory O', role: 'Front Desk Team', image: '/images/Daniel Victory O_ Front Desk team.avif' },
  { name: 'Ozioma Delight (dir.blakk)', role: 'Media Team Head', image: '/images/Ozioma delight(dir.avif' },
  { name: 'Precious Ngozi', role: 'Content Manager', image: '/images/Precious Ngozi_ Content Manager .avif' },
  { name: 'Ezeihekaibee Chiemerie Udochi', role: 'Content Lead', image: '/images/Ezeihekaibee Chiemerie Udochi_ Content Lead .avif' },
  { name: 'Isiguzo Priscilla', role: 'Sponsorship Lead', image: '/images/Isiguzo Priscilla_ Sponsorship Lead.jpg' },
  { name: 'Ajanwachuku Adaeze', role: 'Branding & Hospitality Team Lead', image: '/images/Ajanwachuku Adaeze - Branding & Hospitality Team Lead.jpg' },
  { name: 'Ubah Joy', role: 'Branding & Hospitality Asst Lead', image: '/images/Ubah Joy_ Branding & Hospitality Asst Lead.avif' },
  { name: 'Donatus Oluchi', role: 'Speaker Curator Team Lead', image: '/images/Donatus Oluchi__ Speaker Curator Team Lead.avif' },
  { name: 'Nmesoma Nnopu', role: 'Asst Curation Lead', image: 'https://ihpenhylfmcl3mb0.public.blob.vercel-storage.com/TEDx%20Futo%20Repo%202/Nmesoma%20Nnopu-%20Asst%20Curation%20Lead.jpg' },
  { name: 'Akinnubi Peter', role: 'Sponsorship Lead', image: '/images/Akinnubi Peter_ Sponsorship Lead .jpg' },
  { name: 'Asibezim Precious Onyinyechi', role: 'Programs Team Lead', image: '/images/Asibezim Precious Onyinyechi -Programs team lead .jpg' },
  { name: 'Lugard Vianney', role: 'Volunteers Team Lead', image: '/images/Lugard Vianney_ Volunteers Team Lead  (1).avif' },
  { name: 'Odey Simon', role: 'Publicity Lead', image: '/images/Odey Simon_ Publicity Lead.avif' },
  { name: 'Thomas Ogbonna', role: 'Logistics Team Lead', image: '/images/Thomas Ogbonna_ Logistics Team Lead.avif' },
  { name: 'Udeagu Rejoice', role: 'Welfare Team Lead', image: '/images/Udeagu Rejoice Welfare team lead.avif' },
];

const Organizers = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20" poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-at-a-concert-2734-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 container mx-auto container-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">The <span className="text-ted-red">Organizers</span></h1>
            <p className="text-2xl text-center text-muted-foreground mb-16">Meet the innovators, the dreamers, the doers, volunteers who transform this vision into reality.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {organizers.map((org, i) => {
                // Custom object position for specific organizers to ensure faces are visible
                const getObjectPosition = (name: string) => {
                  if (name === 'Akinnubi Peter') {
                    return 'object-[center_top] md:object-[center_10%]';
                  }
                  if (name === 'Isiguzo Priscilla') {
                    return 'object-[center_top] md:object-[center_15%]';
                  }
                  if (name === 'Ozioma Delight (dir.blakk)') {
                    return 'object-[center_top] md:object-[center_15%]';
                  }
                  if (name === 'Lugard Vianney') {
                    return 'object-[center_top] md:object-[center_25%]';
                  }
                  return 'object-top';
                };

                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card rounded-2xl overflow-hidden text-center flex flex-col">
                    <div className="w-full aspect-[3/4] overflow-hidden relative">
                      <img 
                        src={org.image} 
                        alt={org.name} 
                        className={`w-full h-full object-cover ${getObjectPosition(org.name)}`}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-base md:text-lg mb-1">{org.name}</h3>
                      <p className="text-ted-red text-xs md:text-sm">{org.role}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Organizers;
