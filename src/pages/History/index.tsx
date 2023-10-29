import { HistoryContainer, HistoryList, Status } from './styles';

function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 5, 6, 7].map((item, index) => {
              return (
                <tr key={Math.round(index)}>
                  <td>Tarefa</td>
                  <td>25 min</td>
                  <td>há tanto tempo</td>
                  <td>
                    <Status statusColor='green'>Concluido</Status>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

export default History;
