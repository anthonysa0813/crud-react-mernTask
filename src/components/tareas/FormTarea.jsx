import React, { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import TareasContext from "../../context/tareas/tareasContext";

const FormTarea = () => {
  const { proyecto } = useContext(proyectoContext);
  const {
    agregarTarea,
    validarTarea,
    errorTarea,
    obtenerTareas,
    tareaActual,
    updateTarea,
  } = useContext(TareasContext);
  const [tarea, setTarea] = useState({
    nombre: "",
  });

  useEffect(() => {
    if (tareaActual !== null) {
      setTarea({
        nombre: tareaActual.nombre,
      });
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tareaActual]);

  console.log(tareaActual);

  if (!proyecto) return null;

  const [proyectoActual] = proyecto;

  const { nombre } = tarea;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (!nombre.trim()) {
      validarTarea();
      return;
    }

    if (tareaActual === null) {
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = proyectoActual.estado;
      agregarTarea(tarea);
    } else {
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = proyectoActual.estado;
      updateTarea(tarea);
    }

    // agregar la nueva tarea al state de tareas

    obtenerTareas(proyectoActual.id);

    // reiniciar el form
    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaActual ? "Editar" : "Agregar Tarea"}
          />
        </div>
        {errorTarea && (
          <p className="mensaje error">El nombre de la tarea es obligatoria</p>
        )}
      </form>
    </div>
  );
};

export default FormTarea;
