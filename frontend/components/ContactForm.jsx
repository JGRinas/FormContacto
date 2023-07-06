import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [mensaje, setMensaje] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    console.log(mensaje);
    e.preventDefault();
    axios
      .post("http://localhost:3010/send-email", mensaje)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form
        style={{
          padding: "50px",
          backgroundColor: "#e6e6e6",
          borderRadius: "10px",
          margin: "100px",
        }}
        onSubmit={handleOnSubmit}
      >
        <fieldset>
          <legend>Enviar mensaje</legend>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Nombre
            </label>
            <input
              type='text'
              name='name'
              className='form-control'
              placeholder='Juan Perez'
              onChange={handleOnChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Correo
            </label>
            <input
              type='email'
              name='email'
              className='form-control'
              placeholder='example@gmail.com'
              onChange={handleOnChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='subject' className='form-label'>
              Asunto
            </label>
            <input
              type='text'
              name='subject'
              className='form-control'
              placeholder='Cómo puedo enviar un mensaje'
              onChange={handleOnChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Descripción
            </label>
            <input
              type='text'
              name='description'
              className='form-control'
              placeholder='Lo que pasa es que...'
              onChange={handleOnChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Enviar
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
