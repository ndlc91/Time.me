import React from 'react'
import AddTaskModule from '../AddTaskModule';
import { Link, useParams } from 'react-router-dom';


const AddTaskPage = ({ addTask, clients }) => {

    let { _id } = useParams();

    return (
        <>
            <AddTaskModule addTask={addTask} clients={clients} />
            <Link className="client_list_text" to={`/client/${_id}`}>
                <div className="client_page_button_container">
                    <button className="button">Back to Task List</button></div>
            </Link>
        </>
    )
}

export default AddTaskPage
