import { useState } from 'react';

function BotaoPrimario() {
    let acao = () =>{
      const tipoBotao = document.getElementsByClassName("btn-primario")
    
      alert(tipoBotao);
      
    }
    return (
      <div className='buttonContainer' >
        <button className='btn-primario' onClick={acao}>Botao primario</button>
      </div>
    );
  }
  
  function BotaoSecundario() {
    let acao = () =>{
      alert("btn-secundario");
      
    }
    return (
      <div className='buttonContainer'>
        <button className='btn-secundario' onClick={acao}>Botao Secundario</button>
      </div>
    );
  }
  function ExemploUseState(){
    const [inputText, setText] = useState('hello'); 

    function evento(e){
        setText(e.target.value)
    }
    const estilo = {
        backgroundColor: "gray"
    }
    
    return(
        <div className={estilo}>
            <label for='input'>Exemplo 1:</label>
            <input id='input' value={inputText} onChange={evento}></input>
            <p>You typed: {inputText}</p>
        </div>

    );
  }

export  {BotaoPrimario, BotaoSecundario, ExemploUseState}; 