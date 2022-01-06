import './App.css'
import Landing from './pages/Landing';
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import {  useState, useEffect } from 'react';
import MainPage from './pages/mainpage';
import ItemForm from './pages/ItemForm';
import NavBar from './pages/NavBar';



function App() {

  const [currentUser, setCurrentUser] = useState("");


  console.log(currentUser)

  // useEffect(() => {
  // fetch('http://127.0.0.1:3000/users')
  //   .then(res => res.json())
  //   .then(x => setCurrentUser(x))
  // },[]) 


  // fetch('http://127.0.0.1:3000/users')
  // .then(res => res.json())
  // .then(data => setCurrentUser(data)),[]
  // console.log(currentUser)


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
        <NavBar/>
        <Routes>
          <Route path="/mainpage" element={<MainPage currentUser={currentUser} />} />
          <Route path="/ItemForm" element={<ItemForm currentUser={currentUser}/>} />
        </Routes>
      </>)
  }
}

export default App;
