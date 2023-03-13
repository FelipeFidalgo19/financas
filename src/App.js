import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [valor,setValor] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>Data</label>
        <input type="text"  value={valor} onChange={(e)=>setValor(e.target.value)}/>
        <label>Descricao</label>
        <input type="text"  value={valor} onChange={(e)=>setValor(e.target.value)}/>
        <label>Valor</label>
        <input type="number"  value={valor} onChange={(e)=>setValor(e.target.value)}/>

        <button>Salvar</button>
      </header>
    </div>
  );
}

export default App;
