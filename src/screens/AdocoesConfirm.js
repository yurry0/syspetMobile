import React, { useState, useEffect, Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import styles from '../styles/adocoes/AdocoesCadastrarPet'

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Db from '../../db';


var db = new Db();

//InsereDado: Método que insere a adoção na tabela;
const insereDado = (id_cliente, id_pet) => {
  db.initDb();
  let adocao = {
    id_cliente: id_cliente,
    id_pet: id_pet
  }
  db.conferePetAdotado(adocao);
}

const AdocoesConfirm = (props) => {
  //Criando states que vão receber variáveis entre telas;

  const [id, setId] = useState('');

  const [id_cliente, setIdCliente] = useState('');
  const [nome_cliente, setNomeCliente] = useState('');

  const [id_pet, setIdPet] = useState('');
  const [pet_nome, setPetNome] = useState('');

  const [estado, setEstado] = useState('cadastro');

  //setando States com os valores das telas anteriores;
  useEffect(() => {
    setId(props.id);

    setIdCliente(props.id_cliente);
    setNomeCliente(props.nome_cliente);

    setIdPet(props.id_pet);
    setPetNome(props.pet_nome);
  }, []);

  const salvar = (estado) => {
    if (estado == 'cadastro') {
      insereDado(id_cliente, id_pet);
    }
    setEstado('cadastro');
  }

  return (
    <View style={styles.container_header}>
      <Text style={{ fontSize: 32, margin: 20, textAlign: 'center', color: 'white' }}> Confirmar dados:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', borderWidth: 6, borderRadius: 40, borderStyle: 'dotted', borderColor: 'white' }}>
        <Icon name="plus" size={55} color="white" style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 10, marginHorizontal: 40 }}></Icon>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.botaoText}> ID do cliente: {id_cliente} </Text>
        <Text style={styles.botaoText}> Nome do cliente : {nome_cliente} </Text>
        <Text style={styles.botaoText}> --------------------------------------- </Text>
        <Text style={styles.botaoText}> ID do Pet: {id_pet} </Text>
        <Text style={styles.botaoText}> Nome do pet: {pet_nome} </Text>
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
          onPress={() => { salvar(estado) }}
          iconRight
          title="Adicionar Adoção   "
          titleStyle={{ color: 'white' }}
        />
      </View>
    </View>
  )
};

export default AdocoesConfirm;