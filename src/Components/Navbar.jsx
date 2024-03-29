import React from "react";
import { routes } from "./utils/routes";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to={routes.home}>
        <h3>Home</h3>
      </Link>
      <Link to={routes.contact}>
        <h3>Contact</h3>
      </Link>
      <Link to={routes.favs}>
        <h3>Favs</h3>
      </Link>

      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
