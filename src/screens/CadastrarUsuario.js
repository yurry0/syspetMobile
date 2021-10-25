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

const CadastrarUsuario = ({ navigation }, props) => {

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
    if(login.length == 0 || senha.length == 0 || repetirSenha.length == 0 ){
      Alert.alert('Erro', 'Um ou mais campos estão em branco!');

    }

    else if (senha != repetirSenha ){
      Alert.alert('Erro', 'senhas não conferem');
    }
    
   if(estado == 'cadastro'){
      insereDado(user, login, senha);

      navigation.navigate('Login');
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


          <Text style={styles.textoInput}> Nome de usuário </Text>

          <TextInput
            style={styles.barra}
            placeholder="Digite o nome do usuário"
            keyboardType="default"
            onChangeText={
              user => setUser(user)
            }

          />

          <Text style={styles.textoInput}> Email </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite seu e-mail de acesso"
            keyboardType="email-address"
            autoCapitalize='none'
            onChangeText={
              login => setLogin(login)}
          />
          <Text style={styles.textoInput}> Senha </Text>
          <TextInput
            style={styles.barra}
            secureTextEntry={true}
            placeholder="Digite a senha do usuário"
            autoCapitalize='none'
            onChangeText={
              senha => setSenha(senha)
            }

          />

          <Text style={styles.textoInput}> Repetir Senha </Text>
          <TextInput
            style={styles.barra}
            secureTextEntry={true}
            placeholder="Confirme a senha"
            autoCapitalize='none'
            onChangeText={
              repetirSenha => setRepetirSenha(repetirSenha)
            }
          />


          <TouchableOpacity style={styles.botao} onPress={() => { salvar(estado) }} >
            <Text style={styles.botaoText}>Salvar Cadastro</Text>
          </TouchableOpacity>


        </KeyboardAvoidingView>
      </ScrollView>
    </View>

  )

};

export default CadastrarUsuario;
