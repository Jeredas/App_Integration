import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
  // Toogle integratedContainer vissibility
  const toogleIntegration = async ()=> {
    const integratedContainer = document.querySelector('#integrate');
    if(!integratedContainer){
     return 
    }
    if(integratedContainer.classList.contains('hidden')){
     integratedContainer.classList.remove('hidden');
    } else {
     integratedContainer.classList.add('hidden');
    }
  }

  // Add script onload
  useEffect(()=>{
    const script = document.createElement("script");
    script.src = "bundlescript.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={toogleIntegration}>Toggle container</button>
      </header>
      
    </div>
  );
}

export default App;
