import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import '../App.css'; // 引用 App.css

const Todo = ({ task, toggleComplete, deleteTodo }) => {
    const isOverdue = moment(task.dueDate).isBefore(moment(), 'day') && !task.completed;

    return (
        <div className={`Todo ${isOverdue ? 'overdue' : ''}`}>
            <div className="task-container">
                <p className={`task-text ${task.completed ? 'completed' : ''}`}>
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? '#888' : isOverdue ? 'red' : 'inherit',
                        }}
                    >
                        {task.task}
                    </span>
                </p>
                {task.dueDate && (
                    <p className={`due-date ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
                        Due: <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{moment(task.dueDate).format('YYYY-MM-DD')}</span>
                    </p>
                )}
            </div>
            <div className="icons">
                <Checkbox
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

Todo.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        task: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        dueDate: PropTypes.instanceOf(Date),
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
