import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section - Full width image */}
      <section className="w-full">
        <img 
          src="/images/Top section of the patner page.png.avif" 
          alt="TEDxFUTO Partners" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Partners and Sponsors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-ted-red text-sm font-medium tracking-wide">
              Partners and Sponsors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Our Main Partners and Sponsors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
              The organising team is delighted to be working with the following local businesses and 
              organisations on the delivery of TEDxFUTO
            </p>
          </motion.div>

          {/* Partner Logos Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-8"
          >
            {/* Placeholder partner logos - row 1 */}
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 1</span>
            </div>
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 2</span>
            </div>
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 3</span>
            </div>
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 4</span>
            </div>
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 5</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            {/* Placeholder partner logo - row 2 */}
            <div className="w-32 h-16 bg-white rounded flex items-center justify-center">
              <span className="text-gray-600 text-xs">Partner 6</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call For Sponsorship Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Call For Sponsorship
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                By sponsoring TEDxFUTO, your brand is having the opportunity to be associated with the most 
                unique event in Imo-state. It also gives your brand the leverage of breaking into the untapped 
                market of Imo-State. Other benefits also include having your logo on the videos to be uploaded 
                on the official TEDx YouTube Channel giving your brand exposure to over 30 million individuals in all 
                countries of the world.
              </p>
              
              <p>
                The huge Networking opportunity at the event would also be an explosive opportunity for your 
                brand. The audience would comprise of the young millennials, rural farmers, captains of industries, 
                government officials from state to federal, politicians, military and para-military, etc.
              </p>
              
              <p>
                Aside from the individual brand exposure and benefits, you are helping bridge the gap in society, 
                helping shape a better community and humanity.
              </p>
              
              <p>
                The more your brand name is associated with positive experience the stronger your brand 
                awareness will be.
              </p>
              
              <p className="text-white font-medium">
                Would you like to support the event through partnership or 
                sponsorship, email the Organising Team info@tedxfuto@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
