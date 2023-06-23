import React from "react";
import Display from "./Display";

const Drummachine = (props) => {
  return (
    <div id="drum-machine">
      <Display currentClip={props.currentClip} playClip={props.playClip} />
    </div>
  );
};

export default Drummachine;
