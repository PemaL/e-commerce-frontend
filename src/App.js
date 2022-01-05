import './App.css'
import Home from './pages/home'
import {Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./components/signin"
import SignUp from "./components/signup"



function App() {

  return (
    <>
      <Home/>
      <Routes>
        <Route path='/signup' element={<SignUp/>} /> 
       <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
