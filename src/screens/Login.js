import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Mybutton from "../elements/MyButton";
import Db from '../../db';
import SQLite from 'react-native-sqlite-storage'

export default function Login({navigation}) {

    const db = SQLite.openDatabase(
        {
            name:'syspet_mob',
            location: 'default',
        },
        () => {},
        error=>{ console.log(error) }
    );


    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        createTable();
    })


    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS"
                + "Usuarios"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Nome TEXT, Usuario TEXT, Senha TEXT);"
            )
        })
    }

    const getData = () =>{
        try{
            db.transaction((tx)=>{
            tx.executeSql(
                "SELECT Usuario from Usuarios",
                [],        
            (tx, results) => {

                var len = results.row.length;  
                if(len > 0){
                    navigation.navigate('Home');
                }
            })
        })}
        catch{}
    }
    const setData = async () => {
        if (login.length && senha.length == 0) {
            Alert.alert('ERRO', 'Login e/ou senha em branco.')
        }
        else {
            try {
              await db.transaction(async (tx) => {
                    tx.executeSql(
                        "INSERT INTO Usuarios(Usuario, Senha)VALUES(?,?)"
                        [login, senha]
                    );
                })
                navigation.navigate('Home')
            }
            catch {

            }

        }
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1, justifyContent: 'space-between' }}>
                <View
                    style={styles.body}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')} />
                    <Text style={styles.text}>Bem vindo ao SysPet! </Text>
                    <Text style={styles.label}>Usuario / Email </Text>
                    <TextInput onChangeText={(value) => setLogin(value)} autoCapitalize="none" placeholder="Digite seu email de acesso" style={styles.input}></TextInput>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput onChangeText={(value) => setSenha(value)} autoCapitalize="none" placeholder="Digite sua senha de acesso" style={styles.input}></TextInput>
                    <TouchableOpacity style={styles.botao} onPress={setData} >
                        <Text style={styles.botaoText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    logo: {

        width: 150,
        height: 150,
        margin: 10

    },
    text: {
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        letterSpacing: 2,
    },

    label: {
        marginTop: 10,
        fontSize: 15,
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        letterSpacing: 2

    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 25,
        marginBottom: 10,

    },

    botao: {
        marginTop: 20,
        width: 150,
        height: 42,
        backgroundColor: '#53DD6C',
        marginBottom: 80,


    },

    botaoText: {
        color: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16
    }

})