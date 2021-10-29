import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import Db from "../../db";

var db = new Db();
const drop = ({navigation}) => {
    return (
        <View style={{flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'}}>
            <TouchableOpacity onPress={ db.initDb()} style={{marginBottom: 25}}><Text>MYSQL DROP</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <TouchableOpacity onPress={ async () => { db.listarUsuario()}} style={{marginTop: 20}}><Text>MYSQL SELECT USUARIOS (CONSOLE LOG)</Text></TouchableOpacity>
            
        </View>
    )
}

export default drop;