import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from './components/TaskList';
import './components/style.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', block: 'Unplanned' },
    { id: 2, text: 'Task 2', block: 'Unplanned' },
    { id: 3, text: 'Task 3', block: 'Unplanned' },
     { id: 4, text: 'Task 4', block: 'Unplanned' },
    // Add more tasks as needed
  ]);

  const blocks = ['Today', 'Tomorrow', 'This Week', 'Next Week', 'Unplanned'];

  const moveTask = (id, targetBlock) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, block: targetBlock } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        {blocks.map((block) => (
          <TaskList
            key={block}
            tasks={tasks.filter((task) => task.block === block)}
            block={block}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;