import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const StartCountdownButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 0.5rem;
  border-radius: 8px;

  border: none;
  width: 648px;
  height: 64px;

  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};

  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountdownButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  gap: 0.5rem;
  border-radius: 8px;

  border: none;
  width: 648px;
  height: 64px;

  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['red-500']};

  cursor: pointer;
`;
