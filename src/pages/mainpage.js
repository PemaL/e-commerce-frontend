import React from 'react'
import {useEffect,useState} from 'react'
import ItemPage from './ItemPage'

function MainPage({currentUser}) {

    const [items, setItems] = useState([])

    useEffect(() => {
    fetch('http://127.0.0.1:3000/items')
    .then(res => res.json())
    .then(data => setItems(data));
    },[])

    return (
        <div>           
            <h1>Hello{currentUser.username}</h1>
             <ItemPage items={items}/> 
        </div>
    )
}

export default MainPage
