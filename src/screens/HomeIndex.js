import React, { Component, useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/home'
import Db from '../../db';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
;

var db = new Db();

function mostrarNome(nome) {

    console.log(nome);

}


function logout() {

    Actions.login();
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const HomeIndex = (props) => {

    const [nome, setNome] = useState('');
    const [logado, setLogado] = useState('');

    useEffect(() => {
        setNome(props.nome);
        setLogado(true);
    }, []);


    // INICIALIZAÇÃO DAS TABELAS //
    db.initDb();
    db.initDbClientes();
    db.initDbPet();


    return (
        <View style={styles.container}>
            <Header
                backgroundColor="#FF6700"

                leftComponent={{
                    icon: 'logout', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => Alert.alert('Logout', 'Deseja realmente sair do sistema?',
                        [
                            { text: 'Não' },
                            { text: 'Sim', onPress: () => { Actions.login({ logado: false }) } }
                        ])
                }}
                centerComponent={{ text: 'Home - SyspetMob', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={{ justifyContent: 'flex-start' }}>



                <Image
                    style={styles.header_image}
                    source={require('../assets/teste_header.png')} />

                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center' }}>
                    Bem vindo ao Syspet!
                </Text>


                <Text style={{ fontSize: 20, textAlign: 'center', justifyContent: 'center', marginTop: 20 }}>
                    Através das abas, você poderá gerenciar informações como:
                </Text>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name="user" size={45} color="orange" style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginHorizontal: 40 }}></Icon>
                        <Text style={{ fontSize: 10, textAlign: 'center', justifyContent: 'center', marginTop: 1, marginLeft: 20 }}>
                            Clientes
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name="paw" size={45} color="orange" style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginHorizontal: 40 }}></Icon>
                        <Text style={{ fontSize: 10, textAlign: 'center', justifyContent: 'center', marginTop: 1, marginLeft: 20 }}>
                            Pets
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Icon name="plus" size={45} color="orange" style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginHorizontal: 40 }}></Icon>
                        <Text style={{ fontSize: 10, textAlign: 'center', justifyContent: 'center', marginTop: 1, marginLeft: 20 }}>
                            Adoções
                        </Text>
                    </View>



                </View>

            </View>

            <Text style={{ fontSize: 15, textAlign: 'center', justifyContent: 'center', marginTop: 80 }}>
                Creative Code - 2021
            </Text>
        </View>
    )
}


export default HomeIndex;