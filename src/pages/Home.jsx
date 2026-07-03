import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Technologies from '../components/Technologies';
import Testimonials from '../components/ui/demo';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import usePageMetadata from '../hooks/usePageMetadata';
import useScrollReveal from '../hooks/useScrollReveal';
import { motion } from 'motion/react';

function Home({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  usePageMetadata('Built Around Your Business', 'Design your dreams and scale your software systems. Zinkly is a high-performance premium IT engineering and digital transformation consulting agency.');
  useScrollReveal();

  return (
    <motion.main 
      className="home-page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Main Banner Autoplay Carousel & Stats */}
      <Hero />

      {/* 2. Overlapping Collage About Teaser */}
      <About 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
        setIsCursorDark={setIsCursorDark} 
      />

      {/* 3. Reusable 6-Card Services Grid */}
      <Services />

      {/* 4. Flagship Bento Case Studies and Browser Previews */}
      <CaseStudies 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
      />

      {/* 5. Technologies Stack Pills Grid */}
      <Technologies />

      {/* 6. Malayalam Enterprise Testimonials Carousel */}
      <Testimonials />

      {/* 7. FAQ Accordion Grid Section */}
      <FAQSection />

      {/* 8. Call To Action Section */}
      <CTASection />
    </motion.main>
  );
}

export default Home;
