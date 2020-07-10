import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Default from '../style/default';

export default class Evento extends Component {
    /**
     * Iniciando o state.text com '', ele passa a ser um componente controlado, ou seja, não sofre alteração direta.
     * O componente controlado só pode ser alterado através do seu estado (state), como está no código abaixo.
     * Para ser um componente não controlado, basta iniciar o state.texto com null. Se remover o evento onChangeText, verá que alterará o valor.
     */
    state = {
        texto: ''
    };

    alterarTexto = texto => {
        this.setState({ texto });
    };

    render() {
        return(
            <View>
                <Text style={Default.fontSize40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                style={Default.input}
                onChangeText={this.alterarTexto}
                />
            </View>
        );
    }
};