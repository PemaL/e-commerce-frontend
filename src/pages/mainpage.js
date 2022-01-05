import React from 'react'

function MainPage({currentUser}) {
    return (
        <div>           
            <h1>Hello{currentUser.username}</h1>
        </div>
    )
}

export default MainPage
