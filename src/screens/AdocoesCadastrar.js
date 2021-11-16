import React, { useState, useEffect, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import styles from '../styles/cadastro_generico'
import Db from '../../db';

var db = new Db();


const insereDado = (id_cliente, id_pet, deletado) => {
  db.initDb();
  let adocao = {
    id_cliente: id_cliente,
    id_pet: id_pet,
    deletado: deletado
  }
  db.addAdocao(adocao);
}

//const CadastrarUsuario = ({ navigation }) => 

const AdocoesCadastrar = (props) => {
  const [id_adocao, setIdAdocao] = useState('');
  const [id_cliente, setIdCliente] = useState('');
  const [id_pet, setIdPet] = useState('');
  const [deletado, setDeletado] = useState('');
  const [estado, setEstado] = useState('cadastro');

  useEffect(() => {
    setIdAdocao(props.id_adocao);
    setIdCliente(props.id_cliente);
    setIdPet(props.id_pet);
    setDeletado(props.deletado);
  }, []);

  const salvar = (estado) => {
    {/*     if (login.length == 0 || senha.length == 0 || repetirSenha.length == 0) {
      Alert.alert('Erro', 'Um ou mais campos estão em branco!');

    }

    else if (senha != repetirSenha) {
      Alert.alert('Erro', 'senhas não conferem');
    }
*/}

    if (estado == 'cadastro') {
      insereDado(id_cliente, id_pet, deletado);

      navigation.navigate('AdocoesIndex');
    }
    setEstado('cadastro');
  }

  return (
    <View style={styles.container_header}>

      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }} >

          <Text style={styles.header}>Preencha os campos para cadastrar um novo cliente</Text>


          <Text style={styles.textoInput}> ID do Cliente </Text>

          <TextInput
            style={styles.barra}
            keyboardType="default"
            value="ID_CLIENTE"
            editable={false}
            onChangeText={
              id_pet => setIdPet(id_pet)
            }

          />

          <Text style={styles.textoInput}> Nome do Cliente </Text>

          <TextInput
            style={styles.barra}
            keyboardType="default"
            editable={false}
            value="NOME_CLIENTE"
            editable={false}
          />


          <Text style={styles.textoInput}> ID do Pet </Text>

          <TextInput
            style={styles.barra}
            placeholder=""
            keyboardType="default"
            value="ID_PET"
            editable={false}
          />


          <Text style={styles.textoInput}> Nome do Pet</Text>

          <TextInput
            style={styles.barra}
            placeholder=""
            keyboardType="default"
            value="NOME_PET"
            editable={false}
          />

          <TouchableOpacity style={styles.botao} onPress={() => { salvar(estado) }} >
            <Text style={styles.botaoText}>Confirmar Adoção</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
};
export default AdocoesCadastrar;
