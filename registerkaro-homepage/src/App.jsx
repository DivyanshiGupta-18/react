
import './App.css'
import Herosection from './components/Herosection'
import TrustedSection from './components/TrustedSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import WhyChooseSection from './components/WhyChooseSection'
import VideoIntroduction from './components/VideoIntroduction'
import HappyClients from './components/HappyClients'
import ApplicationProcess from './components/ApplicationProcess'
import BlogsSection from './components/BlogSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ManageServicesSection from './components/ManageServicesSection'
import WhyRegisterKaroSection from './components/WhyRegisterKaroSection'
import DigitalRealitySection from './components/DigitalRealitySection'
import PartnersSection from './components/PartnersSection'
import FooterSection from './components/FooterSection'


function App() {

  return (
    <>
      <Herosection />    {/* herosection or navbar dono isme hai */}
     <TrustedSection />
     <ServicesSection />
     <AboutSection />
     <WhyChooseSection />
     <VideoIntroduction />
     <HappyClients />
     <ApplicationProcess />
     <BlogsSection />
     <TestimonialsSection />
     <FAQSection />
     <ManageServicesSection />
     <WhyRegisterKaroSection />
     <DigitalRealitySection />
     <PartnersSection />
     <FooterSection />
    </>
  )
}

export default App
