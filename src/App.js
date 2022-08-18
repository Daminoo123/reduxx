import './App.css';

import Listtask from './components/Listtask/Listtask';
import Addtask from './components/Addtask/Addtask';

function App() {
  return (
    <div className="App">
      <Addtask/>
      <Listtask/>
    </div>
  );
}

export default App;
