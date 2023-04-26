import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientsPage from './components/pages/ClientsPage';
import ClientPage from './components/pages/ClientPage';
import TaskPage from './components/pages/TaskPage';
import AddTaskPage from './components/pages/AddTaskPage';
import HomePage from './components/pages/HomePage';
import UpdateClientPage from './components/pages/UpdateClientPage';
import './App.css';
import UpdateTaskPage from './components/pages/UpdateTaskPage';


function App() {

  //client state holds user data for distribution throughout the site pages
  const client_get_url = '/clients/'
  const [clients, setClients] = useState([]);

  //Add client info pre-render.  This information is pulled from the database.  The fetchData must be written inside the useEffect hook to function properly.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(client_get_url);
      setClients(request.data);
    }
    fetchData();
  }, [client_get_url]);


  //the fetch data function pulls the list of clients from the database.  This function is often called when the database is updated.
  const fetchClientData = async () => {
    const request = await axios.get(client_get_url);
    setClients(request.data);
  }


  //Function that adds new client.  This function updates the database, and then pulls the new data with the fetchData function from the database.
  const addClient = (client) => {

    //Validate client name.  Checks for empty strings or null or undefined values.
    if (client.name === '' || client.name === undefined || client.name === " ") {
      alert('Please include your clients name!');
      return;
    }
    //Checks that client name doesn't already exist in the clients state array, which is a copy of the clients in the database.
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].name === client.name) {
        alert('Client already exists.  Please add a new client');
        return;
      }
    }

    //If passing validation, the post request is sent to the database with the client info.  A unique clientID (_id) is added in the database.
    //On completion, the fetchClient function is called, which fetches the clients from the database and updates the client state.
    axios.post('/clients/add', client)
      .then(() => {
        alert('client added to database');
        fetchClientData();
      })

  };

  //Function that adds new task to the clients tasks array.
  const addTask = (title, description, time, _id) => {


    //Validation for addTask takes place in the addTaskModule.  This helps prevent a page change unless the data passes validation.

    //newTask is added to the database and the state is updated
    const newTaskWithID = { title: title, description: description, time: time, _id: _id };


    axios.post('/client/task/addtask', newTaskWithID)
      .then(() => {
        alert('task added to database');
        fetchClientData();
      })
  };

  //Function to updateClient
  const updateClient = async (client, newClientName) => {
    const _id = client._id;

    const updatedClient = { name: newClientName, _id: _id };


    await axios.post('/client/:id/updateclient', updatedClient)
      .then(() => {
        fetchClientData();
      })
  }

  //Function to delete Client
  const deleteClient = async (client) => {
    const name = client.name;
    const _id = client._id;

    const deletedClient = { name: name, _id: _id };


    await axios.post('/clients/deleteClient', deletedClient)
      .then(() => {
        alert('client deleted')
        fetchClientData();
      })

  }

  //Functon to delete Task
  const deleteTask = async (task) => {

    const deletedTask = {
      clientID: task.clientID,
      title: task.title,
      description: task.description,
      time: task.time,
      _id: task._id
    }

    await axios.post('/client/:id/task/:taskID/deleteTask', deletedTask)
      .then(() => {
        alert('task deleted')
        fetchClientData();
      })

  }

  //Function to update Task
  const updateTask = async (updatedTask) => {

    await axios.post('/client/:id/task/:taskID/updateTask', updatedTask)
      .then(() => {
        alert('task updated')
        fetchClientData();
      })
  }

  //React router is used to determine where the user is on the page.  unique ids are used in the URL to navigate clients and tasks.  
  return (
    <div className="app_main_container">
      <Header />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage />
            )}
          />

          <Route
            exact
            path="/clients"
            render={props => (
              <ClientsPage
                onAdd={addClient}
                clients={clients}
                deleteClient={deleteClient}
              />
            )}
          />
          <Route
            exact
            path="/client/:_id"
            render={props => (

              <ClientPage
                clients={clients}
                deleteTask={deleteTask}
              />
            )}
          />

          <Route
            exact
            path="/client/:_id/updateClient"
            render={props => (

              <UpdateClientPage
                clients={clients}
                updateClient={updateClient}
              />
            )}
          />

          <Route
            exact
            path="/client/:_id/task/:taskID"
            render={props => (
              <TaskPage
                clients={clients}
              />
            )} />

          <Route
            exact
            path="/client/:_id/task/:taskID/updateTask"
            render={props => (
              <UpdateTaskPage
                clients={clients}
                updateTask={updateTask}
              />
            )} />

          <Route
            exact
            path="/client/:_id/addtask"
            render={props => (
              <AddTaskPage
                clients={clients}
                addTask={addTask}
              />
            )} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
