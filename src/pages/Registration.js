// src/pages/Registration.js
import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      await setDoc(doc(db, 'usuarios', user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        uid: user.uid
      });
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} required />
      <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} required />
      <input type="date" placeholder="Data de Nascimento" onChange={(e) => setDataNascimento(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Registration;
