import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Zikirmatik from './Zikirmatik';
import Denemelik from './Denemelik';
import Todolist from './Todolist';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 

       <Denemelik />*/}

        
        <Zikirmatik />
      
    </div>
  );
}

function Son() {

const [kutuIci, setKutuIci] = useState('');
const [liste, setListe] = useState([]);

const change = (c) => {
  setKutuIci(c.target.value);
}

const ekle = () => {
  if (kutuIci.trim() !== ''){
    setListe([...liste, { text: kutuIci, flag: false}]);
    setKutuIci('');
  }
}

const sil = (index) => {
  const guncelListe = [...liste];
  guncelListe.splice(index, 1);
  setListe(guncelListe);
}

const tamamlandi = (index) => {
  const guncelListe = [...liste];
  guncelListe[index].flag = !guncelListe[index].flag;
  setListe(guncelListe);
}

return (
  <div>
    <h1 style={{ color: 'blue' }}>Todo List</h1>
    <input
      type='text'
      value={kutuIci}
      onChange={change}
      placeholder='buraya yazınız.'
      />
      <button onClick={ekle}>Ekle</button>
    <ul>
      {liste.map((liste, index) => (
        <li key={index}>{liste.text}
          <button onClick={() => tamamlandi(index)}>{liste.flag ? 'text-decoration: line-through' : 'Tamamlandı'}</button>          
          <button onClick={() => sil(index)}>Sil</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default Son;
