import React, { useState, useEffect, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from 'react-native';
import { Input, Button } from 'react-native-elements'
import styles from '../styles/cadastro_generico'
import Icon from 'react-native-vector-icons/FontAwesome'

import Db from '../../db';

var db = new Db();


const insereDado = (nome, email, senha) => {
  db.initDb();
  let usuario = {
    nome: nome,
    email: email,
    senha: senha
  }
  db.confereUsuario(usuario);

}

//const CadastrarUsuario = ({ navigation }) => 

const CadastrarUsuario = ({ navigation }, props) => {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [errorRepetirSenha, setErrorRepetirSenha] = useState('');
  const [estado, setEstado] = useState('cadastro');

  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorNome(null)
    setErrorSenha(null)
    setErrorRepetirSenha(null)

    const regexSenha = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const noNumber = /^([^0-9]*)$/
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex = /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=._-]+$/g

    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("O formato do email está incorreto!")
      error = true
    }

    if (email == null) {
      setErrorEmail("O campo 'email' está em branco!")
      error = true
    }
    if (!regex.test(String(nome).toLowerCase())) {
      setErrorNome("O campo 'nome' contém caracteres especiais!")
      error = true
    }

    if (!noNumber.test(String(nome).toLowerCase())) {
      setErrorNome("O campo 'nome' contém números!")
      error = true
    }


    if (nome == null) {
      setErrorNome("O campo 'nome' está em branco!")
      error = true
    }

    if (senha == null) {
      setErrorSenha("O campo 'senha' está em branco!")
      error = true
    }


    if (repetirSenha == null) {
      setErrorRepetirSenha("O campo 'repetir senha' está em branco!")
      error = true
    }

    if (!regexSenha.test(String(senha).toLowerCase())) {
      setErrorSenha("A senha não obedece a todos os critérios: Mínimo 8 digitos, pelo menos um número e um caractere especial.")
      error = true
    }

    if (repetirSenha != senha) {
      setErrorRepetirSenha("As senhas digitadas não conferem!")
      error = true
    }

    return !error
  }

  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

  useEffect(() => {
    setId(props.id);
    setNome(props.nome);
    setEmail(props.email);
    setSenha(props.senha);
    setEstado(props.estado);
  }, []);

  const salvar = (estado) => {
    if (validar() == false) {
      console.log('Deu erro');
      console.log(senha);
      console.log(email)
    } else {
        if (estado == 'cadastro') {
          insereDado(nome, email, senha);
        }

      setEstado('cadastro');
    }
  }
  return (
    <View style={styles.container_header}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'space-between' }} >
        <ScrollView keyboardShouldPersistTaps="handled">

          <View style={styles.formulario}>
            <Text style={styles.header}>Preencha os campos para cadastrar um novo usuário</Text>


            <Text style={styles.textoInput}> Nome de usuário </Text>

            <Input
              style={styles.barra}
              placeholder="Digite o nome do usuário"
              keyboardType="default"
              onChangeText={
                value => {
                  setNome(value);
                  setErrorNome(null);
                }
              }
              errorMessage={errorNome}
            />

            <Text style={styles.textoInput}> Email </Text>
            <Input
              style={styles.barra}
              placeholder="Digite seu e-mail de acesso"
              keyboardType="email-address"
              autoCapitalize='none'
              onChangeText={value => {
                setEmail(value);
                setErrorEmail(null);
              }}
              errorMessage={errorEmail}
            />

            <Text style={styles.textoInput}> Senha </Text>
            <Input
              style={styles.barra}
              secureTextEntry={true}
              placeholder="Mínimo 8 digitos, pelo menos um número e um caractere especial"
              maxLength={16}
              autoCapitalize='none'
              onChangeText={value => {
                setSenha(value);
                setErrorSenha(null);
              }
              }
              errorMessage={errorSenha}
            />
            <Text style={styles.textoInput}> Repetir Senha </Text>
            <Input
              style={styles.barra}
              secureTextEntry={true}
              placeholder="Confirme a senha"
              autoCapitalize='none'
              maxLength={16}
              onChangeText={value => {
                setRepetirSenha(value);
                setErrorRepetirSenha(null);
              }
              }
              errorMessage={errorRepetirSenha}
            />
            <Button
              icon={{
                name: "check-circle",
                size: 15,
                color: "white"
              }}
              title="Cadastrar"
              buttonStyle={{ width: 250, marginTop: 20, marginBottom: 40 }}
              onPress={() => { salvar(estado) }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View >
  )
};
export default CadastrarUsuario;
