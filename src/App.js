import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Main }from './pages/Main/Main';
import { Header } from './components/Header/Header';
import { Rules } from './pages/Rules/Rules';
import { Auth } from './pages/Auth/Auth';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/rules' element={<Rules/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
