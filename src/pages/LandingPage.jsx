import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import AcademicEndorsementSection from '../components/AcademicEndorsementSection'
import ScheduleSection from '../components/ScheduleSection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <AcademicEndorsementSection />
        <ScheduleSection />
      </main>
      <Footer />
    </>
  )
}
