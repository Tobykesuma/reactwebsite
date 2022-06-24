
import './App.css';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
        

        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
