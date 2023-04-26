import React from 'react'

const DeleteClientButton = ({ client, deleteClient }) => {



    return (
        <div>
            <button className="delete_button" onClick={() => deleteClient(client)}>Delete Client</button>
        </div>
    )
}

export default DeleteClientButton
