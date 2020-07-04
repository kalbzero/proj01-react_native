import React from 'react';
import { Text } from 'react-native';
import Default from '../style/default';

/**
 * Função que inverte uma string.
 * Primeiro ela separa os caracteres num array, depois inverte a ordem do array, e por último concatena o array numa string.
 * 
 * @param {*} props - possui a variavel texto 
 */
const Inverter = props => {
    const inv = props.texto.split('').reverse().join('');
    return <Text style={Default.ex}>{inv}</Text>
};

/**
 * Criar as variaveis que definem qual é o número menor e maior do jogo (1 e 60).
 * Após, armazena a quantidade de números a ser gerado e preenche-os com zeros.
 * 
 * O for tem a função de preencher os zeros com outros números, então é instanciado o 'novo' com 0.
 * 'novo' irá receber um novo numero entre 1 e 60.
 * O while() termina quando não haver mais zeros no array.
 * Um novo numero é adicionado no array.
 * Ordena os números do menor pro maior.
 * 
 * @param {*} props - recebe um array de números inteiros
 */
const MegaSena = props => {
    const [min, max] = [1, 60];
    const numeros = Array(props.numeros || 6).fill(0);

    for(let i = 0; i < numeros.length; i++) {
        let novo = 0;
        while(numeros.includes(novo)) {
            novo  = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numeros[i] = novo;
    }
    // Ordenar os valores do array em ordem crescente.
    numeros.sort((a, b)=> a - b);
    return <Text style={Default.ex}>{numeros.join(',')}</Text>
}

export {Inverter, MegaSena};