import React from 'react'
import {Text, View, StyleSheet,Button} from 'react-native'

export default function TelaA (props){

    const num1= props.route.params.num1
    const num2= props.route.params.num2
    const op = props.route.params.operation
    let result 
    switch (op) {
        case 1:
            result = parseFloat(num1) + parseFloat(num2)
            break;
        case 2:
            result = parseFloat(num1) - parseFloat(num2)
            break;
        case 3:
            result = parseFloat(num1) * parseFloat(num2)
            break;
        case 4:
            if(parseFloat(num2) == 0){
                result = "Divisao por zero!"
            }
            else{
                result = parseFloat(num1) / parseFloat(num2)
            }
            break;
        default:
            break;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Resultado: {result}
            </Text>
            <Button title='Voltar' onPress={() => {props.navigation.navigate("TelaA") }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'blue',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:24,
        color:'black'
    }
})


