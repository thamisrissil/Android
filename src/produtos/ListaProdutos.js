import React from 'react'
import {Text} from 'react-native'
import produtos from './produtos'

export default function Lista (props) {
    return (
        <>
            <Text style={{fontSize: 24, color: 'blue'}}>
                Lista de produtos
            </Text>
            {produtos.map (p => {
                return <Text key={p.id}> {p.id}) {p.nome} tem R$ {p.preco}</Text>
            })}

        </>
    );
}




