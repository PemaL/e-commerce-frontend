import './App.css'
import Home from './pages/home'
import {Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useEffect, useState } from 'react';



function App() {

  const [currentUser, setCurrentUser] = useState("");

  console.log(currentUser)

  useEffect(() => {
  fetch('http://127.0.0.1:3000/auth')
    .then(res => res.json())
    .then(x => setCurrentUser(x))
  },[]) 

  if(!currentUser)
   return (
    <>
      <Home/>
       <Routes>
        <Route path='/signup' element={<SignUp/>} /> 
       <Route path='/signin' element={<SignIn setCurrentUser={setCurrentUser}/>} />
      </Routes>
    </>
  );
}

export default App;
