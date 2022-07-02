import React, { useState, useEffect } from "react"

export default function Home() {
  const API_KEY = process.env.GATSBY_KEY
  const randomPage = Math.floor(Math.random() * 250 + 1)

  const [cards, setCards] = useState([])

  useEffect(() => {
    async function getCards() {
      try {
        await fetch(
          `https://api.pokemontcg.io/v2/cards/?page=${randomPage}&pageSize=60`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
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

  useEffect(() => {
    cards ? console.log(cards) : console.log("loading")
  }, [cards])

  return <div>Hello world!</div>
}
