import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';



const ShowUpdateClientButton = () => {

    let { _id } = useParams();


    return (
        <div>
            <Link to={`/client/${_id}/updateClient`} className="client_list_text">
                <button className="button">Update Client</button>
            </Link>
        </div>
    )
}

export default ShowUpdateClientButton
