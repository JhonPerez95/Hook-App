import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../../../hook/useFetch');

import MultipleCustomHooks from '../../../components/useEffect/MultipleCustomHooks';
import { useFetch } from '../../../hook/useFetch';

describe('Pruebas al component <MultipleCustomHooks/>', () => {
  test('Debe mostrarse correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar la informacion', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'jhon', quote: 'Hola Mundo' }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    // console.log(wrapper.html());

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
    expect(wrapper.find('footer').text().trim()).toBe('jhon');
  });
});
