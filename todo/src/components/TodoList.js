import Todo from "./Todo";
import '../styles/TodoList.css';


const TodoList = ({ todoList, setTodoList, count, setCount, openNotificationWithIcon, api, contextHolder }) => {
    return (
    <div className="todoList">
        {todoList.map((todoItem) => (
        <Todo
            todoItem={todoItem}
            key={todoItem.id}
            count={count}
            setCount={setCount}
            setTodoList={setTodoList}
            todoList={todoList}
            openNotificationWithIcon={openNotificationWithIcon}
            api={api}
            contextHolder={contextHolder}
        ></Todo>
    ))}
 </div>
 );
};


export default TodoList;