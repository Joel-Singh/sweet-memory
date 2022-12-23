import Header from "./components/Header";
import Counter from "./components/Counter";
import CardHolder from "./components/CardHolder";
import appCss from "./App.css"
import { useRef, useState } from "react";

let clickedCards = []
function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const currentScoreRef = useRef()
  currentScoreRef.current = currentScore

  const [bestScore, setBestScore] = useState(0)
  const bestScoreRef = useRef()
  bestScoreRef.current = bestScore

  const [cardHolderOnScreen, setCardHolderOnScreen] =
    useState(<CardHolder shouldShuffle={true} onCardClick={onCardClick}/>)

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

  function onCardClick(event) {
    const clickedCard = event.target.id
    const currentScore = currentScoreRef.current
    const bestScore = bestScoreRef.current

    if (!hasCardBeenClickedBefore(clickedCard)) {
      setCurrentScore(prevScore => prevScore + 1)

      if (currentScore >= bestScore) {
        setBestScore(currentScore + 1)
      }
    } else if (hasCardBeenClickedBefore(clickedCard)) {
      setCurrentScore(0)
      clickedCards = []
    }

    clickedCards.push(clickedCard)
    shuffleCardHolder()
  }

  function shuffleCardHolder() {
    setCardHolderOnScreen(<CardHolder shouldShuffle={true} onCardClick={onCardClick}/>)
  }

  function hasCardBeenClickedBefore(card) {
    return clickedCards.includes(card)
  }
}

export default App;
