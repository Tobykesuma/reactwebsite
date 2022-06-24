
import './App.css';
import GlobalStyle from './globalStyle';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';


function App() {
  return (
    <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
         
        </Routes>
    </Router>
  );
}

export default App;
