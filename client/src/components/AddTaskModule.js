import { useState } from 'react';
import Timer from './Timer';
import { useParams, useNavigate } from 'react-router-dom';

const AddTaskModule = ({ addTask, clients }) => {

  let { _id } = useParams();

  let history = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeWorked, setTimeWorked] = useState(0);
  const [timerIsOn, setTimerIsOn] = useState(false);

  const toggleTimerOn = (toggleState) => {
    setTimerIsOn(toggleState);
  }

  const hoursWorked = (
    '0' +
    (Math.floor(timeWorked / (1000 * 60 * 60)) % 24)
  ).slice(-2);

  const minutesWorked = ('0' + Math.floor((timeWorked / 60000) % 60)).slice(-2);

  const secondsWorked = ('0' + Math.floor((timeWorked / 1000) % 60)).slice(-2);


  //Add the Task
  const addTimeWorked = (e) => {
    setTimeWorked(e);
  };


  const validateData = () => {
    //Validates task title.
    if (title === '' || title === ' ' || title === undefined) {
      alert('Please add a task title!');
      return
    }

    //Validates task description
    if (description === '' || description === ' ' || description === undefined) {
      alert('Please add a task description!');
      return;
    }

    //Validate unique task title name.
    for (let i = 0; i < clients.length; i++) {
      if (clients[i]._id === _id) {
        let client = clients[i];

        for (let j = 0; j < client.tasks.length; j++) {
          if (client.tasks[j].title === title) {
            alert('please enter a unique task title!  You already have a task title with that name.');
            return;
          }
        }
      }
    }


    //passed validation, data is passed to the addTask function in App.js

    history.push(`/client/${_id}`);
    addTask(title, description, timeWorked, _id);
  }


  return (
    <div>
      <div className="addClient_container">
        <div className="addTask_input">
          <label>Task Title: </label>
          <input
            type='text'
            value={title}
            placeholder='enter task title'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="addTask_input">
          <label>Task Description: </label>
          <input
            type='text'
            maxLength='20'
            value={description}
            placeholder='enter task description'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="addTask_input">
          <label>Time Worked: </label>{hoursWorked}:{minutesWorked}:{secondsWorked}
        </div>
      </div>
      <div>

      </div>
      <Timer addTimeWorked={addTimeWorked} toggleTimerOn={toggleTimerOn} />
      <div className="client_page_button_container">
        {timerIsOn &&
          <button className="button" onClick={() => validateData()}>
            Add Task
          </button>}
      </div>

    </div>
  );
};

export default AddTaskModule;
