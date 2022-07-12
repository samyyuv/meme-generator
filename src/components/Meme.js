import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
  const [meme, setMeme] = React.useState("");

  function getImage() {
    const memeArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const randomUrl = memeArray[randomNumber].url
    setMeme(randomUrl)
  }
  return (
    <div className="memeContent">
      <div className="inputContainer">
        <input className="inputMeme" type="text" />
        <input className="inputMeme" type="text" />
      </div>
      <button className="submitMeme" onClick={getImage}>Get a new meme image 🖼️</button>
      <div className="memeContainer">
        <img src={meme} className="img" />
      </div>
    </div>
  )
}


