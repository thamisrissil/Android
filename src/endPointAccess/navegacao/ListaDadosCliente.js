import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button} from 'react-native'

export default function Lista (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cliente/'+id 
    useEffect(() => {
            fetch(string, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDEyMzA2NjQ4NywiZXhwIjoxNjAwNzI3ODY2fQ.uvVC5hHH9GTTBA4DwfgQ3NqC9yl5EGvdDI8T88VMgyW9GinXIT5dqTBMMhCx9wHoW2dEqhVITH134BxJw1SAwg'
            }
        })
        .then((response) => {   
            if(!response.ok){
                if(response.status == 400){
                    Alert.alert("Cliente nao encontrado!");
                    props.navigation.goBack()
                }
            }
            return response.json()
        })
        .then((json) => {
                setData(json.dados)
            }
        )
        .catch((error) => {
            console.error(error)})
        }, []);
    
    function renderizacao (){
        if(data != null){
            return (
                <>
                    <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>
                        Cliente  
                    </Text>
                    <Text>
                        ID: {data.id}
                    </Text>
                    <Text>
                        CPF: {data.cpf} 
                    </Text>
                    <Text>
                        Nome: {data.nome}
                    </Text>
                    <Text>
                        UF: {data.uf}
                    </Text>
                    <Button title="Voltar" onPress={() => props.navigation.goBack()}/>  
                    <Button title="Listar cartoes"  
                    onPress={() => {props.navigation.navigate("ListarCartoes", {idCliente:id})}}/>
                </>
            )
        }
    }

    return(
        <View style={{flex:1, padding: 24}}>
            {renderizacao()}
        </View>
    );
}