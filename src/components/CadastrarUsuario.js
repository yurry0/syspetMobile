import React, { useState, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput
} from 'react-native';
import styles from '../styles/usuario/Cadastrar_Usuario'
import Mybutton from '../elements/MyButton'

import Db from '../../db';

var db = new Db();

const insereDado = (nome, login, senha) => {
  db.initDb();
  let usuario = {
    nome: nome,
    login: login,
    senha: senha
  }
  db.addUsuario(usuario);
}

//const CadastrarUsuario = ({ navigation }) => 

const CadastrarUsuario = (props) => {

  const [id, setId] = useState('');
  const [user, setUser] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [estado, setEstado] = useState('cadastro');

  useEffect(() => {
    setId(props.id);
    setUser(props.nome);
    setSenha(props.senha);
    setEstado(props.estado);
  }, []);


  const salvar = (estado) => {
    if (estado == 'cadastro') {
      insereDado(user, login, senha);
    } else {
      alteraDado(id, user,login, senha);
    }
    setEstado('cadastro');
  }

  return (
    <View style={styles.container_header}>

      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }} >

          <Text style={styles.header}>Preencha os campos para cadastrar um novo usuário</Text>


          <Text> Nome de usuário </Text>

          <TextInput
            style={styles.barra}
            placeholder="Digite o nome do usuário"
            keyboardType="default"
            onChangeText={
              user => setUser(user)
            }

          />

          <Text> Email </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite seu e-mail de acesso"
            keyboardType="email-address"
            onChangeText={
              login => setLogin(login)}
          />
          <Text> Senha </Text>
          <TextInput
            style={styles.barra}
            secureTextEntry={true}
            placeholder="Digite a senha do usuário"
            onChangeText={
              senha => setSenha(senha)
            }

          />

          <Mybutton title={"Cadastrar"}
            customClick={salvar(estado)} />


        </KeyboardAvoidingView>
      </ScrollView>
    </View>

  )

};
