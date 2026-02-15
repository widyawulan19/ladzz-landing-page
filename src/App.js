import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Collection from './components/Collection';
import Lookbook from './components/Lookbook';
import Experience from './components/Experience';
import Investment from './components/Investment';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;
