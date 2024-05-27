import React, { useState } from 'react';
import { DatePicker, message } from 'antd';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [dueDate, setDueDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !dueDate) {
            message.error('请输入任务名称和选择截止时间');
            return;
        }
        addTodo({ task: value, dueDate: dueDate });
        setValue('');
        setDueDate(null);
    };

    return (
        <div className='ToDoForm'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input
                        type='text'
                        className='todo-input'
                        value={value}
                        placeholder='输入任务名称'
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <div className='btn-date-container'>
                    <div className='date-picker-container'>
                        <DatePicker
                            className='due-date-picker'
                            value={dueDate}
                            onChange={(date) => setDueDate(date)}
                            placeholder="选择截止时间"
                        />
                    </div>
                    <div className='btn-container'>
                        <button type='submit' className='todo-btn'>添加</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
