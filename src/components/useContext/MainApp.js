import React, { useState } from 'react';

import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {
  // const user2 = {
  //   id: 123,
  //   name: 'jhon',
  //   email: 'jhon@gmail.com',
  // };

  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
