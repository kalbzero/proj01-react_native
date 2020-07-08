import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/simples';
import ParImpar from './components/parimpar';
import {Inverter, MegaSena} from './components/with';
import Contador from './components/contador';
import Plataformas from './components/plataformas';

export default createDrawerNavigator({
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={8}/>,
        navigationOptions: {title: 'Contador'}
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!!!'/>,
        navigationOptions: {title: 'Inverter'}
    },
    ParImpar: {
        screen: () => <ParImpar numero={26}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível'/>,
        navigationOptions: {title: 'Simples'}
    },
}, {drawerWidth: 300});