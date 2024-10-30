import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("");
  console.log(data)

  return (
    <div className="App">
     <input type='text' placeholder='Enter Username' name='data' value={data} onChange={(e) => setData(e.target.value+123)}/>
    
    </div>
  );
}

export default App;
