import React from "react";
import Drumpad from "./Drumpad";
import Controls from "./Controls";

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

const Display = (props) => {
  const [volume, setVolume] = React.useState(0.5);
  const [muted, setMuted] = React.useState(false);
  const [muteVolume, setMuteVolume] = React.useState(0.5);

  React.useEffect(() => {
    if (muted) {
      setMuteVolume(volume);
      setVolume(0);
    } else {
      setVolume(muteVolume);
    }
  }, [muted]);

  return (
    <div id="display" className="display">
      <div id="outerDisplayCurClip" className="outerDisplayCurClip">
        <div id="innerDisplayCurClip" className="innerDisplayCurClip">
          <strong>{props.currentClip}</strong>
        </div>
      </div>
      <div id="displaySoundButtons" className="displaySoundButtons">
        {drumSoundSrc.map((item) => {
          return (
            <Drumpad
              src={item.src}
              id={item.key}
              key={item.key}
              display={item.name}
              volume={volume}
              playClip={props.playClip}
              muted={muted}
            />
          );
        })}
      </div>
      <div id="displayControls" className="displayControls">
        <Controls
          volume={volume}
          setVolume={setVolume}
          muted={muted}
          setMuted={setMuted}
        />
      </div>
    </div>
  );
};

export default Display;
