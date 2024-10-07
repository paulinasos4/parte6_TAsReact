import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      if (editingTaskIndex !== null) {
        // Editando una tarea existente
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = newTask;
        setTasks(updatedTasks);
        setEditingTaskIndex(null);
      } else {
        // Agregando una nueva tarea
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setNewTask(tasks[index]);
    setEditingTaskIndex(index);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Agregar tarea"
        />
        <button type="submit">{editingTaskIndex !== null ? "Guardar" : "Agregar"}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;