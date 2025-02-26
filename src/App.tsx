import { useCallback, useState } from 'react';
import './index.css';
import axios from 'axios';
export interface PersonagemData {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

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
      console.error(error);
    }
  }, []);
  return (
    <div className='main'>
      <div>
        <strong className='strong'>{advice.advice}</strong>
      </div>
      <button
        className='button'
        onClick={() => {
          getAdvice();
        }}
      >
        Teste
      </button>
    </div>
  );
}

export default App;

