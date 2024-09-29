// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      setUser(userCredential.user);
    } catch (error) {
      alert('Usuário não cadastrado. Verifique seus dados.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
      <button type="submit">Acessar</button>
    </form>
  );
};

export default Login;
