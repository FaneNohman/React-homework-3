import { useMemo, useState,useRef } from 'react';
import './App.css';

function App() {
  const inputA = useRef(0);
  const inputB = useRef(0);

  const [numA,setNumA] = useState(0);
  const [numB,setNumB] = useState(0);
  const [numC,setNumC] = useState(0);

  const evenOrOdd = ["even","odd"];
  const [str,setStr]= useState("");

  const Go = ()=>{
    setNumA(parseInt(inputA.current.value));
    setNumB(parseInt(inputB.current.value));
  }

  const Sum =useMemo(()=>{
    console.log("Sum");
    setNumC(numA+numB);
  },[numA,numB]);

  const Even = useMemo(()=>{
    console.log("Even");
    setStr(evenOrOdd[numC%2]);
  },[numC])

  return (
    <div className="App">
      <input type="number" defaultValue={numA} ref={inputA}/>
      <input type="number" defaultValue={numB} ref={inputB}/>
      <button onClick={Go}>GO</button>
      <div>
        <p>{numC}</p>
        <p>{str}</p>
      </div>
    </div>
  );
}

export default App;
