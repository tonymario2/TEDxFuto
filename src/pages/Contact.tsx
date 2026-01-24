import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '0cb1d674-99d8-4432-b8ef-b9e18d381b99');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'TEDxFUTO Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        toast({
          title: 'Success!',
          description: 'Your message has been sent successfully.',
        });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto container-padding">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
              Get in <span className="text-ted-red">Touch</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <a href="mailto:tedxfuto@gmail.com" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-ted-red/50 transition-colors">
                    <Mail className="h-6 w-6 text-ted-red" />
                    <span>tedxfuto@gmail.com</span>
                  </a>
                  <a href="tel:08120563516" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-ted-red/50 transition-colors">
                    <Phone className="h-6 w-6 text-ted-red" />
                    <span>08120563516</span>
                  </a>
                  <a href="https://instagram.com/tedxfuto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-ted-red/50 transition-colors">
                    <Instagram className="h-6 w-6 text-ted-red" />
                    <span>@tedxfuto</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold">Send a Message</h2>
                <Input 
                  placeholder="Your Name" 
                  className="bg-muted border-border"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-muted border-border"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  className="bg-muted border-border"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full ted-gradient text-primary-foreground font-semibold"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    'Message Sent! ✓'
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
