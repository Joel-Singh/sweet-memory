import Header from "./components/Header";
import Counter from "./components/Counter";
import CardHolder from "./components/CardHolder";
import appCss from "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
        className="current-score"
        text="Current:"
        count="3"
      />
      <Counter
        className="best-score"
        text="Best:"
        count="12"
      />
      <CardHolder shouldShuffle={true} />
    </div>
  );
}

export default App;
