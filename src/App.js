import './App.css';
import Login from './components/modules/login/login';
import Menu from './components/modules/menu/menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <><BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
