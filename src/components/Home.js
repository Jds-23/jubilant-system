import React from 'react'

const Home = ({user}) => {
    return (
        <div>
            <h1>Home</h1>
            <h3>Email: {user.user.email}</h3>
        </div>
    )
}

export default Home
