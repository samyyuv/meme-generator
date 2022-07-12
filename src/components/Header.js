import React from "react";

export default function Header() {
  return (
    <nav className="header">
      <img src={require("../images/meme.png")} />
      <h1 className='logo-name'>Meme Generator</h1>
    </nav>
  )
}