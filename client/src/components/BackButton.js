import React from 'react'
import { Link } from 'react-router-dom'


const BackButton = () => {
    return (
        <Link to={'/clients'} className="client_list_text">
            <button className="button">Back to Clients List</button>
        </Link>
    )
}

export default BackButton
