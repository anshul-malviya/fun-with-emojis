import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "☺️": "Smiling Face",
  "😉": "Winking Face",
  "🤩": "Star-Struck",
  "🥲": "Smiling Face with Tear",
  "😛": "Face with Tongue",
  "🤔": "Thinking Face",
  "😏": "Smirking Face",
  "🙄": "Face with Rolling Eyes",
  "😭": "Loudly Crying Face",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "👌": "OK Hand",
  "👈": "Backhand Index Pointing Left",
  "👉": "Backhand Index Pointing Right",
  "👆": "Backhand Index Pointing Up",
  "🖕": "Middle Finger",
  "👇": "Backhand Index Pointing Down",
  "☝️": "Index Pointing Up",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "🤛": "Left-Facing Fist",
  "🤜": "Right-Facing Fist",
  "👏": "Clapping Hands",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up Together",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "✍️": "Writing Hand"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputEmoji, setInputEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database";
    }

    setInputEmoji(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setInputEmoji(meaning);
  }

  return (
    <div className="App">
      <h1> inside outt!</h1>
      <input onChange={emojiInputHandler} />

      <div style={{ padding: "1rem", fontWeight: "bold" }}>{inputEmoji}</div>

      <h3> Emoji We Know </h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: ".3rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
