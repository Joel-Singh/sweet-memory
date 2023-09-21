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

  const [flash, setFlash] = useState(false)
  const [lastFlashTimeout, setLastFlashTimeout] = useState(null)

  return (
    <div className="app">
      <Header />
      <Counter
        className="current-score"
        isFlashing={flash}
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
      handleFirstTimeCardClick()
    } else if (hasCardBeenClickedBefore(clickedCard)) {
      handleRepeatCardClick()
    }

    shuffleCardHolder()

    function handleFirstTimeCardClick() {
      setCurrentScore(prevScore => prevScore + 1)

      if (currentScore >= bestScore) {
        setBestScore(currentScore + 1)
      }
      flashCounter()

      clickedCards.push(clickedCard)

      function flashCounter() {
        setFlash(false)
        setTimeout(() => {
          setFlash(true)
          clearTimeout(lastFlashTimeout)
          const timeoutId = setTimeout(() => setFlash(false), 500)
          setLastFlashTimeout(timeoutId)
        }, 0)
      }
    }

    function handleRepeatCardClick() {
      setCurrentScore(0)
      clickedCards = []
    }
  }

  function shuffleCardHolder() {
    setCardHolderOnScreen(<CardHolder shouldShuffle={true} onCardClick={onCardClick}/>)
  }

  function hasCardBeenClickedBefore(card) {
    return clickedCards.includes(card)
  }
}

export default App;
