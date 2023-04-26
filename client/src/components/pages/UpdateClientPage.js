import React from 'react'
import UpdateClientModule from '../UpdateClientModule'
import { useParams } from 'react-router';


const UpdateClientPage = ({ clients, updateClient }) => {

    let { _id } = useParams();

    let client;


    for (let i = 0; i < clients.length; i++) {
        if (clients[i]._id === _id) {
            client = clients[i];
        }
    }

    return (
        <div>
            <UpdateClientModule
                clients={clients}
                client={client}
                updateClient={updateClient}
            />
        </div>
    )
}

export default UpdateClientPage
