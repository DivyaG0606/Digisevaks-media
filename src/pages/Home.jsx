import Hero from '../components/home/sections/Hero';
import About from '../components/home/sections/About';
import OurBranches from '../components/home/sections/OurBranches';
import Services from '../components/home/sections/Services';
import WhyDigisevaks from '../components/home/sections/WhyDigisevaks';
import OurProcess from '../components/home/sections/OurProcess';
import OurClients from '../components/home/sections/OurClients';
import ClientReviews from '../components/home/sections/ClientReviews';
import LeadGeneration from '../components/home/sections/LeadGeneration';
import FAQ from '../components/home/sections/FAQ';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div>
      <SEO 
        title="Digital Marketing Agency in Pune | DigiSevaks"
        description="DigiSevaks helps Pune businesses grow with result-driven SEO, Google Ads, social media marketing & web development. Get a free marketing audit today."
        keywords="digital marketing company pune, website development company in pune, digisevaks marketing agency karve nagar, karve nagar digital marketing, best digital marketing agency in pune, top SEO company in pune, digital marketing agency near me, Google My Business optimization Pune, local SEO agency Pune, Google Ads agency Pune, Meta Ads management Pune, lead generation agency Pune, social media marketing Pune, web design agency Karve Nagar Pune, SEO agency Kothrud, digital marketing agency Baner, digital marketing agency PCMC, local business marketing Pune"
        canonical="https://digisevaks.com/"
        ogTitle="Digital Marketing Agency in Pune | DigiSevaks"
        ogDescription="DigiSevaks helps Pune businesses grow with result-driven SEO, Google Ads, social media marketing & web development. Get a free marketing audit today."
        twitterTitle="Digital Marketing Agency in Pune | DigiSevaks"
        twitterDescription="DigiSevaks helps Pune businesses grow with result-driven SEO, Google Ads, social media marketing & web development. Get a free marketing audit today."
      />
      <Hero />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <About />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <OurBranches />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <Services />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <WhyDigisevaks />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <OurProcess />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <OurClients />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <ClientReviews />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <LeadGeneration />
      <hr className="border-t border-gray-300/60 max-w-7xl mx-auto" />
      <FAQ />
      {/* More sections will be added here */}
    </div>
  );
};

export default Home;
