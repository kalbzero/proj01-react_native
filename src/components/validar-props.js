import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

// {props.label || "Opa"} se props.label for nulo, "Opa" substitui o valor
const ValidarProps = props => 
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano + 2000}
    </Text>

//Após receber os valores acima, vamos validar as informações de outra forma.
ValidarProps.defaultProps = { label: 'Ano: '};
ValidarProps.propTypes  = { ano: PropTypes.number.isRequired };

export default ValidarProps;