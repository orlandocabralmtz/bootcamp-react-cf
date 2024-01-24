import { useState } from "react"
import TodoItem from "./TodoItem"


const AddTask = () => {

    const [listaTareas, setListaTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("")

    const handleInputChange = (e) => {
        setNuevaTarea(e.target.value)
    }

    const handleSubmit = () => {

        if (nuevaTarea < 3) {
            console.log("Tamaño insuficionete")
        } else {

            setListaTareas([...listaTareas, nuevaTarea]) //* agrega una tarea al array de listaTareas
            setNuevaTarea("") //* limpia el input
            document.getElementById("inputTarea").value = "";

        }
    }


    return (
        <>
            <div className="container text-center">
                <h1> To do list</h1>
                <div className="d-flex">
                    <input
                        id="inputTarea"
                        type="text"
                        placeholder="Ingrese una tarea"
                        onChange={handleInputChange}
                        className="form-control me-2"
                    />
                    <button onClick={handleSubmit}
                        className="btn btn-primary "
                    >
                        Agregar

                    </button>

                </div>
                <TodoItem listaTareas={listaTareas} />


            </div>
        </>
    )
}
export default AddTask