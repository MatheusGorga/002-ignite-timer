import { Play } from 'phosphor-react';
import { HomeContainer, StartCountdownButton } from './styles';
import { useForm } from 'react-hook-form';
import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './components/NewCycleForm/styles';

function Home() {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action='' onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em: </label>
          <TaskInput type='text' id='task' {...register('task')} />
          <label htmlFor='minutesAmount'>durante </label>
          <MinutesAmountInput
            type='number'
            id='minutesAmoun'
            placeholder='00'
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>

        <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

export default Home;
