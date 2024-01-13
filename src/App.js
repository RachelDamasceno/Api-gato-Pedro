import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  // cat.facts/ninja/factscat.facts/ninja/facts
   
  const [catFact, setCatFact] = useState ("")

  useEffect(()=> {
   
    Axios.get("https://catfact.ninja/fact").then((res) => {setCatFact(res.data.fact)});
    ;
  }, []);
  

 
  
  return (
    <div className="App">
      <button>Generate cat fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
