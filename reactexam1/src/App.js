import './App.css';
import Container from './Container';
import Counter from './Counter';

function App() {
  return (
    <Container>
      <div className="App">
        <Counter initialValue={5} />
      </div>
    </Container>
  );
}

export default App; 