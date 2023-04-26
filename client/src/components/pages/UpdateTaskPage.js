import React from 'react'
import UpdateTaskModule from '../UpdateTaskModule'
import { useParams } from 'react-router';

const UpdateTaskPage = ({ clients, updateTask }) => {

    let { _id } = useParams();
    console.log(_id);

    let { taskID } = useParams();
    let client;
    let task;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i]._id === _id) {
            client = clients[i];
        }
    }

    for (let i = 0; i < client.tasks.length; i++) {
        if (client.tasks[i]._id === taskID) {
            task = client.tasks[i];
        }
    }

    return (
        <div>
            <UpdateTaskModule client={client} task={task} updateTask={updateTask} />
        </div>
    )
}

export default UpdateTaskPage
