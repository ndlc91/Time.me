import { useState, useEffect } from 'react';

const Timer = ({ addTimeWorked, toggleTimerOn }) => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    addTimeWorked(time);
    return () => clearInterval(interval);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerOn]);


  const firstStart = () => {
    setTimerOn(true);
  }

  const stopTimer = () => {
    setTimerOn(false);
    toggleTimerOn(true);
  }

  const startTimer = () => {
    setTimerOn(true);
    toggleTimerOn(false);
  }

  return (
    <div className='timers'>
      <h2>Stopwatch</h2>
      <div className="timer_text">
        <span>
          {('0' + (Math.floor(time / (1000 * 60 * 60)) % 24)).slice(-2)}:
        </span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      <div id='buttons'>
        {!timerOn && time === 0 && (
          <button className="button" onClick={() => firstStart()}>Start</button>
        )}
        {timerOn && <button className="button" onClick={() => stopTimer()}>Stop</button>}
        {!timerOn && time > 0 && (
          <button className="button" onClick={() => startTimer()}>Resume</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
