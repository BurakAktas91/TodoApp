import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {

const [kutuIci, setKutuIci] = useState('');
const [liste, setListe] = useState([]);

useEffect (() => {
  const storedList = JSON.parse(localStorage.getItem('liste'));
  if (storedList) {
    setListe(storedList);
  }
}, []);

useEffect (() => {
  localStorage.setItem('liste', JSON.stringify(liste));
}, [liste]);

const change = (c) => {
  setKutuIci(c.target.value);
}

const ekle = () => {
  if (kutuIci.trim() !== ''){
    setListe([...liste, { id: getId(), text: kutuIci, done: false}]);
    setKutuIci('');
  }
}

const sil = (id) => {
  const onay = window.confirm('Emin misin?');
  if ( onay ) {
    const guncelListe = liste.filter(item => item.id !== id);
    setListe(guncelListe);    
  }
}

const tamamlandi = (id) => {
  const guncelListe = [...liste];
  const item = guncelListe.find(item => item.id ===id);
  item.done = !item.done;
  setListe(guncelListe);
}

function getId() {
  let id =1;
  for (const item of liste){
    if(item.id >= id){
      id = item.id + 1;
    }
  }
  return id;
}

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    ekle();
  }
}

return (
  <div className="container">
      <h1>
        <div className="flex flex-wrap align-items-center justify-content-center">
          <div className="zoomin animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
            font-bold bg-primary border-round m-2 px-5 py-3">
            Yapılacaklar Listesi
          </div>
        </div>
      </h1>
    <div className="input-container">
    <InputText
      type="text"
      value={kutuIci}
      onChange={change}
      placeholder="Yeni görevi buraya yazınız..."
    />
    <Button onClick={ekle} className="button">Ekle</Button>
    <Button
      onClick={() =>
        console.log(JSON.parse(localStorage.getItem('liste')))
      }
      severity="warning"
      className="button"
    >
      Console'a Yaz
    </Button>
    </div>
    <ul className="todo-list">
      {liste.map((item) => (
        <li key={item.id} className="todo-item">
          <span
            className={`todo-text ${item.done ? 'done' : ''}`}
          >
            {item.text}{' '}
          </span>
          <div className="button-group">
            <Button
              onClick={() => tamamlandi(item.id)}
              disabled={item.done}
              icon="pi pi-check"
              iconPos="right"
              severity="success"
              label="Tamamla"
              className="button"
            />
            <Button
              onClick={() => sil(item.id)}
              severity="danger"
              className="button"
            >
              Sil
            </Button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;