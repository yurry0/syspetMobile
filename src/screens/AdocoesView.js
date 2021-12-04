import React, { useState, useEffect, Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
import styles from '../styles/clientes/ClientesView';
import { Actions } from 'react-native-router-flux';
import Db from '../../db';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


var db = new Db();


db.initDb();


const AdocoesView = (props) => {
    const [id_adocao, setIdAdocao] = useState('');
    const [data_adocao, setDataAdocao] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [nome_cliente, setNomeCliente] = useState('');
    const [rg_cliente, setRgCliente] = useState('');

    const [id_pet, setIdPet] = useState('');
    const [nome_pet, setNomePet] = useState('');
    const [raca_pet, setRacaPet] = useState('');



    useEffect(() => {
        setIdAdocao(props.id_adocao);
        setDataAdocao(props.data_adocao);

        setIdCliente(props.id_cliente);
        setNomeCliente(props.nome_cliente);
        setRgCliente(props.rg_cliente);

        setIdPet(props.id_pet);
        setRacaPet(props.raca_pet);
        setNomePet(props.nome_pet);

    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={{ marginTop: 20, marginLeft: 10, letterSpacing: 2 }}>
                    ID da Adoção: {id_adocao}

                </Text>
                <Text style={{ marginTop: 20, marginLeft: 10, letterSpacing: 2 }}>
                    Data da Adoção: {data_adocao}

                </Text>

                <Divider
                    orientation="horizontal"
                    subHeader="--------------------------------------------------------------------------"
                    subHeaderStyle={{ color: 'brown' }}
                />

                <Icon name="paw" size={65} color="orange" style={{ alignSelf: 'center', marginRight: 45, marginTop: 10, marginHorizontal: 40 }}></Icon>


                <Text style={styles.label}> Perfil do Pet </Text>

                <View style={styles.container_profile}>
                    <Text style={styles.text_title}> ID do Pet: <Text style={styles.text_profile}> {id_pet} </Text> </Text>
                    <Text style={styles.text_title}> Nome do Pet: <Text style={styles.text_profile}> {nome_pet} </Text> </Text>
                    <Text style={styles.text_title}> Raça do Pet: <Text style={styles.text_profile}> {raca_pet} </Text> </Text>

                </View>


                <Icon name="user" size={65} color="orange" style={{ alignSelf: 'center', marginRight: 45, marginTop: 10, marginHorizontal: 40 }}></Icon>

                <Text style={styles.label}> Perfil do Cliente </Text>

                <View style={styles.container_profile}>
                    <Text style={styles.text_title}> ID do Pet: <Text style={styles.text_profile}> {id_cliente} </Text> </Text>
                    <Text style={styles.text_title}> Nome do cliente: <Text style={styles.text_profile}> {nome_cliente} </Text> </Text>
                    <Text style={styles.text_title}> RG do cliente: <Text style={styles.text_profile}> {rg_cliente} </Text> </Text>

                </View>
            </ScrollView>

        </View>


    )
};
export default AdocoesView;
