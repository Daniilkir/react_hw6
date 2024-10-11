import './App.css';
import { PageBoard } from './components/PageBoard/PageBoard.jsx';
import events from './upcoming-events.json'

function App() {
  return (
    <div className="App">
      <PageBoard events={events}/>
    </div>
  );
}

export default App;
