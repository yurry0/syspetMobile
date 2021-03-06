import React, { Component, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Alert, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import ActionButton from 'react-native-action-button';
import Db from '../../db'
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import styles from '../styles/adocoes/AdocoesIndex'
import Icon from 'react-native-vector-icons/Ionicons';

const base = new Db();
const database_name = 'syspet_mob.db';

export default class AdocoesIndex extends Component {
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
                    tx.executeSql('SELECT pk_id_adocao, pk_id_pet, pk_id_cliente, nome, ' + "created_at," + 'cli_nome, raca, cli_rg FROM adocao INNER JOIN pet ON pet.pk_id_pet = adocao.id_pet INNER JOIN cliente ON cliente.pk_id_cliente = adocao.id_cliente   ', [], (tx, results) => {
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
    deletar = (id_pet, id) => {
        base.setNaoAdotado(id_pet);
        base.deletarAdocao(id);
        Actions.refresh({ key: 'AdocoesIndex' });
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
                    <Text style={styles.textoCab}>Ado????es</Text>
                    <Text>---------------------------------------------</Text>
                    <Text style={{ justifyContent: 'center', textAlign: 'center', fontSize: 15, marginBottom: 4, color: 'white' }}>Toque em um item da lista para obter mais detalhes de cada ado????o</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <ActionButton
                            style={{ marginTop: 20 }}
                            offsetY={10}
                            offsetX={0}
                            position="center"
                            buttonColor="rgba(0,0,255,1)"
                            onPress={() => { Actions.AdocoesCadastrar() }}
                        />
                        <TouchableOpacity style={{ marginLeft: 250 }} onPress={() => { Actions.refresh({ key: Math.random() }); }}>
                            <Icon name="sync" size={35} style={{ paddingBottom: 25, color: 'white' }}> </Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={this.state.FlatListItems}//data recebe as informa????es buscadas na tabela cliente
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            key={item.id}
                            style={{ backgroundColor: '#CBD4C2', padding: 30, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <View>
                                <TouchableOpacity onPress={() => { Actions.AdocoesView({ id_adocao: item.pk_id_adocao, id_cliente: item.pk_id_cliente, nome_cliente: item.cli_nome, rg_cliente: item.cli_rg, id_pet: item.pk_id_pet, raca_pet: item.raca, nome_pet: item.nome, data_adocao: item.created_at, estado: 'editar' }) }}>
                                    <Text>ID Ado????o: {item.pk_id_adocao}</Text>
                                    <Text>Nome do cliente: {item.cli_nome}</Text>
                                    <Text>Nome do Pet: {item.nome}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flexDirection: 'column', }}>

                                {/**                <View style={{ marginBottom: 20, marginLeft: 20 }}>
                                    <Button style={{ color: 'orange', margin: 20 }} title=' Alterar' onPress={() => {
                                        Alert.alert('Alterar:', 'Deseja alterar o registro da ado????o selecionada?',
                                            [
                                                { text: 'Sim', onPress: () => { Actions.AdocoesEditar({ id: item.pk_id_adocao, cliente: item.id_cliente, pet: item.id_pet, estado: 'editar' }) } },
                                                { text: 'N??o' }

                                            ])
                                    }} />
                                </View>*/}


                                <View style={{ marginBottom: 5, marginLeft: 20 }}>


                                    <Button buttonStyle={{ backgroundColor: 'red' }} title=' Excluir' icon={
                                        <Icon
                                            name="trash"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                        iconLeft onPress={() => {
                                            Alert.alert('Excluir:', 'Deseja excluir o registro da ado????o selecionada? ',
                                                [
                                                    { text: 'Sim', onPress: () => { this.deletar(item.pk_id_pet, item.pk_id_adocao) } },
                                                    { text: 'N??o', onPress: () => console.log('N??o') }
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

