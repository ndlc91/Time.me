import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


const AddClient = ({ onAdd }) => {
  const [name, setName] = useState('');

  // Validates form info, if passes validation calls addClient function(App.js), which adds client to the clients array of objects
  const onClick = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please enter a client name');
      return;
    }

    const clientID = uuid();
    const time = 0;
    const tasks = [];

    onAdd({ clientID, name, time, tasks });
  };

  return (
    <div className="addClient_container">
      <h3 className="addClient_description">Add a client to get started, or click on an existing client to manage tasks</h3>
      <label>Client Name:</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button className="button" onClick={onClick}>Add Client</button>
    </div>
  );
};

export default AddClient;
