import Header from "./components/Header";
import Counter from "./components/Counter";
import Card from "./components/Card.js"
import sourGummyDrops from "./assets/sour-gummy-drops.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
        className="score"
        text="Score:"
        count="3"
      />
      <Card image={sourGummyDrops} text="sour gummy drops" />
    </div>
  );
}

export default App;
