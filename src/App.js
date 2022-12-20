import Header from "./components/Header";
import Counter from "./components/Counter";
import Card from "./components/Card.js"
import hershey from "./assets/hershey.png"

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
        className="score"
        text="Score:"
        count="3"
      />
      <Card image={hershey} text="Hershey Chocolate" />
    </div>
  );
}

export default App;
