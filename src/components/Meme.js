import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState([memesData])

  function getImage() {
    const memeArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const randomUrl = memeArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomUrl
    }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <div className="memeContent">
      <div className="inputContainer">
        <input className="inputMeme" type="text" name="topText" value={meme.topText} onChange={handleChange} />
        <input className="inputMeme" type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
      </div>
      <button className="submitMeme" onClick={getImage}>Get a new meme image 🖼️</button>
      <div className="memeContainer">
        <img src={meme.randomImage} className="img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>

  )
}


