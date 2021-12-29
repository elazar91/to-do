import axios from 'axios';


const TaskForm = (props) => {

  function sendTask(e){
    e.preventDefault();
    const data = e.target.title.value
    axios.post('http://localhost:3030/task', {title:data})
    .then(() => {
      props.renderTasks()
    })
  }

  return (
    <form className="form" onSubmit={sendTask}>
      <input name='title' type="text" className="input" placeholder="Add a task here.." />
      <input type="submit" className="input-button" value="+" />
    </form>
  );
};

export default TaskForm;