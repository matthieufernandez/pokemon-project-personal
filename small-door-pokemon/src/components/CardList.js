import React, { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { cardlist, cardarea, cardsmall } from "../styles/cardslist.module.css"
import CardModal from "./CardModal"

import Loader from "./Loader"

function CardList({ cards }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [cardData, setCardData] = useState(null)

  function handleClick(e, card) {
    e.preventDefault()
    setCardData(card)
  }

  useEffect(() => {}, [cardData])

  return (
    <>
      {cards.length === 0 ? (
        <Loader />
      ) : (
        <div className={cardlist}>
          {cards.map(card => (
            <div className={cardarea}>
              <LazyLoadImage
                key={card.id}
                onClick={e => handleClick(e, card)}
                className="cardsmall"
                style={{
                  margins: "10px",
                  padding: "10px",
                }}
                src={card.images.small}
                effect="blur"
                visibleByDefault={false}
                alt={"image of the pokemon card: " + card.name}
              />
            </div>
          ))}
        </div>
      )}

      <CardModal open={modalOpen}>Some stuff</CardModal>
    </>
  )
}

// const CardsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `

export default CardList
