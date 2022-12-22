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
  const cardsInformation = [
    { name: "bottlecaps", image: bottlecaps },
    { name: "gobstopper", image: gobstopper },
    { name: "hershey", image: hershey },
    { name: "jollyRancher", image: jollyRancher },
    { name: "laffyTaffy", image: laffyTaffy },
    { name: "lifeSavers", image: lifeSavers },
    { name: "nerds", image: nerds },
    { name: "sourPatch", image: sourPatch },
    { name: "starburst", image: starburst },
    { name: "swedishFish", image: swedishFish },
    { name: "tootsieRoll", image: tootsieRoll },
    { name: "twizzlers", image: twizzlers },
  ]

  const cards = cardsInformation.map(createCard)

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

  function createCard(cardInformation) {
    const {name, image} = cardInformation
    return (
      <Card
        id={name}
        key={name}
        image={image}
      />
    )
  }
}
