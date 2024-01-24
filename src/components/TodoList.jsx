const TodoList = ({ tareas }) => {

    const nuevaTarea = tareas.map((tarea, index) => {
        return <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
        >{tarea} </li>;
    });

    return (
        <ul className="list-group">
            {nuevaTarea}
        </ul>
    );
}
export default TodoList