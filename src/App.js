import React from "react";
import Drummachine from "./Drummachine";

const drumSoundSrc = [
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater 1",
    key: "Q",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater 2",
    key: "W",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    name: "Heater 3",
    key: "E",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    name: "Heater 4",
    key: "A",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    name: "Clap",
    key: "S",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    name: "Open-HH",
    key: "D",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    name: "Kick-n'-Hat",
    key: "Z",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "Kick",
    key: "X",
  },
  {
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Closed-HH",
    key: "C",
  },
];

const App = () => {
  const [currentClip, setCurrentClip] = React.useState("");

  const usedKeys = drumSoundSrc.map((a) => a.key);

  let objectPlaying = {};
  for (let key of usedKeys) {
    objectPlaying[key] = false;
  }

  const playClip = (currentAudio, display, key) => {
    currentAudio.play();
    setCurrentClip(display);
    document.getElementById("drum-pad" + key).classList.add("activated");

    if (currentAudio.getAttribute("endedListener") !== "true") {
      currentAudio.setAttribute("endedListener", "true");

      currentAudio.addEventListener("ended", () => {
        if (objectPlaying[key] === true) {
          playClip(currentAudio, display, key);
        }
      });
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const currentKey = event.key.toUpperCase();

      if (usedKeys.includes(currentKey)) {
        const currentAudio = document.getElementById(currentKey);
        const currentDisplay = drumSoundSrc.filter(
          (a) => a.key === currentKey
        )[0].name;

        objectPlaying[currentKey] = true;
        playClip(currentAudio, currentDisplay, currentKey);
      }
    });

    window.addEventListener("keyup", (event) => {
      const currentKey = event.key.toUpperCase();
      if (usedKeys.includes(currentKey)) {
        objectPlaying[currentKey] = false;
        document
          .getElementById("drum-pad" + currentKey)
          .classList.remove("activated");
      }
    });
  }, []);

  return (
    <div id="app">
      <Drummachine
        currentClip={currentClip}
        setCurrentClip={setCurrentClip}
        playClip={playClip}
      />
    </div>
  );
};

export default App;
