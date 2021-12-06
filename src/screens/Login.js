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
    if (check == true) {
        navigation.navigate('Home');
    }
}

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorSenha, setErrorSenha] = useState('');
    const [estado, setEstado] = useState('logar');


    // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
    //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
    //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorSenha(null)

        const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        const noNumber = /^([^0-9]*)$/
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regex = /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=._-]+$/g

        if (email == null) {
            setErrorEmail("O campo 'e-mail' está em branco!")
            error = true
        }


        else {
            if (!re.test(String(email).toLowerCase())) {
                setErrorEmail("O formato do email está incorreto!")
                error = true
            }
        }


        if (senha == null) {
            setErrorSenha("O campo 'senha' está em branco!")
            error = true
        } else {

            if (!regexSenha.test(String(senha).toLowerCase())) {
                setErrorSenha("Senha não válida")
                error = true
            }

        }


        return !error
    }

    // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
    //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
    //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

    useEffect(() => {
        setEmail(props.email);
        setSenha(props.senha);
        setEstado(props.estado);
    }, []);

    const entrar = (estado) => {
        if (validar() == false) {
            console.log('Deu erro');
        } else {
            if (estado == 'logar') {
                buscarUser(email, senha);
            }
            setEstado('logar');
        }
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
                    <Text style={styles.label}>E-mail de acesso: </Text>

                    <Input
                        onChangeText={
                            value => {
                                setEmail(value);
                                setErrorEmail(null);
                            }
                        }
                        keyboardType="email-address"
                        errorMessage={errorEmail}
                        autoCapitalize="none"
                        placeholder="         Digite seu email de acesso"
                        leftIcon={
                            <Icon
                                name='person-circle-sharp'
                                size={28}
                                color='orange'
                            />
                        } style={styles} />


                    <Text style={styles.label}>Senha</Text>
                    <Input
                        onChangeText={
                            value => {
                                setSenha(value);
                                setErrorSenha(null);
                            }}
                        autoCapitalize="none"
                        errorMessage={errorSenha}
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
                    />

                    {/* Comentário: A função de login será acionada aqui, através do intermédio da Const entrar(estado) 
                     15/10/2021: Função de login não totalmente implementada, precisa ser revista até o final do projeto
                       onPress={() => { entrar(estado) }}
                                  onPress={() => { Actions.homeIndex() }}
                     */}
                    <Button style={styles}
                        onPress={() => { entrar(estado) }}
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
                        }} />

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
