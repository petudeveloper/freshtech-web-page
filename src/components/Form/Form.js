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
    const {
      nombre, email, whatsapp, asunto, mensage,
    } = formData;
    const vnombre = nombre.length > 5;
    const vemail = /\S+@\S+\.\S+/.test(email);
    const vwhats = /^\d{3}-\d{3}-\d{4}$/.test(whatsapp);
    const vasunto = asunto.length > 5;
    const vmsg = mensage.length > 10;
    setsubmitBtn(!(vnombre && vemail && vwhats && vasunto && vmsg));
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
    setMessages((prevState) => ({ ...prevState, email: (validateEmail ? null : 'Email debe de seguir el formato ejemplo@ejemplo.com!') }));
    btnValidation();
  };

  const setWhatsapp = (e) => {
    const { value } = e.target;
    const validValue = /^\d{3}-\d{3}-\d{4}$/.test(value);
    const lastEntry = value[value.length - 1];
    const isNumber = /^\d+$/.test(lastEntry);
    const validEntry = value === '' || lastEntry === '-';
    if (isNumber || validEntry) {
      setFormData((prevState) => ({ ...prevState, whatsapp: value }));
      setMessages((prevState) => ({ ...prevState, whatsapp: (validValue ? null : 'Whatsapp debe tener el formato 123-123-1234') }));
      btnValidation();
    } else {
      setMessages((prevState) => ({ ...prevState, whatsapp: 'Solo numeros son validos!' }));
    }
  };

  const setAsunto = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, asunto: value }));
    setMessages((prevState) => ({ ...prevState, asunto: ((value.length > 5) ? null : 'Asunto debe ser mas de 5 characteres') }));
    btnValidation();
  };

  const setMensaje = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({ ...prevState, mensage: value }));
    setMessages((prevState) => ({ ...prevState, mensaje: ((value.length > 10) ? null : 'Mensaje debe tener mas de 10 characteres') }));
    btnValidation();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ASESORÍA PROFESIONAL Y PERSONALIZADA</h2>
      <p className="text-white text-center">
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
            placeholder="Nombre"
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
            placeholder="example@example.com"
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
            placeholder="313-123-1234"
            className={`${messages.whatsapp ? 'invalid-inp' : styles.inpform}`}
            value={formData.whatsapp}
            onChange={(e) => setWhatsapp(e)}
          />
          <p className={`text-muted position-absolute bottom-0 end-0 ${messages.whatsapp ? '' : 'd-none'}`}>{messages.whatsapp}</p>
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="asunto">
            Asunto
            <p className="text-danger m-0">*</p>
          </label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            className={`${messages.asunto ? 'invalid-inp' : styles.inpform}`}
            value={formData.asunto}
            onChange={(e) => setAsunto(e)}
            placeholder="Asunto"
          />
          <p className={`text-muted position-absolute bottom-0 end-0 ${messages.asunto ? '' : 'd-none'}`}>{messages.asunto}</p>
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label} htmlFor="mensaje">
            Tu mensaje
            <p className="text-danger m-0">*</p>
          </label>
          <textarea
            id="mensaje"
            className={`${messages.mensaje ? 'invalid-inp' : styles.inpform}`}
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={(e) => setMensaje(e)}
            placeholder="Tu mensaje..."
          />
          <p className={`text-muted position-absolute bottom-0 end-0 ${messages.mensaje ? '' : 'd-none'}`}>{messages.mensaje}</p>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className={submitBtn ? styles.dbutton : styles.button}
            type="submit"
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
      <div className="text-center">
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
