import React, { useEffect } from 'react'
import './App.css';

var data = new Date();

function BooksList() {
    const books = ['Lion King', 'Hércules', 'The Incredibles', 'Cars', 'Tarzan', 'Big Hero']
    
    function saveData0(){
        localStorage.setItem("Livro", JSON.stringify(books[0]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao0").disabled = true;
    }
    function saveData1(){
        localStorage.setItem("Livro", JSON.stringify(books[1]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao1").disabled = true;
    }
    function saveData2(){
        localStorage.setItem("Livro", JSON.stringify(books[2]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao2").disabled = true;
    }
    function saveData3(){
        localStorage.setItem("Livro", JSON.stringify(books[3]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao3").disabled = true;
    }
    function saveData4(){
        localStorage.setItem("Livro", JSON.stringify(books[4]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao4").disabled = true;
    }
    function saveData5(){
        localStorage.setItem("Livro", JSON.stringify(books[5]));  
        alert(`${"Livro Reservado"} ${data}`);
        document.getElementById("botao5").disabled = true;
    }
    
    return (
        
        <div> 
          <nav>
           <div id="LK"> <a href="./sinopseLK">{books[0]}</a></div> <input type="text" id="input"></input> <button id="botao0" onClick={saveData0}>Pegar Livro</button>
           <div id="HC"> <a href="./sinopseHC">{books[1]}</a></div> <input type="text" id="input"></input> <button id="botao1" onClick={saveData1}>Pegar Livro</button>
           <div id="TI"> <a href="./sinopseTI">{books[2]}</a></div> <input type="text" id="input"></input> <button id="botao2" onClick={saveData2}>Pegar Livro</button>
           <div id="Cars"> <a href="./sinopseCars">{books[3]}</a></div> <input type="text" id="input"></input> <button id="botao3" onClick={saveData3}>Pegar Livro</button>
           <div id="Tar"> <a href="./sinopseTar">{books[4]}</a></div>  <input type="text" id="input"></input><button id="botao4" onClick={saveData4}>Pegar Livro</button> 
           <div id="BH"> <a href="./sinopseBH">{books[5]}</a></div> <input type="text" id="input"></input><button id="botao5" onClick={saveData5}>Pegar Livro</button> 
           </nav>
        </div>
    )
}         

export default BooksList
