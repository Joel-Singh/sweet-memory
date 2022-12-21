import Header from "./components/Header";
import Counter from "./components/Counter";
import CardHolder from "./components/CardHolder";
import { useEffect } from "react";
import appCss from "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
        className="score"
        text="Score:"
        count="3"
      />
      <CardHolder shouldShuffle={true} />
    </div>
  );
}

export default App;
