import './App.css'

import { useCallback, useState } from 'react';
import './index.css';
import axios from 'axios';
import  Forms  from './pages/forms';
interface advice {
  advice: string;
  id: number;
}
function App() {
  const [advice, setAdvice] = useState<advice>({ advice: '', id: 0 });
  const getAdvice = useCallback(async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      console.log(response);
      setAdvice(response.data.slip);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section>
      <div className='bg'>
        <div className='button'>
          <strong>
            {advice.advice} {advice.id}
          </strong>
          <button
            className='buttontest'
            onClick={() => {
              getAdvice();
            }}
          >
            test
          </button>
          <Forms></Forms>
        </div>
      </div>
    </section>
  );
}

export default App;

//https://api.adviceslip.com/advice