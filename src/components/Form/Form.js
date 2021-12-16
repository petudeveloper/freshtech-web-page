/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs';
import styles from './Form.module.css';

const Form = () => {
  const initialState = {
    nombre: '',
    email: '',
    whatsapp: '',
    asunto: '',
    mensage: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [submitBtn, setsubmitBtn] = useState(true);
  const [messages, setMessages] = useState({
    nombre: null,
    email: null,
    whatsapp: null,
    mensage: null,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const btnValidation = () => {
    const validateEmail = /\S+@\S+\.\S+/.test(formData.email);
    const nombreImp = formData.nombre.length > 5;
    if (nombreImp && validateEmail && (formData.mensage.length > 10)) {
      setsubmitBtn(false);
    } else {
      setsubmitBtn(true);
    }
  };

  const setNombre = (e) => {
    setFormData((prevState) => ({ ...prevState, nombre: e.target.value }));
    const nombreImp = e.target.value.length > 5;
    setMessages((prevState) => ({ ...prevState, nombre: (nombreImp ? null : 'Nombre debe tener mas de 5 characteres') }));
    btnValidation();
  };

  const setEmail = (e) => {
    setFormData((prevState) => ({ ...prevState, email: e.target.value }));
    const validateEmail = /\S+@\S+\.\S+/.test(e.target.value);
    setMessages((prevState) => ({ ...prevState, email: (validateEmail ? null : 'Formato de email es incorrecto!') }));
    btnValidation();
  };

  const setWhatsapp = (e) => {
    const isNumber = /^\d+$/.test(e.target.value[e.target.value.length - 1]);
    const emptyLine = e.target.value === '' || e.target.value[e.target.value.length - 1] === '-';
    if (isNumber || emptyLine) {
      setFormData((prevState) => ({ ...prevState, whatsapp: e.target.value }));
      setMessages((prevState) => ({ ...prevState, whatsapp: null }));
    } else {
      setMessages((prevState) => ({ ...prevState, whatsapp: 'Solo numeros son validos!' }));
    }
    const wvalid = /^\d{3}-\d{3}-\d{4}$/.test(formData.whatsapp);
    setMessages((prevState) => ({ ...prevState, whatsapp: (wvalid ? null : 'Whatsapp debe tener el formato 123-123-1234') }));
    btnValidation();
  };

  const setAsunto = (e) => {
    setFormData((prevState) => ({ ...prevState, asunto: e.target.value }));
  };

  const setMensaje = (e) => {
    setFormData((prevState) => ({ ...prevState, mensaje: e.target.value }));
    btnValidation();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ASESORÍA PROFESIONAL Y PERSONALIZADA</h2>
      <p className="text-white">
        Háganos su consulta diligenciando el siguiente formulario,
        escribiéndonos al WhatsApp,
        o escribiéndonos un correo.
      </p>
      <form
        name="contactV1"
        onSubmit={(e) => e.preventDefault()}
        className={styles.form}
        method="post"
      >
        <input type="hidden" name="form-name" value="contactV1" />
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="nombre">
            Tu nombre
            <p className="text-danger m-0">*</p>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className={`${messages.nombre ? 'invalid-inp' : styles.inpform}`}
            value={formData.name}
            onChange={(e) => setNombre(e)}
          />
          <p className={`text-muted position-absolute bottom-0 end-0 ${messages.nombre ? '' : 'd-none'}`}>{messages.nombre}</p>
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="email">
            Tu correo electrónico
            <p className="text-danger m-0">*</p>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`${messages.email ? 'invalid-inp' : styles.inpform}`}
            value={formData.email}
            onChange={(e) => setEmail(e)}
          />
          <p className={`text-muted position-absolute bottom-0 end-0 ${messages.email ? '' : 'd-none'}`}>{messages.email}</p>
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="whatsapp">
            WhatsApp
            <p className="text-danger m-0">*</p>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="text"
            placeholder="123-123-1234"
            className={styles.inpform}
            value={formData.whatsapp}
            onChange={(e) => setWhatsapp(e)}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="asunto">Asunto</label>
          <input id="asunto" name="asunto" type="text" className={styles.inpform} value={formData.asunto} onChange={(e) => setAsunto(e)} />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="mensaje">
            Tu mensaje
            <p className="text-danger m-0">*</p>
          </label>
          <textarea id="mensaje" className={styles.mensaje} name="mensaje" rows="5" value={formData.mensaje} onChange={(e) => setMensaje(e)} />
        </div>
        <div className="d-flex flex-column">
          <button
            type="submit"
            className={styles.button}
            disabled={submitBtn}
          >
            Enviar
          </button>
          <p className="d-flex justify-content-end">
            Objetos con (
            <p className="text-danger m-0">*</p>
            ) son obligatorios
          </p>
        </div>
      </form>
      <div>
        <a href="https://api.whatsapp.com/send?phone=573197292278">
          <BsWhatsapp className={styles.icon} />
        </a>
        <a href="mailto:felipe.velasquez@freshtech-colombia.com">
          <BsMailbox className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Form;
