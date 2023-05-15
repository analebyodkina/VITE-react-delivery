
import { Routes, Route } from 'react-router-dom';
import './App.scss'

import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Header from './components/UI/Header/Header';

function App() { 

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />        
      </Routes>  
      
    </>
  )
}

export default App
