import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Sidebar from './component/sidebar/Sidebar';
function App() {
  return (
    <div className="App container-fluid" > 
    <div className='row'>
      <div className='col-lg-3 col-md-4 '>
         <Sidebar/> 
      </div>
    
<div className='col-lg-9 col-md-8'>
    <BrowserRouter> 
   
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} /> 

        {/* <Route path="/users" >
        <Route  index element={<List />} />
        <Route  path=":userId" element={<Single />} />
        <Route path="/new" element={<New/>} />
        </Route> */}

        {/* <Route path="/products" >
        <Route  index element={<List />} />
        <Route  path=":productId" element={<Single />} />
        <Route path="/new" element={<New/>} />
        </Route> */}
				
    </Routes>
    </BrowserRouter> </div>
   {/* <Sidebar/>   */}
  {/* <Home/> */}
  </div>
    </div>
  );
}

export default App;
