import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Tempo(props){
    return(
        <>
        
        <View style={styles.texto}>
        <Text style={styles.titulo}> Resultado: </Text> 
        <Text style={styles.letra}> Data da Consulta: {props.data.date} </Text>
        <Text style={styles.letra}> Descrição: {props.data.description}</Text>
        </View>
         
         <Text></Text>

         <View style={styles.texto}>
        <Text style={styles.titulo}> Previsão para o resto do dia: </Text>
        <Text style={styles.letra}> Min: {props.data.min} </Text>
        <Text style={styles.letra}> Max: {props.data.max}</Text>
        <Text style={styles.letra}> Descrição: {props.data.description}</Text>
        </View>

        <Text></Text>

        <View style={styles.texto}>
        <Text style={styles.titulo}> Previsão de Amanhã: </Text>
        <Text style={styles.letra}> Min: {props.data.min} </Text>
        <Text style={styles.letra}> Max: {props.data.max}</Text>
        <Text style={styles.letra}> Descrição: {props.data.description}</Text>
        </View>

        </>
    );
}

const styles = StyleSheet.create({
    texto: {
     fontSize: 30,
     marginTop: 1,
     right: 40,
     backgroundColor: '#fff',
     borderRadius: 10,
     opacity: 0.8
    },
    titulo:{
        fontSize: 20
    },
    letra:{
        fontSize: 15
    },
});