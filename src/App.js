import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "βΊοΈ": "Smiling Face",
  "π": "Winking Face",
  "π€©": "Star-Struck",
  "π₯²": "Smiling Face with Tear",
  "π": "Face with Tongue",
  "π€": "Thinking Face",
  "π": "Smirking Face",
  "π": "Face with Rolling Eyes",
  "π­": "Loudly Crying Face",
  "π‘": "Pouting Face",
  "π ": "Angry Face",
  "π": "OK Hand",
  "π": "Backhand Index Pointing Left",
  "π": "Backhand Index Pointing Right",
  "π": "Backhand Index Pointing Up",
  "π": "Middle Finger",
  "π": "Backhand Index Pointing Down",
  "βοΈ": "Index Pointing Up",
  "π": "Thumbs Up",
  "π": "Thumbs Down",
  "β": "Raised Fist",
  "π": "Oncoming Fist",
  "π€": "Left-Facing Fist",
  "π€": "Right-Facing Fist",
  "π": "Clapping Hands",
  "π": "Raising Hands",
  "π": "Open Hands",
  "π€²": "Palms Up Together",
  "π€": "Handshake",
  "π": "Folded Hands",
  "βοΈ": "Writing Hand"
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
