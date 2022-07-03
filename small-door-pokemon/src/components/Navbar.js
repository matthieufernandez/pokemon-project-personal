import React from "react"
import { top, btn } from "../styles/nav.module.css"

export default function Navbar() {
  return (
    <nav className={top}>
      <h1>Matt's Pokémon Project</h1>
      <div className="links">
        <a className={btn} href="/">
          Generate
        </a>
      </div>
    </nav>
  )
}
