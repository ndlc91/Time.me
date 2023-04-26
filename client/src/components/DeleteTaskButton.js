import React from 'react'

const DeleteTaskButton = ({ title, description, time, taskID, clientID, deleteTask }) => {

    const deletedTask = {
        title: title,
        description: description,
        time: time,
        _id: taskID,
        clientID: clientID
    }



    return (
        <div>
            <button className="delete_button" onClick={() => deleteTask(deletedTask)}>Delete Task</button>
        </div>
    )
}

export default DeleteTaskButton
