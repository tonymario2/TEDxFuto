import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Partners', href: '/partners' },
    { label: 'Organizers', href: '/organizers' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/tedxfuto', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-ted-red">TEDx</span>
                <span className="text-foreground font-medium">FUTO</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ideas worth spreading. An independently organized TEDx event at the Federal University of Technology, Owerri.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-ted-red transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-ted-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tedxfuto@gmail.com"
                  className="flex items-center text-sm text-muted-foreground hover:text-ted-red transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  tedxfuto@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:08120563516"
                  className="flex items-center text-sm text-muted-foreground hover:text-ted-red transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  08120563516
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-ted-red transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  This independent TEDx event is operated under license from TED.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TEDxFUTO. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              TED is a registered trademark. Used under license from TED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
