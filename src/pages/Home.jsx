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

function Home({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  usePageMetadata('Think • Build • Connect', 'Design your dreams and scale your software systems. Zinkly is a high-performance premium IT engineering and digital transformation consulting agency.');
  useScrollReveal();

  return (
    <main className="home-page-container">
      {/* 1. Main Banner Autoplay Carousel & Stats */}
      <Hero />

      {/* Combined About & Services Section with unified floating blobs */}
      <section className="about-services-combined-section">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>

        {/* 2. Overlapping Collage About Teaser */}
        <About 
          setCursorText={setCursorText} 
          setIsCursorActive={setIsCursorActive} 
          setIsCursorDark={setIsCursorDark} 
        />

        {/* 3. Reusable 6-Card Services Grid */}
        <Services 
          setCursorText={setCursorText} 
          setIsCursorActive={setIsCursorActive} 
          setIsCursorDark={setIsCursorDark} 
        />
      </section>

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
    </main>
  );
}

export default Home;
