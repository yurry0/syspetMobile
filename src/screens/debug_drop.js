import React, { Component } from 'react'

import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import Db from "../../db";

var db = new Db();
const drop = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center'
            }}>

                <Text style={{ fontSize: 14, marginTop: 80, backgroundColor: 'pink', paddingBottom: 20 }}>Desenvolvido por Yuri Martins!</Text>
                <TouchableOpacity onPress={async () => { db.initDb() }} style={{ marginBottom: 25 }}><Text>MYSQL INICIALIZAR TABELA USUARIOS</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>

                <TouchableOpacity onPress={async () => { db.initDbClientes() }} style={{ marginBottom: 25 }}><Text>MYSQL INICIALIZAR TABELA CLIENTES</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>

                <TouchableOpacity onPress={async () => { db.initDbPet() }} style={{ marginBottom: 25 }}><Text>MYSQL INICIALIZAR TABELA PETS</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>

                <TouchableOpacity onPress={async () => { db.initDbAdocao() }} style={{ marginBottom: 25 }}><Text>MYSQL INICIALIZAR TABELA ADOCAO</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>



                <TouchableOpacity onPress={async () => { db.listarUsuario() }} style={{ marginTop: 20 }}><Text>MYSQL SELECT USUARIOS (CONSOLE LOG)</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>

                <TouchableOpacity onPress={async () => { db.listarCliente() }} style={{ marginTop: 20 }}><Text>MYSQL SELECT CLIENTES (CONSOLE LOG)</Text></TouchableOpacity>
                <Text> -------------------------------------- </Text>
                <Text> -------------------------------------- </Text>

                <TouchableOpacity onPress={async () => { db.listarPet() }} style={{ marginTop: 20 }}><Text>MYSQL SELECT PETS (CONSOLE LOG)</Text></TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default drop;