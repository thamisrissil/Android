import React from 'react'
import {Text, FlatList} from 'react-native'

import produtos from './produtos'

export default function Lista (props) {
    return (
        <>
            <Text style={{fontSize:24, color:'blue'}}> Lista produto - usando Flat List</Text>
            <FlatList 
                data={produtos}
                keyExtractor={item => {item.id} }
                renderItem={({item: p}) => {
                    return <Text>{p.id} {p.nome} {p.preco} </Text>
                }}
            />
        </>
    );
}

