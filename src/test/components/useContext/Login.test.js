import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/useContext/UserContext';
import Login from '../../../components/useContext/Login';

describe('Test the component <Login/>', () => {
  const setUser = jest.fn();
  const newUser = {
    id: 123131321,
    user: 'jhonPerez95',
    email: 'jhonperez@gmail.com',
  };

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <Login />
    </UserContext.Provider>
  );

  test('Debe mostrar correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe ejecutar setUser con argumentos esperados', () => {
    wrapper.find('button').simulate('click');
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith(newUser);
  });
});
