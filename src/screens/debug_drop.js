import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import Db from "../../db";

var db = new Db();
const drop = ({navigation}) => {
    return (
        <View style={{flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'}}>
            <TouchableOpacity onPress={db.initDb()} style={{marginBottom: 65}}><Text>DROP THE BOMB</Text></TouchableOpacity>
            <TouchableOpacity onPress={db.listarUsuario()}><Text>LIST THE BOMB</Text></TouchableOpacity>
            
        </View>
    )
}

export default drop;