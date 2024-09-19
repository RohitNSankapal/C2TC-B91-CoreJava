import ImageComponent from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './Component/Navigation'; 
import './Navigate.css';
import './App.css';
import Foot from './Component/Foot'
import Customer from './Component/GetReq'
import Add from './Component/Add'
import Upd from './Component/Upd';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ImageComponent/>}></Route>
          <Route path="/abt" element={<About/>}></Route>
          <Route path="/cont" element={<Contact/>}></Route>
          <Route path="/cust" element={<Customer/>}></Route>
          <Route path="/upd/:id" element={<Upd/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
        </Routes>
        <Foot/>
      </div>
    </BrowserRouter>
  );
}

export default App;
