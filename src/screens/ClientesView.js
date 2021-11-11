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


const ClientesView = (props) => {
  const [id, setId] = useState('');
  const [cli_nome, setCliNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [cli_rg, setCliRG] = useState('');
  const [cli_estado, setCliEstado] = useState('');
  const [cli_cep, setCliCep] = useState('');
  const [cli_endereco, setCliEndereco] = useState('');
  const [cli_bairro, setCliBairro] = useState('');
  const [cli_email, setCliEmail] = useState('');

  const [estado, setEstado] = useState('editar');


  useEffect(() => {
    setId(props.id);
    setCliNome(props.cli_nome);
    setCidade(props.cidade);
    setCliRG(props.cli_rg);
    setCliEstado(props.cli_estado);
    setCliCep(props.cli_cep);
    setCliBairro(props.cli_bairro);
    setCliEndereco(props.cli_endereco);
    setCliEmail(props.cli_email);

  }, []);

  return (
    <View style={styles.container}>
            <Image
                        style={styles.logo}
                        source={require('../assets/icon_personalizado/user.png')} />
      <Text style={styles.label}> Perfil do usuário </Text>

      <View style={styles.container_profile}>
        <Text style={styles.text_title}> ID no Sistema: <Text style={styles.text_profile}> {id} </Text> </Text>
        <Text style={styles.text_title}> Nome: <Text style={styles.text_profile}>  {cli_nome} </Text> </Text>
        <Text style={styles.text_title}> RG: <Text style={styles.text_profile}>  {cli_rg} </Text> </Text>
        <Text style={styles.text_title}> Endereço: <Text style={styles.text_profile}>  {cli_endereco} </Text> </Text>
        <Text style={styles.text_title}> Bairro: <Text style={styles.text_profile}>  {cli_bairro} </Text> </Text>
        <Text style={styles.text_title}> Cidade: <Text style={styles.text_profile}>  {cidade} </Text> </Text>
        <Text style={styles.text_title}> Estado: <Text style={styles.text_profile}>  {cli_estado} </Text> </Text>
        <Text style={styles.text_title}> CEP: <Text style={styles.text_profile}>  {cli_cep} </Text> </Text>
        <Text style={styles.text_title}> E-mail: <Text style={styles.text_profile}>  {cli_email} </Text> </Text>
      </View>
    </View>


  )
};
export default ClientesView;
