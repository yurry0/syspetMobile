import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import styles from '../styles/adocoes/AdocoesCadastrarPet'
import Db from '../../db';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


const insereDado = (nome, email, senha) => {
  db.initDb();
  let adocao = {
    id_cliente: id_cliente,
    id_pet: id_pet,
  }
  db.addAdocao(adocao);



}


const AdocoesConfirm = (props) => {





  return (
    <View style={styles.container_header}>

      <Text style={{ fontSize: 32, margin: 20, textAlign: 'center', color: 'white' }}> Confirmar dados:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 6, borderRadius: 40, borderStyle: 'dotted', borderColor: 'white' }}>
        <Icon name="plus" size={55} color="white" style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginHorizontal: 40 }}></Icon>


      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.botaoText}> ID do cliente: {this.state.id_cliente} </Text>
        <Text style={styles.botaoText}> Nome do cliente : {this.state.nome_cliente} </Text>
        <Text style={styles.botaoText}> --------------------------------------- </Text>
        <Text style={styles.botaoText}> ID do Pet: {this.state.pet_id} </Text>
        <Text style={styles.botaoText}> Nome do pet: {this.state.pet_nome} </Text>

      </View>



      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80, marginBottom: 50 }}>


        <Button



          buttonStyle={{ marginTop: 5, width: 200, backgroundColor: 'green' }}
          icon={
            <Icon
              name="check"
              size={15}
              color="white"
            />
          }
          iconRight
          title="Adicionar Adoção   "
          titleStyle={{ color: 'white' }}
        />

      </View>
    </View>

  )

};

