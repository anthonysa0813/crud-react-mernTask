import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevCuenta from "./components/auth/NuevCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareasState";

const App = () => {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/nueva-cuenta">
              <NuevCuenta />
            </Route>
            <Route path="/proyectos">
              <Proyectos />
            </Route>
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
};

export default App;
