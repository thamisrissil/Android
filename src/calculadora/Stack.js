import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from './TelaA_resp'
import TelaB from './TelaB_resp'

const Stack = createStackNavigator()

export default function StackFunc (props){
    return(
        <Stack.Navigator initialRouteName="TelaA"
            screenOptions={{headerShown: true}}> 
            <Stack.Screen name="TelaA" 
                options={{title:"Informacoes iniciais"}} 
                component={TelaA}>
                </Stack.Screen>
            <Stack.Screen name="TelaB" 
                component={TelaB}/>
        </Stack.Navigator>
    );
}


