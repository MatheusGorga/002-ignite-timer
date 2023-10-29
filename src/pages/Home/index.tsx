import { Play } from 'phosphor-react';
import { HomeContainer, StartCountdownButton } from './styles';

function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <div>
          <label htmlFor='task'>Vou trabalhar em: </label>
          <input type='text' name='' id='task' />
          <label htmlFor='minutesAmount'>durante </label>
          <input
            type='number'
            name=''
            id='minutesAmount'
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </div>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <StartCountdownButton type='submit'>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

export default Home;
