import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBar from './components/MarqueeBar';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-onyx antialiased">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Bar */}
        <MarqueeBar />

        {/* About Section */}
        <AboutSection />

        {/* Menu Section */}
        <MenuSection />

        {/* Location & Contact */}
        <LocationSection />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
