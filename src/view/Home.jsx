import React from "react";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { Navigate } from 'react-router-dom';

const Home = () => {

  const user = useSelector(selectUser);
  return <div>
    {user.loggedin ? <h1 style={{ fontSize: '15px', marginBottom: '15px', letterSpacing: '1px', textAlign: 'center',fontFamily:'Inter' }}>Hola {user.username}</h1> : <Navigate to="login" replace />}
  </div>
}

export default Home;