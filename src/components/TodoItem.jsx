import TodoList from "./TodoList"



const TodoItem = ({listaTareas}) => {

    // const tareas = ["Tarea 1", "Tarea 2", "Tarea 3"]




    return (
        <>
           
            <hr />
            <h2>Lista de tareas</h2>

            <TodoList tareas = {listaTareas}/>

            {/*             
            <TodoList tareas={tareas} /> */}
        </>
    )
}
export default TodoItem