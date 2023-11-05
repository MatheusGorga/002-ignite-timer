import { Play } from 'phosphor-react';
import { HomeContainer, StartCountdownButton } from './styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './components/NewCycleForm/styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa para inciar um ciclo'),
  minutesAmount: zod.number().min(5).max(60),
});

/* interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}
 */

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });

  function handleCreateNewCycle(data: any) {
    console.log(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action='' onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor='task'>Vou trabalhar em: </label>
          <TaskInput
            type='text'
            id='task'
            placeholder='De um nome para o seu projeto'
            {...register('task')}
          />
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
