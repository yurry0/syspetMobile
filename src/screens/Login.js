import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Db from '../../db';
import styles from '../styles/Login';
var db = new Db();
{/* Essa parte é ligada as funções de checagem no BD que ainda não foram finalizadas. */ }
const buscarUser = (email, senha) => {

    var check;
    db.initDb();
    let usuario = {
        email: email,
        senha: senha
    }
    db.userLogin(usuario);

    if (db.userLogin(usuario) == true) {


    }

    if (check == true){
        navigation.navigate('Home');
    }
}

export default function Login({ navigation }, props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estado, setEstado] = useState('logar');

    useEffect(() => {
        setEmail(props.email);
        setSenha(props.senha);
        setEstado(props.estado);
    }, []);

    const entrar = (estado) => {
        if (estado == 'logar') {
            buscarUser(email, senha);
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
                    <TextInput onChangeText={(value) => setEmail(value)} keyboardType="email-address" autoCapitalize="none" placeholder="Digite seu email de acesso" style={styles.input}></TextInput>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput onChangeText={(value) => setSenha(value)} autoCapitalize="none" secureTextEntry={true} placeholder="Digite sua senha de acesso" style={styles.input}></TextInput>


                    {/* Comentário: A função de login será acionada aqui, através do intermédio da Const entrar(estado) 
                     15/10/2021: Função de login não totalmente implementada, precisa ser revista até o final do projeto
                     
                     onPress={()=>{navigation.navigate('Home')}}>

                     */}
                    <TouchableOpacity style={styles.botao}
                        onPress={() => { entrar(estado) }} >
                        <Text style={styles.botaoText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.botaoCad}
                        onPress={() => { navigation.navigate('CadastrarUsuario') }}
                    >
                        <Text style={styles.botaoText}>Cadastrar Usuário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoDebug}
                        onPress={() => { navigation.navigate('drop') }}
                    >
                        <Text style={styles.botaoText}>DEBUG</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
