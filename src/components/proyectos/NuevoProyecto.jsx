import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    addProyecto,
    mostrarError,
    errorFormulario,
  } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;
  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (!nombre.trim()) {
      mostrarError();
      return;
    }

    //agregar al state
    addProyecto(proyecto);

    //reiniciar el state
    setProyecto({
      nombre: "",
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario && (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primario btn-block">
            Agregar Proyecto{" "}
          </button>
        </form>
      )}
      {errorFormulario && (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      )}
    </>
  );
};

export default NuevoProyecto;
