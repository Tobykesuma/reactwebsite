
import './App.css';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />

        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
