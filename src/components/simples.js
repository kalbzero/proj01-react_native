import React from 'react';
import { Text, View } from 'react-native';
import Default from '../style/default';

export default props =>
    <View>
        <Text style={Default.ex}>{props.texto}</Text>
    </View>

/**
Ambas funcionam do mesmo jeito.

export default function(props) {
    return <Text>{props.texto}</Text>;
}

export default props => <Text>{props.texto}</Text>;
 */

/**
Ambas retornam a mesma coisa.

export default props =>
    <View>
        <Text>{props.texto}</Text>
        <Text>{props.texto}</Text>
    </View>

export default props => [<Text key={1}>{props.texto}</Text>, <Text key={2}>{props.texto}</Text>];
 */