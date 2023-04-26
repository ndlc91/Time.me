import React, { Fragment } from 'react';
import AddClient from '../AddClient';
import Clients from '../Clients';

const ClientsPage = ({ onAdd, clients, deleteClient }) => {


    return (
        <Fragment>
            <AddClient onAdd={onAdd} />
            <Clients clients={clients} deleteClient={deleteClient} />

        </Fragment>
    )
}


export default ClientsPage;

