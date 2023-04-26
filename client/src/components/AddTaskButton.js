import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AddTaskButton = () => {

    let { _id } = useParams();



    return (
        <>
            <Link className="client_list_text" to={`/client/${_id}/addTask`}>
                <button className="button">Add Task</button>
            </Link>
        </>
    )
}

export default AddTaskButton
