import '../styles/Form.css';
import shortid from 'shortid';
import { DatePicker } from "antd";
import 'antd/dist/reset.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import React from 'react';




const Form = ({ todo, setTodo, setTodoList, setCount, todoList, count, selectedDate, contextHolder, openNotificationWithIcon }) => {


    const [dateSave, setDateSave] = useState();


    const changeHandler = (event) => {
        setTodo(event.target.value);
    };
   
    let todoItem = {name: todo, id: shortid.generate(), isDisplayed: false, itemDate: dateSave};


    const submitHandler = (event) => {
        event.preventDefault();
       
        if(todo.trim().length !== 0){
            setTodoList([...todoList, todoItem]);
            setTodo('');
            setCount(count + 1);
            openNotificationWithIcon('Notification!', 'The task has been added');
            setDateSave('');
        } else {
            alert('Empty field, please enter the task!');
        }
    };


    const disabledDate = (current) => {
        return current && current < dayjs().endOf('day');
      };


    return (
        <div className="formDiv">
            <div className='counter'>Tasks: {count}</div>
            <form className='form'>
                <DatePicker
                    placeholder='Select deadline'
                    className='datePicker'
                    value={selectedDate[todoItem.itemDate]}
                    onChange={(date) => setDateSave(date.$d.toString())}
                    disabledDate={disabledDate}/>
                <input
                    value={todo}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Enter the task here"
                    className="formInput"
                    ></input>
                {contextHolder}
                <button
                    type="submit"
                    onClick={submitHandler}
                    className="subBtn"
                    >Add
                </button>
            </form>
        </div>
    );
};


export default Form;