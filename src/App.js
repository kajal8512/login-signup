import { BrowserRouter , Routes, Route} from 'react-router-dom';
import React from 'react';
import "./App.css";
import LoginForm from  './component/LoginSignup/LoginForm.jsx';
import SignUp from './component/LoginSignup/SignUpForm.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
