import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Contacts from './pages/Contacts';
import Model_x from '../src/pages/Model_x'
import Headset from './pages/Headset'
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='Headset' element={<Headset/>}/>
    <Route path='model_x' element={<Model_x/>}/>
    <Route path='Contacts' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    
  );
  
}


export default App;
