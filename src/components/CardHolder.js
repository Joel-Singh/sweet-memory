import Card from "./Card"
import React, { useState } from "react"

import bottlecaps from "../assets/bottlecaps.png"
import gobstopper from "../assets/gobstopper.png"
import hershey from "../assets/hershey.png"
import jollyRancher from "../assets/jolly-rancher.png"
import laffyTaffy from "../assets/laffy-taffy.png"
import lifeSavers from "../assets/life-savers.png"
import nerds from "../assets/nerds.png"
import sourPatch from "../assets/sour-patch.png"
import starburst from "../assets/starburst.png"
import swedishFish from "../assets/swedish-fish.png"
import tootsieRoll from "../assets/tootsie-roll.png"
import twizzlers from "../assets/twizzlers.png"


export default function CardHolder(props) {
  const cards = [
    <Card id="bottlecaps" key="bottlecaps" image={bottlecaps} />,
    <Card id="gobstopper" key="gobstopper" image={gobstopper} />,
    <Card id="hershey" key="hershey" image={hershey} />,
    <Card id="jollyRancher" key="jollyRancher" image={jollyRancher} />,
    <Card id="laffyTaffy" key="laffyTaffy" image={laffyTaffy} />,
    <Card id="lifeSavers" key="lifeSavers" image={lifeSavers} />,
    <Card id="nerds" key="nerds" image={nerds} />,
    <Card id="sourPatch" key="sourPatch" image={sourPatch} />,
    <Card id="starburst" key="starburst" image={starburst} />,
    <Card id="swedishFish" key="swedishFish" image={swedishFish} />,
    <Card id="tootsieRoll" key="tootsieRoll" image={tootsieRoll} />,
    <Card id="twizzlers" key="twizzlers" image={twizzlers} />,
  ]

  const { shouldShuffle } = props
  if (shouldShuffle)
    shuffle(cards)

  return (
    <div className="card-holder">
      {cards}
    </div>
  )

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
  }
}
