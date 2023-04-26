import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import TaskListItem from './TaskListItem';
import DeleteTaskButton from './DeleteTaskButton';


const ClientTask = ({ tasks, deleteTask, client }) => {

  let { _id } = useParams();

  let clientID = client._id;


  return (
    <>
      <h3 className="center_text">Tasks</h3>
      {tasks.map((task) => (
        <div className="spacing" key={task._id}>
          <div className="client_main_container">
            <Link className="client_list_text" to={`/client/${_id}/task/${task._id}`} key={task._id}>
              <TaskListItem
                title={task.title}
                description={task.description}
                time={task.time}
                taskID={task.taskID}
              />
            </Link>
            <DeleteTaskButton
              title={task.title}
              description={task.description}
              time={task.time}
              taskID={task._id}
              clientID={clientID}
              deleteTask={deleteTask} />
          </div>
        </div>

      ))}
    </>
  )
}

export default ClientTask
