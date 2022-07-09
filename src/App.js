import './App.css';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import NewsNav from './pages/News/NewsNav';
import AboutNav from './pages/About/AboutNav';
import TeamsNav from './pages/Teams/TeamsNav';
import MobileLegend from './pages/MobileLegend/MobileLegend';
import Valorant from './pages/Valorant/Valorant';
import PUBGM from './pages/PUBGMobile/PUBGM';
import Dota2 from './pages/Dota2/Dota2';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import FAQ from './pages/FAQ/FAQ';
import PartnersNav from './pages/Partners/PartnersNav';
import Schedule from './pages/Schedule/Schedule';
import { AnimatePresence } from 'framer-motion';





function App() {
  return (
    <Router>
      <AnimatePresence>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<AboutNav />} />
          <Route path='/news' element={<NewsNav />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/partners' element={<PartnersNav />} />
          <Route path='/teams' element={<TeamsNav />} />
          <Route path='/team/dota2' element={<Dota2 />} />
          <Route path='/team/pubgmobile' element={<PUBGM />} />
          <Route path='/team/mlbb' element={<MobileLegend />} />
          <Route path='/team/valorant' element={<Valorant />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          
        </Routes>
        <Footer />
        </AnimatePresence>
    </Router>
  );
}

export default App;
