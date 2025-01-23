import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Main }from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Auth } from './pages/Auth/Auth';
import { ClubInfo } from './pages/ClubInfo/ClubInfo';
import { TeamGallery } from './pages/Pictures';
import { FAQ } from './pages/FAQ/Faq';
import { Contacts } from './pages/Contacts/Contact';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/clubinfo' element={<ClubInfo/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/gallery' element={<TeamGallery/>}></Route>
        <Route path='/faq' element={<FAQ/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
