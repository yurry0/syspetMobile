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
  Button
} from 'react-native';
import styles from '../styles/clientes/ClientesCadastrar'
import { Actions } from 'react-native-router-flux';
import Db from '../../db';

var db = new Db();



const editaDado = (cli_nome, cidade, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_email,cli_rg, id) => {
  db.initDb();
  let cliente = {
    cli_nome: cli_nome,
    cidade: cidade,
    cli_estado: cli_estado,
    cli_cep: cli_cep,
    cli_endereco: cli_endereco,
    cli_bairro: cli_bairro,
    cli_rg: cli_rg,
    cli_email: cli_email,
    pk_id_cliente: id
  }
  db.updateCliente(cliente);
}



const ClientesEditar = (props) => {
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

  function mostrarValores() {
    console.log(id);
    console.log(cli_endereco);
    console.log(cli_email);
  }

  //Autenticação de campos // 

  const editar = (estado) => {
    if (cli_nome.length == 0 || cidade.length == 0 || cli_rg.length == 0 || cli_estado.length == 0 || cli_cep == 0 || cli_endereco == 0 || cli_bairro == 0 || cli_email == 0) {
      Alert.alert('Erro', 'Um ou mais campos estão em branco!');
    }
    else if (cli_nome.length == null || cidade.length == null || cli_rg.length == null || cli_estado.length == null || cli_cep == null || cli_endereco == null || cli_bairro == null || cli_email == null) {
      Alert.alert('NULL', 'NULLNULLNULLNULL');
    }

    //Checa a flag de estado para iniciar edição
    if (estado == 'editar') {
      editaDado(cli_nome, cidade, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_rg,  cli_email, id);
   
    }
    setEstado('editar');
  }

  return (
    <View style={styles.container_header}>

      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ margin: 5, justifyContent: 'center', alignSelf: 'center' }} onPress={() => { mostrarValores() }}>
            <Text> TESTE </Text>
          </TouchableOpacity>


          <Text style={styles.header}> Editar Cliente</Text>
          <TextInput
            style={styles.barra}
            editable={false}
            placeholder="Valor do ID"
            keyboardType="default"
            defaultValue={id.toString()}
            onChangeText={
              id => setId(id)
            }
          />


          <Text style={styles.textoInput}> Nome de cliente </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o nome do cliente"
            keyboardType="default"
            defaultValue={cli_nome}
            onChangeText={
              cli_nome => setCliNome(cli_nome)
            }
          />


          <Text style={styles.textoInput}> CEP </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o CEP do usuário"
            autoCapitalize='none'
            keyboardType='numeric'
            defaultValue={cli_cep.toString()}
            onChangeText={
              cli_cep => setCliCep(cli_cep)
            }

          />


          <Text style={styles.textoInput}> Endereço </Text>
          <TextInput
            style={styles.barra}
            keyboardType='default'
            placeholder="Digite o CEP do usuário"
            defaultValue={cli_endereco}
            onChangeText={
              cli_endereco => setCliEndereco(cli_endereco)
            }
          />

          <Text style={styles.textoInput}> Bairro </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o CEP do usuário"
            defaultValue={cli_bairro}
            onChangeText={
              cli_bairro => setCliBairro(cli_bairro)
            }
          />

          <Text style={styles.textoInput}> Cidade </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite a cidade do cliente"
            keyboardType="default"
            defaultValue={cidade}
            onChangeText={
              cidade => setCidade(cidade)
            }
          />
          <Text style={styles.textoInput}> Estado </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o estado do cliente"
            keyboardType="default"
            defaultValue={cli_estado}
            onChangeText={
              cli_estado => setCliEstado(cli_estado)
            }
          />
          <Text style={styles.textoInput}> RG </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o RG do cliente"
            keyboardType="numeric"
            defaultValue={cli_rg.toString()}
            onChangeText={
              cli_rg => setCliRG(cli_rg)
            }
          />
          <Text style={styles.textoInput}> E-mail </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o e-mail do cliente"
            keyboardType="email-address"
            autoCapitalize="none"
            defaultValue={cli_email.toString()}
            onChangeText={
              cli_email => setCliEmail(cli_email)}
          />
          <TouchableOpacity style={styles.botao} onPress={() => { editar(estado) }} >
            <Text style={styles.botaoText}>Editar Cadastro</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>


  )
};
export default ClientesEditar;
