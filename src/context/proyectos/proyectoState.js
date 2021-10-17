import React, { useReducer } from "react";
import {
  FORMULARIO_MOSTRAR,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  ELIMINAR_TAREA,
} from "../../types";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { v4 as uuidv4 } from "uuid";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual", estado: false },
    { id: 2, nombre: "Intranet", estado: false },
    { id: 3, nombre: "Diseño de sitio web", estado: false },
    { id: 4, nombre: "MERN", estado: false },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
  };
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_MOSTRAR,
    });
  };

  const getProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const addProyecto = (proyecto) => {
    proyecto.id = uuidv4();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  const proyectoActual = (proyecto) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto,
    });
  };

  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        getProyectos,
        addProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
