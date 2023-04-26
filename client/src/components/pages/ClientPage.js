import React from 'react';
import Client from '../Client';
import { useParams } from 'react-router';
import ClientTask from '../ClientTask';
import BackButton from '../BackButton';
import AddTaskButton from '../AddTaskButton';
import ShowUpdateClientButton from '../ShowUpdateClientButton';

const ClientPage = ({ clients, onAdd, deleteTask }) => {

    let { _id } = useParams();

    let client;


    for (let i = 0; i < clients.length; i++) {
        if (clients[i]._id === _id) {
            client = clients[i];
        }
    }

    return (
        <>
            <Client
                name={client.name}
                client={client}
            />
            <h3 className="addClient_description">Add a task, or click on a task to update it!</h3>
            <div className="client_page_button_container">
                <ShowUpdateClientButton />
                <AddTaskButton />
                <BackButton />
            </div>
            <ClientTask
                client={client}
                deleteTask={deleteTask}
                tasks={client.tasks}
            />

        </>
    )
}

export default ClientPage
