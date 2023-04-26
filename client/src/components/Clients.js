import React from 'react';
import ClientListItem from './ClientListItem';
import { Link } from 'react-router-dom'
import DeleteClientButton from './DeleteClientButton'

const Clients = ({ clients, deleteClient }) => {


  return (
    <div>
      {clients.map((client) => (
        <div className="spacing" key={client._id}>
          <div className="client_main_container">
            <Link to={`/client/${client._id}`} className="client_list_text">
              <ClientListItem
                client={client}
                name={client.name}
                tasks={client.tasks}
                _id={client._id}
              ></ClientListItem>
            </Link>
            <DeleteClientButton client={client} deleteClient={deleteClient} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Clients;
