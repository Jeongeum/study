import { useContext } from 'react';
import { ContContext } from './ContContext';
import { First } from './components/First';
import { Second } from './components/Second';

function App() {
  const cont = useContext(ContContext);
  return (
    <ContContext.Provider value={cont}>
      <div>
        <h2>App component</h2>
        <First>
          <div>
            <h2>First component</h2>
            <Second />
          </div>
        </First>
      </div>
    </ContContext.Provider>
  );
}

export default App;
