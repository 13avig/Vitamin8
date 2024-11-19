import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item text-center">No tasks available</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;