import React, { useReducer } from "react";
import {
  TAREA_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_FORMULARIO,
  ELIMINAR_TAREA,
  CAMBIAR_ESTADO,
  GUARDAR_TAREA,
  ACTUALIZAR_TAREA,
} from "../../types";
import TareasContext from "./tareasContext";
import TareasReducer from "./tareasReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, proyectoId: 1, nombre: "Elegir Plataforma", estado: true },
      { id: 2, proyectoId: 2, nombre: "Elegir Colores", estado: false },
      {
        id: 3,
        proyectoId: 3,
        nombre: "Elegir Plataforma de pago",
        estado: true,
      },
      { id: 4, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { id: 5, proyectoId: 1, nombre: "Elegir Plataforma", estado: true },
      { id: 6, proyectoId: 2, nombre: "Elegir Colores", estado: false },
      {
        id: 7,
        proyectoId: 3,
        nombre: "Elegir Plataforma de pago",
        estado: true,
      },
      { id: 8, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
      { id: 9, proyectoId: 1, nombre: "Elegir Plataforma", estado: true },
      { id: 10, proyectoId: 2, nombre: "Elegir Colores", estado: false },
      {
        id: 11,
        proyectoId: 3,
        nombre: "Elegir Plataforma de pago",
        estado: true,
      },
      { id: 12, proyectoId: 4, nombre: "Elegir Hosting", estado: true },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaActual: null,
  };

  const [state, dispatch] = useReducer(TareasReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREA_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: CAMBIAR_ESTADO,
      payload: tarea,
    });
  };

  const tareaSeleccionada = (tarea) => {
    dispatch({
      type: GUARDAR_TAREA,
      payload: tarea,
    });
  };

  const updateTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareasContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyectos: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaActual: state.tareaActual,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        tareaSeleccionada,
        updateTarea,
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};

export default TareaState;
