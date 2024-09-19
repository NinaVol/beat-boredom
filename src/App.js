import { useEffect, useState } from 'react';
import video from './animation.mp4'
import './App.css';

function App() {
  const [advice,setAdvice] = useState('')

  useEffect(() => {
    getAdvice()
  },[])

  const getAdvice = async() => {
    const response = await fetch('https://bored.api.lewagon.com/api/activity/');
    const data = await response.json();
    console.log(data);
    setAdvice(data.activity);
  }


 return(
  <div>
    <div>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>
    </div>
    
    <div className='container'>
      <h1>Beat boredom - get activity</h1>
    </div>

    <div className='container'>
      <p>{advice}</p>
    </div>

    <div className='container'>
      <button onClick={getAdvice}>Get Activity</button>
    </div>

  </div>
 )
  
  
}

export default App;
