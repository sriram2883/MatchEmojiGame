import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

function Timer({ props }) {
  const { emojislist, setEmojisList , setSteps,setMinSteps,steps,minSteps,matchedCards,setMatchedCards,mainEmojislist,resetTime,startTimer , time,setTime,intervalRef} = props;
  const setLeastSteps = () => {
    if (steps < minSteps) {
      setMinSteps(steps);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="Timing">
      <div className="buttons">
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={resetTime}>Reset Timer</button>
      </div>
      <div className="Time">
        <h5>~TimeLeft~ {time}</h5>
      </div>
    </div>
  );
}

export default Timer;
