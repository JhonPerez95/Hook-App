import React, { useContext } from 'react';

import { UserContext } from './UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);

  const newUser = {
    id: 123131321,
    user: 'jhonPerez95',
    email: 'jhonperez@gmail.com',
  };
  return (
    <div>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(newUser)}>
        Add User
      </button>
    </div>
  );
};

export default Login;
