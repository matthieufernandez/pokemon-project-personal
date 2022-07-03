import React from "react"
import { modal, overlay } from "../styles/modal.module.css"

function CardModal({ modalOpen, setModalOpen, cardData, children }) {
  if (!modalOpen) return null

  return (
    <>
      <div className={overlay} />
      <div className={modal} onClick={() => setModalOpen(false)}>
        <div className="test">{cardData.name}</div>
      </div>
    </>
  )
}

export default CardModal
