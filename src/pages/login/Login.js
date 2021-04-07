import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

export const Login = () => {

    const {setUser, user} = useContext(UserContext);

    return (
        <div className="container">
           <h1>Login</h1>
           <button className="btn btn-primary sign-up" onClick={ () => setUser({id: 1, name: 'isis3710'})}>Sign up</button>
           <pre>{JSON.stringify(user)}</pre> 
        </div>
    )
}
