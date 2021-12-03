import React, { useState, useEffect, Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    TextInput,
    Button
} from 'react-native';
import styles from '../styles/clientes/ClientesView';
import { Actions } from 'react-native-router-flux';
import Db from '../../db';

var db = new Db();


db.initDb();


const AdocoesView = (props) => {
    const [id_adocao, setIdAdocao] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [nome_cliente, setNomeCliente] = useState('');
    const [id_pet, setIdPet] = useState('');



    useEffect(() => {
        setIdCliente(props.id_cliente);
        setIdPet(props.id_pet);
        setIdAdocao(props.id_adocao);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/icon_personalizado/user.png')} />
            <Text style={styles.label}> Perfil do usuário </Text>

            <View style={styles.container_profile}>
                <Text style={styles.text_title}> ID da adocao: <Text style={styles.text_profile}> {id_adocao} </Text> </Text>
                <Text style={styles.text_title}> ID do Cliente: <Text style={styles.text_profile}> {id_cliente} </Text> </Text>
                <Text style={styles.text_title}> ID do Pet: <Text style={styles.text_profile}> {id_pet} </Text> </Text>
            </View>
        </View>


    )
};
export default AdocoesView;
