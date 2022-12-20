import Header from "./components/Header";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
        className="score"
        text="Score:"
        count="3"
      />
    </div>
  );
}

export default App;
