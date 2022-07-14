import React from "react"
import { top, btn } from "../styles/nav.module.css"

export default function Navbar() {
  return (
    <nav className={top}>
      <h1>Pokémon Card Project</h1>
      <div className="links">
        <a className={btn} href="/">
          Generate New Deck
        </a>
      </div>
    </nav>
  )
}
