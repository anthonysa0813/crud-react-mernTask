import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareasContext from "../../context/tareas/tareasContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const tareasByProyectos = useContext(TareasContext);
  const { tareasproyectos } = tareasByProyectos;
  console.log(tareasproyectos);
  const { proyecto, eliminarProyecto } = proyectosContext;

  if (!proyecto) return <h2>Seleccione un proyecto</h2>;

  const [proyectoActual] = proyecto;

  const tareasProyect = [];
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyectos.length === 0 ? (
          <li>
            <p>No hay tarea</p>
          </li>
        ) : (
          tareasproyectos.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
