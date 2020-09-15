import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Stack from './src/endPointAccess/navegacao/StackBusca'
import {NavigationContainer} from '@react-navigation/native'


export default props => {
  return(
    <View style={{flex:1}}>      
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    margin:30
  },
});
