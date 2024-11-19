import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
