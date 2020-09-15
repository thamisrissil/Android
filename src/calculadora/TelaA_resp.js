import React,{useState} from 'react'
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'

export default function TelaA (props){
    const [numero1, setPrimeiro] = useState("")
    const [numero2, setSegundo] = useState("")

    return(
        <View style={styles.principal}>
            <View style={styles.viewTexto}>
                <Text style={styles.texto}>
                    Calculadora
                </Text>
                <TextInput
                    placeholder="Digite o primeiro numero"
                    value={numero1}
                    onChangeText={numero1 => setPrimeiro(numero1)}/>
                <TextInput
                    placeholder="Digite o primeiro numero"
                    value={numero2}
                    onChangeText={numero2 => setSegundo(numero2)}/>
            </View>
            <View style={styles.botoes}>
                <Button title="Somar" onPress={() => {
                        props.navigation.navigate("TelaB", {num1:numero1, num2:numero2, operation:1})}}/>
                <Button title="Subtrair" onPress={() => {
                    props.navigation.navigate("TelaB", {num1:numero1, num2:numero2, operation:2})}}/>
                <Button title="Multiplicar" onPress={() => {
                    props.navigation.navigate("TelaB", {num1:numero1, num2:numero2, operation:3})}}/>
                <Button title="Dividir" onPress={() => {
                    props.navigation.navigate("TelaB", {num1:numero1, num2:numero2, operation:4})}}/>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    principal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e56935',
    },
    botoes:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-around'
    },
    texto:{
        fontSize:40,
        color:'white',
    },
    viewTexto:{
        justifyContent:'center',
        alignItems:'center'
    }
})