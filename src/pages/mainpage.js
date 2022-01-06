import React from 'react'
import {useEffect,useState} from 'react'
import ItemPage from './ItemPage'
import ItemForm from './ItemForm'
import {useNavigate} from 'react-router-dom';

function MainPage({currentUser}){

    const [items, setItems] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
    fetch('http://127.0.0.1:3000/items')
    .then(res => res.json())
    .then(data => setItems(data));
    },[])

    function handleClick(){
      navigate('/ItemForm')
    }

    return (
        <div>           
            <h1>Hello{currentUser.username}</h1>
            <button onClick={handleClick}> Sell an item </button>
             <ItemPage items={items}/> 
        </div>
    )
}

export default MainPage
