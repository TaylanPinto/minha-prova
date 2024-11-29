import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Transacao from './Pages/Transacao';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header>MyFinance</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transacao" element={<Transacao />} />
      </Routes>
      <Footer>Salmo 91</Footer>
    </div>
  );
}

export default App;
