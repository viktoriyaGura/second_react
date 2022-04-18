
import MyComponent from '../MyComponent/MyComponent';
import './App.css';

const greeting = {
  name: 'everybody',
  number: 'second'
}

function App() {
  return (
    <div className="App">
      <MyComponent
        name = {greeting.name}  number = {greeting.number}
      />
    </div>
  );
}

export default App;
