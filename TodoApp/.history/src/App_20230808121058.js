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

const sil = () => {
  setListe(liste.filter(l => l.id !== liste.id));
}

const tamamlandi = () => {
  setListe();
}

return (
  <div>
    <h1 style={{ color: 'blue' }}>Todo List</h1>
    <div>
      <input
      type='text'
      value={kutuIci}
      onChange={change}
      placeholder='buraya yazınız.'
      />
      <button onClick={ekle}>Ekle</button>
    </div>
    <ul>
      {liste.map((liste, index) => (
        <li key={index}>
          <button onClick={() => tamamlandi(index)}>Tamamlandı</button>
          <button onClick={() => sil(index)}>Sil</button>
        </li>
      ))}
    </ul>
  </div>
)
}

export default Son;
