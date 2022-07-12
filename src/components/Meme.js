import React from "react";

export default function Meme() {

  return (
    <div className="memeContent">
      <div className="inputContainer">
        <input className="inputMeme" type="text" />
        <input className="inputMeme" type="text" />
      </div>
      <button className="submitMeme" >Get a new meme image 🖼️</button>

    </div>
  )
}


