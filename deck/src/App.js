// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  // variable m --> the SHUFFLED deck. Suppose it's got 23 cards.
  // We will use REACT to render the 0th card. Clicking the BUTTON will do m.shift();
  // which in turn will force REACT to render what is (was, originally) the *first* card.
  // then second, then third etc.

  let deck = [];
  let gifs = {
    "PUSH-UP": "https://media.tenor.com/gI-8qCUEko8AAAAM/pushup.gif",
    "FLUTTER KICK":
      "https://i.pinimg.com/originals/26/a7/50/26a750b15b8e6f3b05976b406d52f7b1.gif",
    "OVERHEAD PRESS":
      "https://thumbs.gfycat.com/ElaborateParallelBrownbear-size_restricted.gif",
    "PULL-UP": "https://i.makeagif.com/media/7-07-2014/jZWVDi.gif",
    "50-METER DASH":
      "https://i.pinimg.com/originals/fc/b8/bd/fcb8bd2b7cb3f0f81ab72b2b8634341c.gif",
  };
  let m = [];
  const x = [
    "PUSH-UP",
    "FLUTTER KICK",
    "OVERHEAD PRESS",
    "PULL-UP",
    "50-METER DASH",
  ];
  for (let c = 0; c < x.length; c++) {
    for (let j = 5; j <= 7; j++) {
      deck.push([j, x[c]]);
    }
  } // DECK CREATED. NOW, TIME TO SHUFFLE IT:
  while (deck.length) {
    let t = deck.length;
    let rando = Math.floor(Math.random() * t);
    m.push(deck[rando]);
    deck = deck.slice(0, rando).concat(deck.slice(rando + 1));
  }
  const [card, setCard] = useState(0);
  const [cards, setCards] = useState(m);
  const [active, setActive] = useState(true);

  return (
    <div className="App">
      <h1>
        WELCOME TO SESAME'S HOUSE OF PAIN. LET'S GET THESE CARDS.<br></br>
      </h1>
      <h3>
        We are currently <u>hard-coded</u> for push-up, flutter kick, overhead
        press, pull-up and 50-meter dash.
      </h3>
      <br></br>
      {active === true ? (
        <button
          type="button"
          onClick={() => {
            setCard(card + 1);
            console.log("variable CARDS =", cards);
            if (card === cards.length - 1) {
              setActive(false);
            }
          }}
          disabled={card === cards.length}
        >
          HIT IT.
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            setCard(0);
            setActive(true);
          }}
        >
          Restart the same deck
        </button>
      )}
      {cards && cards.length && card < cards.length ? (
        <div>
          <div>{cards[card][0]}</div>
          <div>
            <img src={gifs[cards[card][1]]} alt="wheee!"></img>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://www.yardbarker.com/media/9/5/951627665723b40dbe177fef331643e26adcd013/600_wide/Novak_Djokovic.jpg"
            alt="yahoo!"
          ></img>
        </div>
      )}
    </div>
  );
}

export default App;
