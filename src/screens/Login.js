import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Db from '../../db';
var db = new Db();

const buscarUser = (login, senha) => {
    db.initDb();
    let usuario = {
        login: login,
        senha: senha
    }
    db.userLogin(usuario);
}

export default function Login({ navigation }, props) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [estado, setEstado] = useState('logar');

    useEffect(() => {
        setLogin(props.login);
        setSenha(props.senha);
        setEstado(props.estado);
    }, []);

    const entrar = (estado) => {
        if (estado == 'logar') {
          buscarUser(login, senha);
        }
        setEstado('logar');
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
                    <TextInput onChangeText={(value) => setLogin(value)} keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email de acesso" style={styles.input}></TextInput>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput onChangeText={(value) => setSenha(value)} autoCapitalize="none" secureTextEntry={true} placeholder="Digite sua senha de acesso" style={styles.input}></TextInput>
                  
                  
                    {/* Comentário: A função de login será acionada aqui, através do intermédio da Const entrar(estado) */}
                    <TouchableOpacity style={styles.botao} onPress={() => {entrar(estado)}} >
                        <Text style={styles.botaoText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoCad}
                        onPress={() => { navigation.navigate('CadastrarUsuario') }}
                    >
                        <Text style={styles.botaoText}>Cadastrar Usuário</Text>
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
        marginBottom: 22,


    },

    botaoCad: {
        marginTop: 5,
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