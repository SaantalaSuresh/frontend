// import React from 'react'
// import { Routes,Route } from 'react-router-dom';
// import NavBar from './Components/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Components/Home';
// import Login from './Components/Login';
// // import Register from './Components/Register.jsx';
// import Register from './Components/Register';
// import Dashboard from './Components/Dashboard';
// import Sidebar from './Components/Sidebar';


//  const App = () => {
//   return (
//     <div>
//       <NavBar />
//       {/* <Register /> */}
//       <Sidebar/>
//       <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Register/>} />
//         <Route path='/dashboard' element={<Dashboard/>} />

//       </Routes>
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div>
     
      <NavBar />

     
      <div className="d-flex" style={{ minHeight: '100vh'}}>
       
        <Sidebar />

       
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
           
          
          {/* <Route path="/wallet" element={<Wallet />} />
          <Route path="/news" element={<News />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/cryptocurrency" element={<Cryptocurrency />} />
          <Route path="/mutual-fund" element={<MutualFund />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/community" element={<Community />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
