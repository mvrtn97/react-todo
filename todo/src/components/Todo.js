import { useState } from 'react';
import '../styles/Todo.css';
import { Modal } from 'antd';
import moment from 'moment';
const Todo = ({ todoItem,  openNotificationWithIcon, todoList, setTodoList, setCount, count }) => {


    const [name, setName] = useState(todoItem.name);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const deleteHandler = () => {
        if(todoList.length > 0){
            setTodoList(todoList.filter(item => item.id !== todoItem.id));
            setCount(count - 1);
            openNotificationWithIcon('Notification!', 'The task has been deleted');
            handleCancel();
        }
    };
 
    const showModal = () => {
        setIsModalOpen(true);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const editHandler = () => {
        const newTask = prompt("Enter new task: ");
        if(newTask) {
            setName(newTask);
            openNotificationWithIcon('Notification!', 'The task has been edited');
        }
    };


    return(
    <>
    <div className='todo'>
        <h3 className='itemHeader'>{name}</h3>
        <div className='buttons'>        
            <h4 className='date'>end: {moment(todoItem.itemDate).format('DD/MM/YYYY')}</h4>
            <button onClick={() => showModal()} className='delBtn'>-</button>
            <button onClick={editHandler} className='editBtn'>edit</button>
        </div>
    </div>
    <Modal title="Are you sure?" open={isModalOpen} onOk={deleteHandler} onCancel={handleCancel} okText='Delete' className='deleteModal'>
            <p>Do you really want to delete this task?</p>
            <p>This process cannot be undone.</p>
    </Modal>
    </>
 );
};


export default Todo;
