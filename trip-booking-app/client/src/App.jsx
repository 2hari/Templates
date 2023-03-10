import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
