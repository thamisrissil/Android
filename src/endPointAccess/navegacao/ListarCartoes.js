import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button} from 'react-native'

export default function Lista (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cartao/cliente/'+id 
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
                        Cliente ID: {id}   
                    </Text>
                        {data.map(x => 
                        <>
                        <Text>ID: {x.id}</Text>
                        <Text>numero: {x.numero}</Text>
                        <Text>Data Validade: {x.dataValidade}</Text>
                        <Text style={{borderBottomWidth:10}}>Bloqueado: {x.bloqueado}</Text>
                        </>
                        )}
                    
                    <Button title="Voltar" onPress={() => props.navigation.goBack()}/>                      
                    </>
                )
            }
        }

        return(
            <View style={{flex:1, padding: 24}}>
            {renderizacao()}
            </View>
        )    
    };