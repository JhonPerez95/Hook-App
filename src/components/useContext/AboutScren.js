import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AboutScren = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = () => {
    setUser({});
  };

  return (
    <div>
      <h1>AboutScren</h1>
      <hr />

      <pre className="container">{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-warning" onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
};

export default AboutScren;
