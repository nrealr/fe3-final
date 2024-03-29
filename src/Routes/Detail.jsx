import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import docImg from "/public/images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [doctor, setDoctor] = useState({});
  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/";
  console.log(params);

  useEffect(() => {
    axios(url + params.id).then((res) => setDoctor(res.data));
  }, []);

  console.log(doctor);

  return (
    <div className="detail">
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <img src={docImg} alt="Doctor" />
      <h2>{doctor.name}</h2>
      <h3>{doctor.email}</h3>
      <h3>{doctor.phone}</h3>
      <h3>{doctor.website}</h3>
    </div>
  );
};

export default Detail;
