import React from 'react';
import { useDrag } from 'react-dnd';
import './style.css';

const Task = ({ id, text }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { id, text },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className={`task ${isDragging ? 'is-dragging' : ''}`}
        >
            {text}
        </div>
    );
};

export default Task;