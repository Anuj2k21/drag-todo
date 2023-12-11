import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';
import './style.css';

const TaskList = ({ tasks, block, moveTask }) => {
    const [, drop] = useDrop({
        accept: 'TASK',
        drop: (item) => moveTask(item.id, block),
    });

    return (
        <div className={`task-list ${block === 'Unplanned' ? 'unplanned' : ''}`} ref={drop}>
            <h3>{block}</h3>
            {tasks.map((task) => (
                <Task key={task.id} id={task.id} text={task.text} />
            ))}
        </div>
    );
};

export default TaskList;