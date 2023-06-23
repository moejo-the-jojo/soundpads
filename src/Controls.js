import React from "react";

const Controls = (props) => {
  const handleSoundChange = (event) => {
    props.setVolume(event.target.value);
  };

  const handleSoundReset = () => {
    props.setVolume(0.5);
  };

  const handleSoundMute = () => {
    props.setMuted(!props.muted);
  };

  return (
    <div id="controlsCss">
      <input
        type="range"
        value={props.volume}
        onChange={handleSoundChange}
        min={0}
        max={1}
        step={0.02}
        disabled={props.muted}
      />
      <p>Volume: {Math.trunc(props.volume * 200) + "%"}</p>
      <button
        id="controlVolumeButton"
        disabled={props.muted}
        onClick={handleSoundReset}
      >
        Reset Volume
      </button>
      <button onClick={handleSoundMute}>
        Muted: {props.muted ? "Yes" : "No"}{" "}
      </button>
    </div>
  );
};

export default Controls;
