import React from "react";
import Controls from "./Controls";

const Drummachine = (props) => {
  return (
    <div id="drum-machine">
      <Display currentClip={props.currentClip} playClip={props.playClip} />
    </div>
  );
};

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

export default Drummachine;
