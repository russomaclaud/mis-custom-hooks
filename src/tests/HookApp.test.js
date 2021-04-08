import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HookApp';

describe('Pruebas en <HookApp />', () => {

    test('Debe mostrarse correctamente ', () => {

        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();

    })


})
