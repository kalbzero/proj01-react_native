import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native';

export default props => {
    const notificar = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else if(Platform.OS === 'ios'){
            Alert.alert('Informação',msg);
        } else {
            alert('Browser');
        }
    }

    return (
        <Button title='Plataforma?'
        onPress={() => notificar('Parabens!')} />
    )
}