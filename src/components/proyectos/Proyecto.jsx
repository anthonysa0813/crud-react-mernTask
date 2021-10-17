import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareasContext from "../../context/tareas/tareasContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);

  const tareaContext = useContext(TareasContext);
  const { obtenerTareas } = tareaContext;
  const { proyectoActual } = proyectosContext;

  // const {} = proyectosContext

  const seleccionarProyecto = (id) => {
    console.log(id);
    proyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <li key={proyecto.id}>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
