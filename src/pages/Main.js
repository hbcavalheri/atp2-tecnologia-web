// src/pages/Main.js
import React from 'react';

const Main = ({ user }) => {
  return (
    <div>
      <h1>Bem-vindo, {user.nome} {user.sobrenome}</h1>
      <p>Data de Nascimnto: {user.dataNascimento}</p>
    </div>
  );
};

export default Main;
