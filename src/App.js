import './App.css';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './components/TodosContainer';
// import './components/redux_exercise';
function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
