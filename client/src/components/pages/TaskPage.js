import React from 'react';
import Task from '../Task';
import { useParams } from 'react-router';
import BackButton from '../BackButton';
import ShowUpdateTaskButton from '../ShowUpdateTaskButton'


const TaskPage = ({ clients }) => {
    let { _id } = useParams();

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
        <>
            <Task
                title={task.title}
                description={task.description}
                time={task.time}
            />
            <div className="client_page_button_container">
                <ShowUpdateTaskButton />
                <BackButton />
            </div>

        </>
    )
}

export default TaskPage
