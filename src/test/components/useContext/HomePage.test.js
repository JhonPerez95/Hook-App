import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../../../components/useContext/HomePage';
import { UserContext } from '../../../components/useContext/UserContext';

describe('Test the component <HomePage/>', () => {
  const user = {
    name: 'Jhon',
    email: 'jhon@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomePage />
    </UserContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
