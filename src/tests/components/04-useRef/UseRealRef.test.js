import React from 'react';
import { shallow } from 'enzyme';
import { UsoRealRef } from '../../../components/04-useRef/UsoRealRef';

describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<UsoRealRef />);

    test('Debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('Debe mostrar el componente <MultipleCustomHooks /> ', () => {

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    })



})
