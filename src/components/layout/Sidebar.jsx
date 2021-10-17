import React from "react";
import Listado from "../proyectos/Listado";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>tus Proyectos</h2>
        <Listado />
      </div>
    </aside>
  );
};

export default Sidebar;
