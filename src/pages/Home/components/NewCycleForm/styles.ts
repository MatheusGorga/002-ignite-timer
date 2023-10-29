import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;
const BaseInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  height: 2.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};

  &::focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;
