import { HandPalm, Play } from 'phosphor-react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './components/NewCycleForm/styles';
import { useEffect, useState } from 'react';
import { CountdownContainer, Separator } from './components/CountDown/styles';
import { differenceInSeconds } from 'date-fns';
import NewCycleForm from './components/NewCycleForm';
import CountDown from './components/CountDown';

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id: id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(id);
    setAmoutSecondsPassed(0);

    reset();
  }

  function handleInterruptCycle() {
    setActiveCycleId(null);

    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;
  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  const task = watch('task');
  const isSubmitDisabled = !task;

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`;
    }
  }, []);

  return (
    <HomeContainer>
      <form action='' onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type='button'>
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}

export default Home;
