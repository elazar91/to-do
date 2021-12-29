import axios from "axios";

const ListItem = (props) => {

  const id = props.id
  let isDone = !props.isDone

  function deleteItem(id){
    axios.delete(`http://localhost:3030/task/${id}`)
      .then(result => {
        props.renderTasks()
      })
  }

   function toglleCheckbox(){
    isDone = !isDone
    axios.put(`http://localhost:3030/task/${id}`, {isDone: isDone})
      .then(result => {
        props.renderTasks()
      })
  }

  let done = <button className='button' onClick={() => deleteItem(id)}>x</button>
  return (
    <li className='item'>
      <div className='item-title'>{props.title}</div>
      <div>
      <input type="checkbox" defaultChecked={!isDone}  onChange={toglleCheckbox}/>
      {isDone ? done : null}
      </div>
    </li>
  );
};

export default ListItem;