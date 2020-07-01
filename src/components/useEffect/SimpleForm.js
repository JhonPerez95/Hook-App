import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  const { name, email } = form;

  useEffect(() => {
    console.log(' UseEffect Disparado');
  }, []);

  // OnChange
  const handleInputChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <>
      <h1> UseEffect </h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  );
};

export default SimpleForm;
