import React, { useState } from 'react';
import { message } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoForm from './TodoForm';
import '../App.css';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.task || !todo.dueDate) {
            message.error('请输入任务名称和截止时间');
            return;
        }
        setTodos([...todos, { id: uuidv4(), task: todo.task, dueDate: todo.dueDate.toDate(), completed: false }]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className='TodoWrapper'>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <div className="todos-container">
                {todos.map((todo) => (
                    <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                ))}
            </div>
        </div>
    );
};

export default TodoWrapper;
