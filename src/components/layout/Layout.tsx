import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full max-w-full flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
