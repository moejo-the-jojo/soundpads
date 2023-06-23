import React from "react";

const Drumpad = (props) => {
  React.useEffect(() => {
    document.getElementById(props.id).volume = props.volume;
  }, [props.volume]);

  React.useEffect(() => {
    document
      .getElementById("drum-pad" + props.id)
      .addEventListener("click", () => {
        props.playClip(props.id, props.display);
      });
  }, []);

  return (
    <div className="drum-pad" id={"drum-pad" + props.id}>
      <audio id={props.id} src={props.src} className="clip"></audio>
      <div className="drum-pad-text" style={{ cursor: "default" }}>
        <strong>{props.id}</strong>
      </div>
    </div>
  );
};

export default Drumpad;
