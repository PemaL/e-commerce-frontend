
import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useEffect, useState } from "react";
import MainPage from "./pages/mainpage";
import Cart from "./pages/Cart";
import ItemForm from "./pages/ItemForm";
import NavBar from "./pages/NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  let searchedItems = items.filter((item) => (item.name.toLowerCase().includes(search.toLowerCase())))

  useEffect(() => {
    fetch('http://127.0.0.1:3000/items')
    .then(res => res.json())
    .then(data => setItems(data));
    },[])

    // useEffect(() => {
    //   fetch('http://127.0.0.1:3000/me')
    //   .then(res => res.json())
    //   .then(data => setCurrentUser(data));
    //   },[])
  
  

  if (!currentUser) {
    return (
      <>
        {/* <Landing /> */}
        <Routes>
           <Route exact path='/' element={<Landing/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn setCurrentUser={setCurrentUser} />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <NavBar setSearch={setSearch} search={search} setCurrentUser={setCurrentUser}/>
        <Routes>
          <Route path="/MainPage" element={<MainPage items={searchedItems} currentUser={currentUser} />} />
          <Route path="/ItemForm" element={<ItemForm currentUser={currentUser}/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </>
    );
  }
}

export default App;
