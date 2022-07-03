import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CardList from "../components/CardList"
import Loader from "../components/Loader"
import SearchFrom from "../components/SearchFrom"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="App">
        {/* <SearchFrom setCards={setCards} /> */}
        <CardList />
      </div>
    </Layout>
  )
}
