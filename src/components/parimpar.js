import React from 'react';
import {View, Text} from 'react-native';
import Default from '../style/default';
import F from './f';

/**
 * Pode criar uma função ou fazer um operador ternário pra decidir qual dos textos exibir. 
 */

function parOuImpar(num){
    // if(num %2 == 0){
    //     return <Text style={Default.ex}>Par</Text>
    // } else {
    //     return <Text style={Default.ex}>Impar</Text>
    // }

    const v = num %2 == 0 ? 'Par' : 'Impar';
    return <Text style={Default.ex}>{v}</Text>
}

export default props => 
<View>
    {
        // parOuImpar(props.numero)
        
        // props.numero % 2 == 0
        // ? <Text style={Default.ex}>Par</Text>
        // : <Text style={Default.ex}>Impar</Text>
    }
    <F test={props.numero %2 == 0}><Text style={Default.ex}>Par</Text></F>
    <F test={props.numero %2 == 1}><Text style={Default.ex}>Impar</Text></F>
</View>