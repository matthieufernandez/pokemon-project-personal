import React from "react"
import CardList from "../components/CardList"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="App">
        <CardList />
      </div>
    </Layout>
  )
}
