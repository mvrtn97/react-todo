import Header from "./components/Header";
import Form from "./components/Form";
import { useState } from 'react';
import TodoList from "./components/TodoList";
import React from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';


function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState({});
  const [api, contextHolder] = notification.useNotification();


const openNotificationWithIcon = (message, description) => {
  api.open({
    message: message,
    description: description,
    placement: "bottomLeft",
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};


  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        count={count}
        setCount={setCount}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        openNotificationWithIcon={openNotificationWithIcon}
        api={api}
        contextHolder={contextHolder}
      />
      <TodoList
        setTodoList={setTodoList}
        todoList={todoList}
        count={count}
        setCount={setCount}
        openNotificationWithIcon={openNotificationWithIcon}
        api={api}
        contextHolder={contextHolder}
      />
    </div>
  );
}


export default App;

