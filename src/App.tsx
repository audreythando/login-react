import React from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*"  element={<PageNotFound/>}/>
        </Routes>
  

    </div>

  );
}

export default App;
