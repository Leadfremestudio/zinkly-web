import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import usePageMetadata from '../hooks/usePageMetadata';

function Home({ setCursorText, setIsCursorActive, setIsCursorDark }) {
  usePageMetadata('Think • Build • Connect', 'Design your dreams and scale your software systems. Zinkly is a high-performance premium IT engineering and digital transformation consulting agency.');

  return (
    <main className="home-page-container">
      {/* 1. Main Banner Autoplay Carousel & Stats */}
      <Hero />

      {/* 2. Overlapping Collage About Teaser */}
      <About />

      {/* 3. Reusable 6-Card Services Grid */}
      <Services 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
        setIsCursorDark={setIsCursorDark} 
      />

      {/* 4. Flagship Bento Case Studies and Browser Previews */}
      <CaseStudies 
        setCursorText={setCursorText} 
        setIsCursorActive={setIsCursorActive} 
      />
    </main>
  );
}

export default Home;
