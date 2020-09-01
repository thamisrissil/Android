import React, { useState, Component } from 'react'
import {Text, View, TextInput, Alert, Button,StyleSheet} from 'react-native'

export default class CalculadoraClasse extends Component{
    state = {
        numero1: 0,
        numero2: 0,
        resultado: 0,
    }
    somar(){
        this.setState({resultado:Number(this.state.numero1)+Number(this.state.numero2)})
    }
    subtracao(){
        this.setState({resultado:Number(this.state.numero1)-Number(this.state.numero2)})
    }
    divisao(){
        if(this.state.numero2 == 0){
            Alert.alert("Não é possível fazer a divisão por 0 em ")
        }else{
            this.setState({resultado:Number(this.state.numero1)/Number(this.state.numero2)})
        }     
    }
    multiplicacao(){
        this.setState({resultado:Number(this.state.numero1)*Number(this.state.numero2)})
    }
    render(){
        return(
            <View style={styles.view}>
                <TextInput style={styles.TextInputStyle} placeholder="Digite um número" onChangeText={num => {this.setState({numero1:num})}}  />
                <TextInput style={styles.TextInputStyle} placeholder="Digite um número" onChangeText={num => {this.setState({numero2:num})}}  />
                 <Text>Resultado: {this.state.resultado}</Text>
                <Button color="black" title="+" onPress={() => this.somar(this.state.somar)}></Button>
                <Button color="black" title="-" onPress={() => this.subtracao(this.state.subtracao)}></Button>
                <Button color="black" title="*" onPress={() => this.multiplicacao(this.state.multiplicacao)}></Button>
                <Button color="black" title="/" onPress={() => this.divisao(this.state.divisao)}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        alignItems:"center"
    },
    TextInputStyle:{        
        borderWidth:3,
        borderRadius:20,
        textAlign:"center",
        margin:50
    }
})