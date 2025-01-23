import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Main }from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Auth } from './pages/Auth/Auth';
import { ClubInfo } from './pages/ClubInfo/ClubInfo';
import { TeamGallery } from './pages/Pictures';
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
      </Routes>
    </div>
    </Router>

  );
}

export default App;
