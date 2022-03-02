
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from './components/Home';
import TokenPage from './components/TokenPage';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Crops from './components/Crops';
import Login from './components/Login';
import Newscomponent from './components/Newscomponent';
import Translate from './components/Translate';



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/tokenPage" element={<TokenPage />}></Route>
          <Route path="/tokenPage/:slug" element={<Crops crop="Wheat" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs"/>}></Route>
          <Route path="/newscomponent" element={<Newscomponent />}></Route>
          <Route path="/translate" element={<Translate />}></Route>
          <Route path='/tokenPage/wheat' element={<Crops crop="Wheat" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs" no={1}/>}></Route>
          <Route path='/tokenPage/bajra' element={<Crops crop="Bajra" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs" no={3}/>}></Route>
          <Route path='/tokenPage/jowar' element={<Crops crop="Jowar" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs" no={2}/>}></Route>
          <Route path='/tokenPage/paddy' element={<Crops crop="Paddy" demand="2400tons" msp="50Rs" rd="2000tons" fertilizer="200rs" no={0}/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// npm i cors express stripe uuid nodemon
