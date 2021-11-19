import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Db from '../../db';
import { Actions } from 'react-native-router-flux';
import { Input, Button } from 'react-native-elements'
import styles from '../styles/Login';
import Icon from 'react-native-vector-icons/Ionicons'
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

    if (check == true) {
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
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <ScrollView keyboardShouldPersistTaps="handled">

                <View
                    style={styles.body}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')} />
                    <Text style={styles.text}>Bem vindo ao SysPet! </Text>
                    <Text style={styles.label}>Usuario / Email </Text>

                    <Input
                        onChangeText={(value) => setEmail(value)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="         Digite seu email de acesso"
                        leftIcon={
                            <Icon
                                name='person-circle-sharp'
                                size={28}
                                color='orange'
                            />
                        } style={styles}></Input>


                    <Text style={styles.label}>Senha</Text>
                    <Input
                        onChangeText={(value) => setSenha(value)}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        placeholder="        Digite sua senha de acesso"
                        style={styles}
                        leftIcon={
                            <Icon
                                name='lock-closed-sharp'
                                size={28}
                                color='orange'
                            />
                        }
                    >


                    </Input>


                    {/* Comentário: A função de login será acionada aqui, através do intermédio da Const entrar(estado) 
                     15/10/2021: Função de login não totalmente implementada, precisa ser revista até o final do projeto
                       onPress={() => { entrar(estado) }}
          

                     */}
                    <Button style={styles}
                        onPress={() => { Actions.homeIndex() }}
                        icon={<Icon
                            name="caret-forward-circle-outline"
                            size={24}
                            color="white"
                        />}
                        title="  Entrar"
                        buttonStyle={{
                            backgroundColor: '#ff5c5c',
                            width: 250,
                            marginBottom: 20
                        }}   >

                    </Button>
                    <Button
                        style={styles}
                        title="  Cadastrar Novo Usuário"
                        icon={<Icon
                            name="person-add-outline"
                            size={24}
                            color="white"
                        />}
                        buttonStyle={{
                            backgroundColor: '#2bbd7e',
                            width: 250,
                            marginTop: 20,
                            marginBottom: 40
                        }}
                        onPress={() => { Actions.CadastrarUsuario() }}
                    >
                        <Text style={styles.botaoText}>Cadastrar Usuário</Text>
                    </Button>

                    <TouchableOpacity
                        style={styles.botaoDebug}
                        onPress={() => { Actions.Debug() }}
                    >
                        <Text style={styles.botaoText}>DEBUG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
