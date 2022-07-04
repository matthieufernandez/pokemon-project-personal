import React, { useEffect } from "react"
import {
  modal,
  overlay,
  cardContainer,
  cardHeader,
  cardMain,
  cardInfoSection,
  cardFooter,
  cardImage,
  closeButton,
  nameSection,
  cardFlavorText,
} from "../styles/modal.module.css"

function CardModal({ modalOpen, setModalOpen, cardData, setCardData }) {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true)
  }, [])

  function detectKeyDown(e) {
    if (e.key === "Escape") {
      setModalOpen(false)
    }
  }

  if (!modalOpen) return null

  return (
    <>
      <div className={overlay} />
      <div className={modal}>
        <button className={closeButton} onClick={() => setModalOpen(false)}>
          X
        </button>

        {/* THIS MODAL DISPLAYS ENERGY CARDS */}
        {cardData.supertype === "Energy" && (
          <div className="energyCardDiv">
            <h2>{cardData.name}</h2>
            <img className={cardImage} src={cardData.images.small} />
            {cardData.rules && <p>{cardData.rules}</p>}
            {cardData.flavortext && <p>{cardData.flavortext}</p>}
          </div>
        )}

        {/* THIS MODAL DISPLAYS TRAINER CARDS */}
        {cardData.supertype === "Trainer" && (
          <div className="trainerCardDiv">
            <div className={cardHeader}>
              <h2>{cardData.name}</h2>
              {cardData.hp && <h4>HP: {cardData.hp}</h4>}
            </div>
            <img className={cardImage} src={cardData.images.small} />
            {cardData.rules.map(rule => (
              <p>{rule}</p>
            ))}
          </div>
        )}

        {/* THIS MODAL DISPLAYS POKEMON CARDS */}
        {cardData.supertype === "Pokémon" && (
          <div className={cardContainer}>
            <div className={cardHeader}>
              <div className={nameSection}>
                <h2>{cardData.name}</h2>
                <h4>HP: {cardData.hp}</h4>
              </div>
              {cardData.types.map(type => (
                <p>Type: {type}</p>
              ))}
              {cardData.evolvesFrom && (
                <p>evolves from: {cardData.evolvesFrom}</p>
              )}
              {cardData.evolvesTo && <p>evolves to: {cardData.evolvesTo[0]}</p>}
            </div>
            <div className={cardMain}>
              <img className={cardImage} src={cardData.images.small} />
              <div className={cardInfoSection}>
                {cardData.rules &&
                  cardData.rules.map((rule, index) => (
                    <p key={index}>{rule}</p>
                  ))}
                {cardData.abilities &&
                  cardData.abilities.map((ability, index) => (
                    <div key={index}>
                      <h5 className="abilityName">{ability.name}</h5>
                      <span className="abilityText">{ability.text}</span>
                      <p></p>
                    </div>
                  ))}
                {cardData.attacks &&
                  cardData.attacks.map((attack, index) => (
                    <div className="attacks" key={index}>
                      <h5>{attack.name}</h5>
                      <span>
                        Converted Energy Cost: {attack.convertedEnergyCost}
                      </span>
                      {attack.damage && <p>Damage: {attack.damage}</p>}
                      <p>{attack.text}</p>
                    </div>
                  ))}
                <p className={cardFlavorText}>{cardData.flavorText}</p>
              </div>
            </div>
            <div className={cardFooter}>
              {cardData.weaknesses &&
                cardData.weaknesses.map(weakness => (
                  <>
                    <p>
                      Weakness: {weakness.type}
                      {weakness.value}
                    </p>
                  </>
                ))}
              {cardData.resistances &&
                cardData.resistances.map(resistance => (
                  <>
                    <p>
                      Resistance: {resistance.type}
                      {resistance.value}
                    </p>
                  </>
                ))}
              {cardData.retreatCost && (
                <p>retreat cost: {cardData.retreatCost.length}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CardModal