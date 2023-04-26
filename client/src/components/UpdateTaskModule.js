import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UpdateTaskModule = ({ client, task, updateTask }) => {

    let taskID = task._id;
    let history = useNavigate();

    const [taskTitle, setTaskTitle] = useState(task.title);
    const [taskDescription, setTaskDescription] = useState(task.description);
    const [taskTime, setTaskTime] = useState(task.time);

    const hours = (Math.floor(taskTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((taskTime / 60000) % 60);
    const seconds = Math.floor((taskTime / 1000) % 60);

    const [formattedHours, setFormattedHours] = useState(hours);
    const [formattedMinutes, setFormattedMinutes] = useState(minutes);
    const [formattedSeconds, setFormattedSeconds] = useState(seconds);

    const editTask = () => {

        let newTime;
        const unformattedHours = parseInt(formattedHours * 3600000);
        const unformattedMinutes = parseInt(formattedMinutes * 60000);
        const unformattedSeconds = parseInt(formattedSeconds * 1000);

        newTime = unformattedHours + unformattedMinutes + unformattedSeconds;

        setTaskTime(newTime);

        let task = {
            title: taskTitle,
            description: taskDescription,
            time: newTime,
            _id: taskID,
            clientID: client._id
        };

        for (let i = 0; i < client.tasks.length; i++) {
            if (client.tasks[i].title === task.title) {
                if (client.tasks[i]._id === task._id) {
                    updateTask(task);
                    history.push(`/client/${client._id}`);
                } else {
                    alert('You already have a task with that title!  Try a new title.');
                    return;
                }
            }
        }
        updateTask(task);
        history.push(`/client/${client._id}`);
    }



    return (
        <div className="addClient_container">
            <div className="addTask_input">
                <label>Task Title: </label>
                <input
                    type='text'
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            <div className="addTask_input">
                <label>Task Description:</label>
                <input
                    type='text'
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>

            <div className="addTask_input">
                <label>Hours:</label>
                <input type="number" value={formattedHours} min="0" max="24" onChange={(e) => { setFormattedHours(e.target.value); }} />

                <label>Minutes:</label>
                <input type="number" value={formattedMinutes} min="0" max="59" onChange={(e) => setFormattedMinutes(e.target.value)} />

                <label>Seconds:</label>
                <input type="number" value={formattedSeconds} min="0" max="59" onChange={(e) => setFormattedSeconds(e.target.value)} />
            </div>
            <button className="button" onClick={() => editTask()}>Update Task</button>

        </div>
    )
}

export default UpdateTaskModule
