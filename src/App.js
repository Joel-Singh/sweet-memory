import Header from "./components/Header";
import Counter from "./components/Counter";
import CardHolder from "./components/CardHolder";
import appCss from "./App.css"
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [cardHolderOnScreen, setCardHolderOnScreen] =
    useState(<CardHolder shouldShuffle={true}/>)

  return (
    <div className="app">
      <Header />
      <Counter
        className="current-score"
        text="Current:"
        count={currentScore}
      />
      <Counter
        className="best-score"
        text="Best:"
        count={bestScore}
      />
      {cardHolderOnScreen}
    </div>
  );

  function shuffleCardHolder() {
    setCardHolderOnScreen(<CardHolder shouldShuffle={true} />)
  }
}

export default App;
