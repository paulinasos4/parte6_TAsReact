import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Agregar tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} 
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
