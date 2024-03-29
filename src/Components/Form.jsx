import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleButton = (e) => {
    e.preventDefault();
    if (contact.name.length >= 5 && regexEmail.test(contact.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };
  console.log(contact);

  return (
    <div>
      <form>
        <label>Full Name</label>
        <input
          type="text"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <button onClick={handleButton}>Send</button>
      </form>

      {show && (
        <p>Gracias {contact.name}, te contactaremos cuando antes vía mail</p>
      )}
      {err && <p>Por favor verifique su información nuevamente</p>}
    </div>
  );
};

export default Form;
