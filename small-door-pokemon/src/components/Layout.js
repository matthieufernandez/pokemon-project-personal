import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

function Layout({ children }) {
  return (
    <div>
      {" "}
      <>
        <div className="layout">
          <Navbar />
        </div>
        <div className="content">{children}</div>
        <footer>
          <p>Copyright 2022 @mf</p>
        </footer>
      </>
    </div>
  )
}

export default Layout
