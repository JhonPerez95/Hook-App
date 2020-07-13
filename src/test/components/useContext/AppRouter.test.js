import React from 'react';
import { mount } from 'enzyme';

import { UserContext } from '../../../components/useContext/UserContext';
import AppRouter from '../../../components/useContext/AppRouter';

describe('Test the component <AppRouter/>', () => {
  const user = {
    id: 123131321,
    user: 'jhonPerez95',
    email: 'jhonperez@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
