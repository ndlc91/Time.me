import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowUpdateTaskButton = () => {

    let { _id } = useParams();
    let { taskID } = useParams();


    return (
        <div>
            <Link to={`/client/${_id}/task/${taskID}/updateTask`} className="client_list_text">
                <button className="button">Update Task</button>
            </Link>
        </div>
    )
}

export default ShowUpdateTaskButton;