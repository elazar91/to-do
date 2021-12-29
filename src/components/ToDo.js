import { useEffect, useState } from "react";
import List from "./List";
import TaskForm from "./TaskForm";
import Title from './Title'
import axios from "axios";

const ToDo = () => {

  const [tasksList, setTasksList] = useState([])
  useEffect(getTasks, [])

  function getTasks(){
    axios.get('http://localhost:3030/task/')
      .then(result => {
        setTasksList(result.data)})
  }

  return (
    <div className="to-do">
      <Title />
      <TaskForm renderTasks={getTasks}/>
      <List list={tasksList.filter(t => t.isDone)} renderTasks={getTasks}/>
      <div className="line"></div>
      <List list={tasksList.filter(t => !t.isDone)} renderTasks={getTasks}/>
    </div>
  );
};

export default ToDo;