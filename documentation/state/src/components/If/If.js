import React from 'react'
const UserGreeting = (props) => <h1>Bem vindo de volta</h1>
const GuestGreeting = (props) => <h1>Por favor faça o login</h1>

const GuestGreeting = (props) => {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting/>
}

export default GuestGreeting