import ListItem from "./ListItem";

const List = (props) => {
  const list = props.list
  return (
    <ul className="list-item">
      {list.map(t=> {
        return <ListItem key={t._id} id={t._id} isDone={!t.isDone} title={t.title} list={list} renderTasks={props.renderTasks}/>
      })}
    </ul>
  );
};

export default List;