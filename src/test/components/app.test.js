import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('Prueba del componente Padre', () => {
  test('Renderizacion correcta del componente', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
