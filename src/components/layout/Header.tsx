import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      children: [
        { label: 'About TEDxFUTO', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      label: 'Speakers',
      children: [
        { label: 'Our Speakers', href: '/speakers' },
        { label: 'Apply to Speak', href: '/apply-to-speak' },
      ],
    },
    { label: 'Partners', href: '/partners' },
    { label: 'Organizers', href: '/organizers' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-2xl font-bold">
              <span className="text-ted-red">TEDx</span>
              <span className="text-foreground font-medium">FUTO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      'flex items-center px-4 py-2 text-sm font-medium transition-colors',
                      'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-colors',
                      location.pathname === item.href
                        ? 'text-ted-red'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 py-2 min-w-[200px] bg-card border border-border rounded-lg shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={cn(
                            'block px-4 py-2 text-sm transition-colors',
                            location.pathname === child.href
                              ? 'text-ted-red bg-muted'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="ted-gradient text-primary-foreground font-semibold px-6">
              <a href="https://www.pv.rsvp/tedxfuto-2026" target="_blank" rel="noopener noreferrer">
                Get Tickets
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted-foreground"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        className={cn(
                          'block px-4 py-3 text-sm font-medium',
                          location.pathname === item.href
                            ? 'text-ted-red'
                            : 'text-muted-foreground hover:text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Button asChild className="w-full ted-gradient text-primary-foreground font-semibold">
                    <a href="https://www.pv.rsvp/tedxfuto-2026" target="_blank" rel="noopener noreferrer">
                      Get Tickets
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
