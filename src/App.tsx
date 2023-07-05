import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {

  return (
    <div className="App">
        <div>
          <CountDownTimer hours={1} minutes={0} seconds={26}/>
        </div>
    </div>
  );
}

export default App;