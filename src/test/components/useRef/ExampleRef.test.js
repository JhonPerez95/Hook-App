import React from 'react';
import { shallow } from 'enzyme';
import ExampleRef from '../../../components/useRef/ExampleRef';

describe('Test al component <ExampleRef/>', () => {
  const wrapper = shallow(<ExampleRef />);

  test('Debe mostrarse correctamente el componnete <ExampleRef/>', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });

  test('Debe mostrar el component  <MultipleCustomHooks/>', () => {});
  wrapper.find('button').simulate('click');
  expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
});
