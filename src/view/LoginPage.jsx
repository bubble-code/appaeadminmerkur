import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../features/userSlice'

import { useRef, useState, useEffect } from 'react';
import useAuth from '../hook/useAuth';
import '../styles/login.css'

// import axios from '../api/axios';
// const LOGIN_URL = '/auth';

const Login = () => {
  const users = [
    {
      user: 'Alcala 260',
      pass: '123'
    },
    {
      user: 'Alcala 610',
      pass: '123'
    },
    {
      user: 'Alcobendas',
      pass: '123'
    },
    {
      user: 'Carabanchel',
      pass: '123'
    },
    {
      user: 'Carabanchel 2',
      pass: '123'
    },
    {
      user: 'Mejorada del campo',
      pass: '123'
    },
    {
      user: 'Villanueva de la Cañada',
      pass: '123'
    },

  ]
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = false//location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const userRef = useRef();
  const errRef = useRef();

  const [userT, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userT, pwd])

  const handleSubmit = (e) => {
    let te = false;
    users.forEach(ele => {
      const { user, pass } = ele;
      if (user === userT && pass === pwd) {
        te = true;
        return;
      }

    })
    console.log(te);
    e.preventDefault();
    dispatch(login({
      username: userT,
      pass: pwd,
      loggedin: te,
    }));

    navigate('/', { replace: true });

    // try {
    //   const response = await axios.post(LOGIN_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //     }
    //   );
    //   // console.log(JSON.stringify(response?.data));
    //   //console.log(JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, pwd, roles, accessToken });
    //   setUser('');
    //   setPwd('');
    //   navigate(from, { replace: true });
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorized');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }
  }

  return (

    <div className='login'>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <form onSubmit={handleSubmit} className={"login__form"}>
        <h1>Sign In 😰</h1>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={userT}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button type='submit' className='submit__btn'>Aceptar</button>
      </form>
    </div>

  )
}

export default Login
