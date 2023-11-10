import { FormContainer, MinutesAmountInput, TaskInput } from './styles';

function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em: </label>
      <TaskInput
        type='text'
        id='task'
        list='task-suggestions'
        disabled={!!activeCycle}
        placeholder='De um nome para o seu projeto'
        {...register('task')}
      />
      <datalist id='task-suggestions'>
        <option value='Projeto 1' />
        <option value='Projeto 2' />
        <option value='Projeto 3' />
      </datalist>

      <label htmlFor='minutesAmount'>durante </label>

      <MinutesAmountInput
        type='number'
        id='minutesAmoun'
        disabled={!!activeCycle}
        placeholder='00'
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}

export default NewCycleForm;
