import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const step1Schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  nominationType: z.enum(['self', 'someone-else'], { required_error: 'Please select an option' }),
});

const step2Schema = z.object({
  aboutYourself: z.string().optional(),
  organization: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  experience: z.string().min(1, 'Relevant experience is required'),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const ApplyToSpeak = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      nominationType: undefined,
    },
  });

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      aboutYourself: '',
      organization: '',
      address: '',
      experience: '',
    },
  });

  const handleStep1Submit = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = async (data: Step2Data) => {
    if (!step1Data) return;

    setIsLoading(true);
    const fullFormData = { ...step1Data, ...data };

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '0cb1d674-99d8-4432-b8ef-b9e18d381b99');
      formDataToSend.append('from_name', 'TEDxFUTO Speaker Application');
      formDataToSend.append('fullName', fullFormData.fullName);
      formDataToSend.append('email', fullFormData.email);
      formDataToSend.append('phone', fullFormData.phone);
      formDataToSend.append('nominationType', fullFormData.nominationType);
      formDataToSend.append('aboutYourself', fullFormData.aboutYourself);
      formDataToSend.append('organization', fullFormData.organization);
      formDataToSend.append('address', fullFormData.address);
      formDataToSend.append('experience', fullFormData.experience);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form submitted:', fullFormData);
        toast({
          title: 'Success!',
          description: 'Your application has been submitted successfully.',
        });
        setIsSubmitted(true);
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit application. Please try again.',
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

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="glass-card rounded-2xl p-12">
                <div className="w-20 h-20 rounded-full ted-gradient flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Your application has been submitted successfully!
                </h1>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We appreciate your interest in TEDxFUTO. Our team will review your nomination, and you will be contacted if further information is needed. Stay tuned for updates.
                </p>
                <div className="text-left bg-background/50 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    In the meantime, you might find the following resources helpful:
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ted-red hover:underline"
                      >
                        TED Speaker Guidelines
                      </a>
                      <span className="text-muted-foreground text-sm"> – Learn about the expectations and best practices for TED speakers.</span>
                    </li>
                    <li>
                      <a
                        href="/highlights"
                        className="text-ted-red hover:underline"
                      >
                        TEDxFUTO Previous Events
                      </a>
                      <span className="text-muted-foreground text-sm"> – Explore our past events to get an idea of what to expect and the kind of talks that have been featured.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  if (!showForm) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Apply to <span className="text-ted-red">Speak</span>
              </h1>
              <p className="text-2xl text-muted-foreground mb-8">Do you have an idea worth sharing?</p>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                TEDxFUTO is looking for passionate individuals with unique perspectives and stories of resilience. If you believe your idea can inspire, challenge, or transform how people think, we want to hear from you.
              </p>
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-bold mb-4">Speaker Nomination Form</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out our form to submit your application. We review all nominations and will contact shortlisted candidates.
                </p>
                <Button
                  className="ted-gradient text-primary-foreground font-semibold px-8"
                  onClick={() => setShowForm(true)}
                >
                  Open Application Form
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Form Intro */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Speaker <span className="text-ted-red">Nomination</span>
              </h1>
              <div className="glass-card rounded-2xl p-8 text-left">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Do you have an idea worth sharing at our TEDxFUTO event or want to nominate/recommend a speaker? Kindly fill our speaker nomination form below which goes directly to our speaker selection team. You can recommend yourself or someone else. We will consider the nomination for our next TEDx event.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At TEDxFUTO we are looking for thought-leaders, innovators, artists, change-makers across all domains of human endeavor who want to share their vision and ideas; Our speakers are those who imagine the impossible and have the audacity to challenge the status quo.
                </p>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${currentStep === 1 ? 'text-ted-red' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === 1 ? 'ted-gradient text-white' : 'bg-muted'}`}>
                  1
                </div>
                <span className="text-sm font-medium hidden sm:inline">Basic Information</span>
              </div>
              <div className="w-12 h-px bg-muted" />
              <div className={`flex items-center gap-2 ${currentStep === 2 ? 'text-ted-red' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${currentStep === 2 ? 'ted-gradient text-white' : 'bg-muted'}`}>
                  2
                </div>
                <span className="text-sm font-medium hidden sm:inline">About the Speaker</span>
              </div>
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8"
              >
                <Form {...step1Form}>
                  <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6">
                    <FormField
                      control={step1Form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Adam Gelius" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step1Form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="example@yourmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step1Form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+234 254 521 5525" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step1Form.control}
                      name="nominationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you nominating yourself or someone else? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-2 mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="self" id="self" />
                                <Label htmlFor="self" className="cursor-pointer">Self</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="someone-else" id="someone-else" />
                                <Label htmlFor="someone-else" className="cursor-pointer">Someone Else</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end pt-4">
                      <Button type="submit" className="ted-gradient text-primary-foreground font-semibold px-8">
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8 text-white bg-black/40"
              >
                <h2 className="text-xl font-bold mb-6 text-white">About the Speaker</h2>
                <Form {...step2Form}>
                  <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-6">
                    <FormField
                      control={step2Form.control}
                      name="aboutYourself"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Tell us about yourself</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share your story, background, and what drives you..."
                              className="min-h-[120px] text-white bg-black/50 border-white/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step2Form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Organization (if applicable)</FormLabel>
                          <FormControl>
                            <Input placeholder="Organization" className="text-white bg-black/50 border-white/20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step2Form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="Address" className="text-white bg-black/50 border-white/20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={step2Form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Relevant Experience *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Experience"
                              className="min-h-[100px] text-white bg-black/50 border-white/20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={isLoading}
                        className="font-semibold px-8"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="ted-gradient text-primary-foreground font-semibold px-8"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyToSpeak;
