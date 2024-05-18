import './App.css';
import Navbarr from './Components/Navbarr';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PricingPage from './Pages/PricingPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import FeaturesPage from './Pages/FeaturesPage';
import LearnPage from './Pages/LearnPage';
import DSP_DesignerPage from './Pages/DSP_DesignerPage';
import EventPage from './Pages/EventPage';
import HPMKTPage from './Pages/HPMKTPage';
import Feature_Visiualizer from './Pages/Feature_Visiualizer';
import DashboardPage from './Pages/DashboardPage';
import Questioner from './Pages/Questioner';

function App() {
  return (
    <>
    

<Router>
    {/* <Navbarr /> */}
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/contact-us" element={<ContactPage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      <Route path="/features" element={<FeaturesPage/>}/>
      <Route path="/features/visualizer" element={<Feature_Visiualizer/>}/>
      <Route path="/learn-resource" element={<LearnPage/>}/>
      <Route path="/dsp-designer" element={<DSP_DesignerPage/>}/>
      <Route path="/learn-events" element={<EventPage/>}/>
      <Route path="/hpmkt" element={<HPMKTPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/questioner" element={<Questioner/>}/>
      
 

  </Routes> 
    
  {/* <Footer/> */}
    </Router>
</>
 )
}

export default App;
