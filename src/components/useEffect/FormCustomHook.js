import React from 'react';
import useForm from '../../hook/useForm';

const FormCustomHook = () => {
  const [formState, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> FormCustomHook </h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default FormCustomHook;
