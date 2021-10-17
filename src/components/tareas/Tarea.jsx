import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareasContext from "../../context/tareas/tareasContext";

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(TareasContext);
  const proyectoConxt = useContext(proyectoContext);
  const {
    eliminarTarea,
    obtenerTareas,
    cambiarEstadoTarea,
    tareaSeleccionada,
    tareaActual,
  } = tareasContext;
  const { proyecto } = proyectoConxt;

  const [proyectoActual] = proyecto;
  console.log(proyectoActual);

  const deleteTarea = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  const handleChange = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }

    cambiarEstadoTarea(tarea);
  };

  const handleEdit = (tarea) => {
    tareaSeleccionada(tarea);
  };

  return (
    <li className="tarea sombre" key={tarea.id}>
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleChange(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleChange(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => handleEdit(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTarea(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
