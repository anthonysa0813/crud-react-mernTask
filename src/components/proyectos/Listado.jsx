import React, { useContext, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareasContext from "../../context/tareas/tareasContext";
import Proyecto from "./Proyecto";

const Listado = () => {
  const proyectosContext = useContext(proyectoContext);

  const { proyectos, getProyectos } = proyectosContext;

  useEffect(() => {
    getProyectos();
  }, []);

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default Listado;
