import './App.scss';
import Home from './cmps/Home'
import Timer from './cmps/Timer'
import Timer2 from './cmps/Timer2'
import Timer3 from './cmps/Timer3'

function App() {
  return (
    <div className="App">
      <Home />
      <div className="timers">
        <Timer />
        <Timer2 />
        <Timer3 />
      </div>
    </div>
  );
}

export default App;
