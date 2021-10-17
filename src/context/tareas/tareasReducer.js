import {
  TAREA_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_FORMULARIO,
  ELIMINAR_TAREA,
  CAMBIAR_ESTADO,
  GUARDAR_TAREA,
  ACTUALIZAR_TAREA,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREA_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
        errorTarea: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorTarea: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case CAMBIAR_ESTADO:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };
    case GUARDAR_TAREA:
      return { ...state, tareaActual: action.payload };
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.proyectoId === action.payload.proyectoId
            ? action.payload
            : tarea
        ),
        tareaActual: null,
      };
    default:
      return state;
  }
};
