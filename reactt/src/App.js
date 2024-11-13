



import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter,Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path = '/Register' element = {<Register/>}  />
            <Route path = '/Login' element = {<Login/>}  />

        </Routes>
      </BrowserRouter>

      </>
);
}

export default App;


