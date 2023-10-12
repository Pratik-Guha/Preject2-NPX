import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer, Header, Home, Login, SignUp, Upload_Video as Uv, Videos} from './components/index'

function App() {
  return (
    <>
     <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Uv/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
      </Routes>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
