import React from 'react';

const Task = ({ title, description, time }) => {

  //convert { time } to HH:MM:SS
  let hoursWorked = ('0' + (Math.floor(time / (1000 * 60 * 60)) % 24)).slice(-2);
  let minutesWorked = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  let secondsWorked = ('0' + Math.floor((time / 1000) % 60)).slice(-2);

  return (
    <div className="client_container">
      <h3 className="client_list_text">Name : {title}</h3>
      <h3 className="client_list_text">Description: {description}</h3>
      <h3 className="client_list_text">Time Spent: {hoursWorked}:{minutesWorked}:{secondsWorked}</h3>
    </div>
  );
};

export default Task;
