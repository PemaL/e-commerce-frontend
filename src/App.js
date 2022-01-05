import './App.css'
import Landing from './pages/Landing'
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useEffect, useState } from 'react';
import MainPage from './pages/mainpage';



function App() {

  const [currentUser, setCurrentUser] = useState("");

  console.log(currentUser)

  // useEffect(() => {
  // fetch('http://127.0.0.1:3000/auth')
  //   .then(res => res.json())
  //   .then(x => setCurrentUser(x))
  // },[]) 

  if (!currentUser) {
    return (
      <>
        <Landing />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn setCurrentUser={setCurrentUser} />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Landing />
        <Routes>
          <Route path="/mainpage" element={<MainPage currentUser={currentUser} />} />
        </Routes>
      </>)
  }
}

export default App;
