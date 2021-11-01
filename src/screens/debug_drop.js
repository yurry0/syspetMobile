import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import Db from "../../db";

var db = new Db();
const drop = ({navigation}) => {
    return (
        <View style={{flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'}}>
            <TouchableOpacity onPress={ async() => { db.initDb()}} style={{marginBottom: 25}}><Text>MYSQL INICIALIZAR TABELA USUARIOS</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <Text> -------------------------------------- </Text>
            
            <TouchableOpacity onPress={ async() => { db.initDbClientes()}} style={{marginBottom: 25}}><Text>MYSQL INICIALIZAR TABELA CLIENTES</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <Text> -------------------------------------- </Text>
            
            <TouchableOpacity onPress={ async() => { db.initDbPet()}} style={{marginBottom: 25}}><Text>MYSQL INICIALIZAR TABELA PETS</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <Text> -------------------------------------- </Text>
            
            <TouchableOpacity onPress={ async () => { db.listarUsuario()}} style={{marginTop: 20}}><Text>MYSQL SELECT USUARIOS (CONSOLE LOG)</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <Text> -------------------------------------- </Text>
            
            <TouchableOpacity onPress={ async () => { db.listarCliente()}} style={{marginTop: 20}}><Text>MYSQL SELECT CLIENTES (CONSOLE LOG)</Text></TouchableOpacity>
            <Text> -------------------------------------- </Text>
            <Text> -------------------------------------- </Text>
            
            <TouchableOpacity onPress={ async () => { db.listarPets()}} style={{marginTop: 20}}><Text>MYSQL SELECT PETS (CONSOLE LOG)</Text></TouchableOpacity>
            
        </View>
    )
}

export default drop;