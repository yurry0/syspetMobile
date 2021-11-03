import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, Button, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Db from '../../db'
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import { CommonActions } from '@react-navigation/routers';

    const base = new Db(); 

    const database_name = 'syspet_mob.db';


export default class ClientesIndex extends Component {
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
                    tx.executeSql('SELECT * FROM cliente', [], (tx, results) => {
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
        base.deletarCliente(id);
        this.props.navigation.navigate('ClientesIndex');
    }

    ListViewItemSeparator = () => {
        return (
            <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
    };
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.textoCab}>Lista dos Clientes</Text>
                </View>
                <FlatList
                    data={this.state.FlatListItems}//data recebe as informações buscadas na tabela cliente
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            key={item.id}
                            style={{ backgroundColor: '#B0C4DE', padding: 30, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <View>
                                <Text>Id: {item.pk_id_cliente}</Text>
                                <Text>Nome: {item.cli_nome}</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                <View style={{ marginRight: 5 }}>
                                    <Button title='Alterar' onPress={() => {
                                        Alert.alert('Alterar:', 'Deseja alterar o registro de ' + item.cli_nome,
                                            [
                                                { text: 'Sim', onPress: () => { this.props.navigation.navigate ('ClientesEditar', {cli_nome: item.cli_nome, cidade:item.cidade, pk_id_cliente: item.pk_id_cliente}) } },
                                                { text: 'Não' }

                                            ])

                                    }} />
                                </View>
                                <View>
                                    <Button title='Excluir' onPress={() => {
                                        Alert.alert('Excluir:', 'Deseja excluir o registro de ' + item.cli_nome,
                                            [
                                                { text: 'Sim', onPress: () => { this.deletar(item.pk_id_cliente) } },
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4682B4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCab: {
        color: '#fff',
        fontSize: 30,
        margin: 30
    },
    borda: {
        borderBottomWidth: 2
    }
});