import React from 'react'
import {useEffect,useState} from 'react'
import ItemPage from './ItemPage'
import ItemForm from './ItemForm'
import {useNavigate} from 'react-router-dom';
import Cart from "./Cart";


function MainPage({currentUser,items}){

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [cartItems, setCartItems] = useState([]);

      useEffect(() => {
    fetch('http://127.0.0.1:3000/users')
    .then(res => res.json())
    .then(x => setUsers(x))
    },[]) 


    function handleClick(){
      navigate('/ItemForm')
    }
    console.log(currentUser)

    return (
        <div>           
            <h1>Hello{currentUser.username}</h1>
            <button onClick={handleClick}> Sell an item </button>
             <ItemPage users={users} items={items}/> 
             <Cart cartItems={cartItems} />
        </div>
    )

}

export default MainPage;
