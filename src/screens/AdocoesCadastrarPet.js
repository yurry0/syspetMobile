import React, { useState, useEffect, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Picker
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import styles from '../styles/adocoes/AdocoesCadastrar'
import Db from '../../db';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ThemeProvider, Divider, Header } from 'react-native-elements';


var db = new Db();
const database_name = 'syspet_mob.db';


//const CadastrarUsuario = ({ navigation }) => 

const AdocoesCadastrarPet = (props) => {





  return (
    <View style={styles.container_header}>

      <Text style={{ fontSize: 32, margin: 20, textAlign: 'center', color: 'white' }}> Bem vindo ao processo de Realizar Adoções!</Text>
      <View style={{ flexDirection: 'row', borderWidth: 6, borderRadius: 40, borderStyle: 'dotted', borderColor: 'white' }}>
        <Icon name="user" size={65} color="white" style={{ alignSelf: 'flex-start', marginLeft: 10, marginTop: 10, marginHorizontal: 40 }}></Icon>
        <Icon name="plus" size={65} color="white" style={{ alignSelf: 'flex-start', marginLeft: 50, marginTop: 10, marginHorizontal: 40 }}></Icon>
        <Icon name="paw" size={65} color="white" style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 10, marginHorizontal: 40 }}></Icon>
      </View>
      <Text style={{ fontSize: 25, margin: 20, textAlign: 'center', color: 'white' }}> Siga as instruções em cada página para realizar a adoção: </Text>
      <Button
      buttonStyle={{ marginTop: 20, width: 200}}
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        iconRight
        title="Começar   "
        titleStyle={{color: 'white'}}
      />
    </View>

  )
};
export default AdocoesCadastrarPet;
