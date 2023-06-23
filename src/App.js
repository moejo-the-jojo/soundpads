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

  const playClip = (audio, display) => {
    const currentClip = document.getElementById(audio);
    const currentDisplay = document.getElementById("drum-pad" + audio);
    currentClip.play();
    setCurrentClip(display);
    currentDisplay.classList.add("activated");
  };

  React.useEffect(() => {
    const usedKeys = drumSoundSrc.map((a) => a.key);

    let objectPlaying = {};
    for (let key of usedKeys) {
      objectPlaying[key] = false;
    }

    window.addEventListener("keydown", (event) => {
      const currentKey = event.key.toUpperCase();
      const currentObject = drumSoundSrc.filter((a) => a.key === currentKey);

      if (usedKeys.includes(currentKey)) {
        document.getElementById(currentKey).loop = true;
        playClip(currentKey, currentObject[0].name);
      }
    });

    window.addEventListener("keyup", (event) => {
      const currentKey = event.key.toUpperCase();
      if (usedKeys.includes(currentKey)) {
        document.getElementById(currentKey).loop = false;
      }
    });
    /*
      if (usedKeys.includes(currentKey)) {
       if(document.getElementById(currentKey).loop == false) { 
        const currentObject = drumSoundSrc.filter((a) => a.key == currentKey);
        objectPlaying[currentKey] = true;
        const currentAudioPad = document.getElementById(currentKey);
        currentAudioPad.loop = true;
        playClip(currentKey, currentObject[0].name);
        
        globalThis.personalTik = setInterval(() => {
          console.time("isItLong?")
          for(let key in objectPlaying) {
            if(objectPlaying[key] == false) {
              document.getElementById(key).loop = false;
            }
          }
          console.timeEnd("isItLong?")
        }, 100);
      } else {
        return;
      }
      }
    });
    */
    /*
    window.addEventListener("keyup", (event) => {
      const newCurrentKey = event.key.toUpperCase();
      if (usedKeys.includes(newCurrentKey)) {
        objectPlaying[newCurrentKey] = false;
        //clearInterval(globalThis.personalTik);
      }
    });
    */
    /*
    window.addEventListener("keydown", (event) => {
      const audioPad = event.key.toUpperCase();
      const neededDisplay = drumSoundSrc.filter((a) => a.key == audioPad); // ??????
      if (usedKeys.includes(audioPad)) {
        const thisPad = document.getElementById(audioPad);
        thisPad.loop = true;
        playClip(audioPad, neededDisplay[0].name)
      }
    })
    */

    /*
    window.addEventListener("keydown", (event) => {
      const audiopad = event.key.toUpperCase();
      const neededDisplay = drumSoundSrc.filter((a) => a.key == audiopad);
      if (usedKeys.includes(audiopad)) {
        const thisPad = document.getElementById(audiopad);
        const fullDuration = thisPad.maxTime;
        console.log(fullDuration);
        globalThis.replayAudioClip = setInterval(playClip(audiopad, neededDisplay[0].name), fullDuration);
        //document.getElementById(audiopad).loop = true;
        //playClip(audiopad, neededDisplay[0].name);
      }
    });    
    for(let audiopad of usedKeys) {
      window.addEventListener("keyup", (event) => {
        if (event.key.toUpperCase() == audiopad) {
          const myPad = document.getElementById(audiopad);
          clearInterval(globalThis.replayAudioClip);
    */

    /*const maxTime = myPad.duration;          
          if(myPad.currentTime == maxTime) {
          myPad.loop = false;
          myPad.pause();
          myPad.currentTime = 0;
          }
        }
      })  
    }
        */

    /*
    window.addEventListener("keyup", (event) => {
        const wantedElement = 
        for (let audiopad of usedKeys) {
          document.getElementById(audiopad).loop = false;
        }
      }
    )
    */
    for (let audiopad of usedKeys) {
      document.getElementById(audiopad).addEventListener("ended", () => {
        document
          .getElementById("drum-pad" + audiopad)
          .classList.remove("activated");
      });
    }
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
