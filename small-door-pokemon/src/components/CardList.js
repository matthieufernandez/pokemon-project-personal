import React, { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { cardlist, cardarea, cardsmall } from "../styles/cardslist.module.css"
import CardModal from "./CardModal"

import Loader from "./Loader"

function CardList() {
  const API_KEY = process.env.GATSBY_KEY
  const randomPage = Math.floor(Math.random() * 250 + 1)

  const [cards, setCards] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState(null)

  useEffect(() => {
    async function getCards() {
      try {
        await fetch(
          `https://api.pokemontcg.io/v2/cards/?page=${randomPage}&pageSize=60`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "X-Api-Key": API_KEY,
            },
          }
        )
          .then(res => res.json())
          .then(data => setCards(data.data))
      } catch (err) {
        console.error(err)
      }
    }
    getCards()
  }, [])

  function handleClick(e, card) {
    e.preventDefault()
    setModalOpen(true)
    setCardData(card)
  }

  useEffect(() => {
    console.log(cardData)
  }, [cardData])

  return (
    <>
      {cards.length < 60 ? (
        <Loader />
      ) : (
        <div className={cardlist}>
          {cards.map(card => (
            <div key={card.id} className={cardarea}>
              <LazyLoadImage
                effect="blur"
                onClick={e => handleClick(e, card)}
                className={cardsmall}
                style={{
                  margins: "10px",
                  padding: "10px",
                }}
                src={card.images.small}
                alt={"image of the pokemon card: " + card.name}
              />
            </div>
          ))}
        </div>
      )}

      <CardModal
        cardData={cardData}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
    </>
  )
}

export default CardList
