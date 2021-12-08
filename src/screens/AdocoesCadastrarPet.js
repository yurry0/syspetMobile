import React, { useState, useEffect, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Picker
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import styles from '../styles/adocoes/AdocoesCadastrarPet'
import Db from '../../db';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Header, ListItem, CheckBox } from 'react-native-elements';


var db = new Db();
const database_name = 'syspet_mob.db';


export default class CadastrarAdocaoPet extends Component {


  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem bottomDivider >
      <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }} />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
      ids: [],
      checked: true,
    };
  }
  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    return isThere;
  };
  toggleChecked = (itemId) => {
    const ids = [...this.state.ids, itemId];
    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
  };
  //Método nativo que será executado ao carregar a abertura do arquivo(Tela Lista)
  componentDidMount() {
    let db;
    SQLite.openDatabase(
      database_name,
    )
      .then(DB => {
        db = DB;
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM pet WHERE adotado IS NULL', [], (tx, results) => {
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
  render() {
    return (
      <View style={styles.container_header}>
        <Text style={{ fontSize: 32, margin: 20, textAlign: 'center', color: 'white' }}> Toque em um dos pets listados para seleciona-lo:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 6, borderRadius: 40, borderStyle: 'dotted', borderColor: 'white' }}>
          <Icon name="paw" size={65} color="white" style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 10, marginHorizontal: 40 }}></Icon>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={this.state.FlatListItems}//data recebe as informações buscadas na tabela cliente
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{ backgroundColor: '#336699', padding: 20, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style>

              <TouchableOpacity onPress={() => { Actions.AdocoesCadastrarCliente({id_pet: item.pk_id_pet, pet_nome: item.nome, pet_raca: item.raca  }) }}>
                  <Text style={{ color: 'white', textShadowRadius: 50 }}>Código Interno: {item.cod_interno}</Text>
                  <Text style={{ color: 'white', textShadowRadius: 50 }}>Nome: {item.nome}</Text>

                </TouchableOpacity>


              </View>


              <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>

             
              </View>

            </View>

          )}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
          <Button
            buttonStyle={{ marginTop: 5, width: 200 }}
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            iconRight
            title="Próximo   "
            titleStyle={{ color: 'white' }}
          />

        </View>
      </View>

    )
  }
};

