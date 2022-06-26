
import './App.css';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import AboutNav from './pages/About/AboutNav';






function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<AboutNav />} />
          <Route path='/news' element={<News />} />

        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
