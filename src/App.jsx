import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PizzaMood from './pages/case-studies/PizzaMood';
import GaneshBhel from './pages/case-studies/GaneshBhel';
import MahaBarachiMisal from './pages/case-studies/MahaBarachiMisal';
import AtmosSalon from './pages/case-studies/AtmosSalon';
import CaarvanRestaurant from './pages/case-studies/CaarvanRestaurant';
import GaramIcecream from './pages/case-studies/GaramIcecream';
import Vadaghar from './pages/case-studies/Vadaghar';
import DigitalMarketingSmallBusiness from './pages/blog/DigitalMarketingSmallBusiness';
import SEOBusinessGrowthPune from './pages/blog/SEOBusinessGrowthPune';
import ChooseDigitalMarketingAgency from './pages/blog/ChooseDigitalMarketingAgency';
import SEOFriendlyWebsite from './pages/blog/SEOFriendlyWebsite';
import PerformanceMarketing from './pages/blog/PerformanceMarketing';
import AISEO from './pages/blog/AISEO';
import GEOvsSEO from './pages/blog/GEOvsSEO';
import ChatGPTGeminiAISearch from './pages/blog/ChatGPTGeminiAISearch';
import AISearchOptimization from './pages/blog/AISearchOptimization';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/pizza-mood" element={<PizzaMood />} />
        <Route path="/case-studies/ganesh-bhel" element={<GaneshBhel />} />
        <Route path="/case-studies/maha-barachi-misal" element={<MahaBarachiMisal />} />
        <Route path="/case-studies/atmos-salon" element={<AtmosSalon />} />
        <Route path="/case-studies/caarvan-restaurant" element={<CaarvanRestaurant />} />
        <Route path="/case-studies/garam-icecream" element={<GaramIcecream />} />
        <Route path="/case-studies/vadaghar" element={<Vadaghar />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/digital-marketing-small-business" element={<DigitalMarketingSmallBusiness />} />
        <Route path="/blog/seo-business-growth-pune" element={<SEOBusinessGrowthPune />} />
        <Route path="/blog/choose-digital-marketing-agency" element={<ChooseDigitalMarketingAgency />} />
        <Route path="/blog/seo-friendly-website" element={<SEOFriendlyWebsite />} />
        <Route path="/blog/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/blog/ai-seo" element={<AISEO />} />
        <Route path="/blog/geo-vs-seo" element={<GEOvsSEO />} />
        <Route path="/blog/chatgpt-gemini-ai-search" element={<ChatGPTGeminiAISearch />} />
        <Route path="/blog/ai-search-optimization" element={<AISearchOptimization />} />
        <Route path="/contact" element={<Contact />} />
        {/* More routes will be added as we build them */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
