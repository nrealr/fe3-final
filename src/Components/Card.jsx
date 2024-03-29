import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ item }) => {
  const { name, username, id } = item;
  const { state, dispatch } = useContextGlobal();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  const linkDoc = "/detail/" + id;
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={linkDoc}>
        <img
          className="cardImg"
          src="../public/images/doctor.jpg"
          alt="Doctor"
        />
      </Link>

      <h3>
        <Link to={linkDoc}>{name}</Link> <hr /> {username}
      </h3>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={() => dispatch({ type: "ADD_FAV", payload: item })}
        className="favButton"
      >
        Add fav ⭐
      </button>
    </div>
  );
};

export default Card;
