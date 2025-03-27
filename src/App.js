import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(()=>{
    axios.get('/api/time')
    .then(response=>{
      setCurrentTime(response.data);
    })
    .catch(error=>{
      console.log('API호출 중 오류발생',error);
    });
  })
  
  return (
    <div className="App">
<h1>현재시간</h1>
<h3>{currentTime}</h3>
    </div>
  );
}

export default App;
