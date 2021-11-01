import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const HomeIndex = ({navigation}) =>{

    

    return(

        <View style={{flex: 1,
        alignContent: 'center'}}>
            
            <TouchableOpacity onPress={ () => {navigation.navigate('Login')} }>
            <Text >Retornar Login</Text>
          </TouchableOpacity>
        </View>
    )
}


export default HomeIndex;