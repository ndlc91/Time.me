import React from 'react';

const Client = ({ name, client }) => {

  let time = 0;

  if (client.tasks.length > 0) {
    for (let i = 0; i < client.tasks.length; i++) {
      time += client.tasks[i].time;
    }
  }

  const hoursWorked = (
    '0' +
    (Math.floor(time / (1000 * 60 * 60)) % 24)
  ).slice(-2);

  const minutesWorked = ('0' + Math.floor((time / 60000) % 60)).slice(-2);

  const secondsWorked = ('0' + Math.floor((time / 1000) % 60)).slice(-2);



  return (
    <div>
      <div className="client_container">
        <h3 className="client_text">{name}</h3>
        <div>
          <h3 className="client_text">Total Time Worked:</h3>
          <h3 className="client_text">{hoursWorked}:{minutesWorked}:{secondsWorked}</h3>
        </div>
      </div>
    </div>
  );
};

export default Client;
