import './App.css'
import HeroSection from './components/HeroSection'
import RelaxiStackSection from './components/RelaxiStackSection'
import PortfolioSection from './components/PortfolioSection'
import AutomationShowcase from './components/AutomationShowcase'
import WorkWithMeSection from './components/WorkWithMeSection'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <RelaxiStackSection />
      <PortfolioSection />
      <AutomationShowcase />
      <WorkWithMeSection />
    </div>
  )
}

export default App
  