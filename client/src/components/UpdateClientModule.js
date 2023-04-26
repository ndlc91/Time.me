import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const UpdateClientModule = ({ client, updateClient, clients }) => {

    const [clientName, setClientName] = useState(client.name);

    let history = useNavigate();


    const validateData = () => {
        //checks for empty string
        if (clientName === '' || clientName === undefined || clientName === " ") {
            alert('Please include your clients name!');
            return;
        }

        //Checks that client name doesn't already exist in the clients state array, which is a copy of the clients in the database.
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].name === clientName) {
                //accepts the same client name if the client _id is the same.  i.e, renaming the client the same name as before is allowed.
                if (clients[i]._id === client._id) {
                    history.push(`/client/${client._id}`);
                    updateClient(client, clientName);
                    return;
                } else {
                    alert('Client already exists.  Please add a new client');
                    return;
                }
            }
        }

        history.push(`/client/${client._id}`);
        updateClient(client, clientName);
    }


    return (
        <div>
            <div className="addClient_container">
                <label className="addClient_description">Client Name:</label>
                <input
                    type='text'
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
            </div>
            <div className="client_page_button_container">
                <button
                    className="button"
                    onClick={() => validateData()}>Update Client</button>
                <BackButton />
            </div>
        </div>

    )
}

export default UpdateClientModule
