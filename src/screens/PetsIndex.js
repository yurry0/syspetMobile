import React, { Component, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import ActionButton from 'react-native-action-button';
import Db from '../../db'
import { Actions } from 'react-native-router-flux';
import styles from '../styles/lista_generica'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

const base = new Db();

const database_name = 'syspet_mob.db';




export default class PetsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
        };
    }



    //
    componentDidMount() {
        let db;
        SQLite.openDatabase(
            database_name,
        )
            .then(DB => {
                db = DB;
                db.transaction(tx => {
                    tx.executeSql('SELECT * FROM pet', [], (tx, results) => {
                        var temp = [];
                        for (let i = 0; i < results.rows.length; ++i) {
                            temp.push(results.rows.item(i));
                        }
                        this.setState({
                            FlatListItems: temp,
                        });
                    });
                });
            })
    }


    deletar = (id) => {
        base.deletarPet(id);
        Actions.refresh({ key: 'PetsIndex' });
    }

    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
    };
    render() {

        return (

            <View style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Text style={styles.textoCab}>Pets</Text>
                    <Text>---------------------------------------------</Text>
                    <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 15, marginBottom: 4, color: 'white' }}>Toque em um item da lista para obter mais detalhes de cada pet</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <ActionButton
                            style={{ marginTop: 20 }}
                            offsetY={10}
                            offsetX={0}
                            position="center"
                            buttonColor="rgba(0,0,255,1)"
                            onPress={() => { Actions.PetsCadastrar() }}
                        />
                        <TouchableOpacity style={{ marginLeft: 250 }} onPress={() => { Actions.refresh({ key: Math.random() }); }}>
                            <Icon name="sync" size={35} style={{ paddingBottom: 25, color: 'white' }}> </Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={this.state.FlatListItems}//data recebe as informações buscadas na tabela cliente
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            key={item.id}
                            style={{ backgroundColor: 'white', padding: 30, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <View>

                                <Text>Id: {item.pk_id_pet}</Text>
                                <TouchableOpacity onPress={() => { Actions.PetsView({ id: item.pk_id_pet, nome: item.nome, raca: item.raca, sexo: item.sexo, idade: item.idade, vacinas: item.vacinas, altura: item.altura, peso: item.peso, especie: item.especie, pelagem: item.pelagem, porte: item.porte, adotado: item.adotado, cod_interno: item.cod_interno }) }}>
                                    <Text>Nome: {item.nome}</Text>
                                    <Text>Raça: {item.raca}</Text>

                                </TouchableOpacity>

                            </View>
                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>

                                <View style={{ marginRight: 5 }}>
                                    <Button style={styles.botao} title='Alterar' icon={
                                        <Icon
                                            name="create-outline"
                                            size={15}
                                            color="white"
                                        />
                                    } buttonStyle={{ backgroundColor: 'orange' }} onPress={() => {
                                        Alert.alert('Alterar:', 'Deseja alterar o registro de ' + item.nome + '?',
                                            [
                                                { text: 'Sim', onPress: () => { Actions.PetsEditar({ id: item.pk_id_pet, nome: item.nome, raca: item.raca, sexo: item.sexo, idade: item.idade, vacinas: item.vacinas, altura: item.altura, peso: item.peso, especie: item.especie, pelagem: item.pelagem, porte: item.porte, adotado: item.adotado, cod_interno: item.cod_interno, estado: 'editar' }) } },
                                                { text: 'Não' }

                                            ])

                                    }} />
                                </View>
                                <View>
                                    <Button style={styles.botao} icon={
                                        <Icon
                                            name="trash-outline"
                                            size={15}
                                            color="white"
                                        />} buttonStyle={{ backgroundColor: 'red' }} title='Excluir' onPress={() => {
                                            Alert.alert('Excluir:', 'Deseja excluir o registro de ' + item.nome,
                                                [
                                                    { text: 'Sim', onPress: () => { this.deletar(item.pk_id_pet) } },
                                                    { text: 'Não', onPress: () => console.log('Não') }
                                                ]);
                                        }} />
                                </View>
                            </View>
                        </View>

                    )}
                />
            </View>
        );
    }
}

