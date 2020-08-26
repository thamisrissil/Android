import React, { useState } from 'react'
import {Text, View, TextInput} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default props => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [resultado, setResultado] = useState(0)

    function soma(){
        setResultado(Number(a) + Number(b))
    }
    function subtracao() {
        setResultado(Number(a) - Number(b))
    }
    function divisao() {
        setResultado(Number(a) * Number(b))
    }
    function mult() {
        setResultado(Number(a) / Number(b))
    }

    return(
        <View>
            <TextInput keyboardType="decimal-pad" value={a.toString()} onChangeText={setA}/>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Icon name="plus" size={18} onPress={soma} />
                <Icon name="minus" size={18} onPress={subtracao} />
                <Icon name="divide" size={18} onPress={divisao} />
                <Icon name="times" size={18} onPress={mult} />
            </View>                        
            <TextInput keyboardType="decimal-pad" value={b.toString()} onChangeText={setB}/>
            <Text>Resultado: {resultado}</Text>
        </View>
    )
}