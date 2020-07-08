import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

/**
 * this.props.numero serve apenas para leitura, 
 * se tentar instanciar antes e iniciar com algum valor, não vai alterar o valor recebido.
 * 
 * Caso queria alterar esse valor, terá que usar o TouchableHighlight.
 * 
 * No style, caso queira inserir css 'em linha', use {} para inserir os valores.
 */
export default class Contador extends Component {
    // Para alterar o valor, terá que criar um objeto, nele será possível alterar os valores.
    state = {
        numero: this.props.numeroInicial,
    };

    maisUm = () => {
        this.setState({numero: this.state.numero + 1});
    };
    limpar = () => {
        this.setState({numero: 0});
    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.limpar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
                
            </View>
        );
    }
}