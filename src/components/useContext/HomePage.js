import React, { useContext } from 'react';

import { UserContext } from './UserContext';

const HomePage = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <h1>HomePage</h1>
      <hr />
      <pre className="container">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};

export default HomePage;
