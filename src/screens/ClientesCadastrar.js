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
import { Input, Button } from 'react-native-elements'


var db = new Db();


const insereDado = (cli_nome, cidade, cli_rg, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_email) => {
  db.initDb();
  let cliente = {
    cli_nome: cli_nome,
    cidade: cidade,
    cli_rg: cli_rg,
    cli_estado: cli_estado,
    cli_cep: cli_cep,
    cli_endereco: cli_endereco,
    cli_bairro: cli_bairro,
    cli_email: cli_email
  }
  db.confereClienteRg(cliente);
}



const ClientesCadastrar = (props) => {

  const [id, setId] = useState('');

  const [cli_nome, setCliNome] = useState('');
  const [errorCliNome, setErrorCliNome] = useState('');

  const [cidade, setCidade] = useState('');
  const [errorCidade, setErrorCidade] = useState('');

  const [cli_rg, setCliRG] = useState('');
  const [errorCliRg, setErrorCliRg] = useState('');

  const [cli_estado, setCliEstado] = useState('');
  const [errorCliEstado, setErrorCliEstado] = useState('');

  const [cli_cep, setCliCep] = useState('');
  const [errorCliCep, setErrorCliCep] = useState('');

  const [cli_endereco, setCliEndereco] = useState('');
  const [errorCliEndereco, setErrorCliEndereco] = useState('');


  const [cli_bairro, setCliBairro] = useState('');
  const [errorCliBairro, setErrorCliBairro] = useState('');


  const [cli_email, setCliEmail] = useState('');
  const [errorCliEmail, setErrorCliEmail] = useState('');



  const [estado, setEstado] = useState('cadastro');


  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

  const validar = () => {
    let error = false

    setErrorCliNome(null);
    setErrorCidade(null);
    setErrorCliRg(null);
    setErrorCliEstado(null);
    setErrorCliCep(null);
    setErrorCliEndereco(null);
    setErrorCliBairro(null);
    setErrorCliEmail(null);

    //regex: só número:

    const onlyNumber = /^[0-9]*$/

    //Regex: modelo e-mail:
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Regex: não permite números:
    const noNumber = /^([^0-9]*)$/
    //Regex: só permite "." como caractere especial:
    const regexPonto = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\""|\;|\:|\s/g
    //Regex: Não permite caracteres especiais:
    const regex = /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=._-]+$/g
    //Regex: aceita números e espaço, mas só depois de algum input de caractere:
    const spaceNumber = /^(?!(?:[0-9]+| +)$).*$/
    //Regex: permite somente hifen e alfabeto:
    const hifen = /^[0-9A-Za-z_@'-]+$/
    //Regex: alfanumerico + Espaço:
    const alpha = /^[\w\-\s]+$/

    //------------------cli_nome----------------------//
    if (cli_nome == null) {
      setErrorCliNome("O campo 'nome' está em branco!")
      error = true
    }


    if (!regex.test(String(cli_nome).toLowerCase())) {
      setErrorCliNome("O campo 'nome' contém caracteres especiais!")
      error = true
    }

    if (!noNumber.test(String(cli_nome).toLowerCase())) {
      setErrorCliNome("O campo 'nome' contém números!")
      error = true
    }

    if (String(cli_nome).startsWith("-")) {
      setErrorCliNome("O campo 'nome' contém caracteres especiais!")
      error = true

    }


    //---------------------------------------------//

    //------------------Cidade----------------------//

    if (cidade == null) {
      setErrorCidade("O campo 'raça' está em branco!")
      error = true
    }

    else {

      if (!alpha.test(String(cidade).toLowerCase())) {
        setErrorCidade("O campo 'raça' contém caracteres não permitidos!")
        error = true
      }


      if (!noNumber.test(String(cidade).toLowerCase())) {
        setErrorCidade("O campo 'raça' contém números!")
        error = true
      }


      if (String(cidade).startsWith("-")) {
        setErrorCidade("O campo 'nome' contém somente caracteres especiais!")
        error = true

      }

      if (String(cidade).startsWith(" ")) {
        setErrorCidade("O campo 'nome' contém somente caracteres especiais!")
        error = true

      }

    }
    //---------------------=----------------------//


    //------------------cli_rg----------------------//
    if (cli_rg == null) {
      setErrorCliRg("O campo 'RG' está em branco!")
      error = true
    }

    if (cli_rg.length < 9) {
      setErrorCliRg("O campo 'RG' não está preenchida completamente.");
      error = true;
    }

    if (!onlyNumber.test(String(cli_rg).toLowerCase())) {
      setErrorCliRg("O campo 'RG' contém caracteres especiais!")
      error = true
    }



    if (String(cli_rg).startsWith("-")) {
      setErrorCliRg("O campo 'RG' contém caracteres especiais!")
      error = true

    }


    //---------------------------------------------//
    //------------------Estado----------------------//
    if (cli_estado == null) {
      setErrorCliEstado("O campo 'estado' está em branco!")
      error = true
    }


    if (!alpha.test(String(cli_estado).toLowerCase())) {
      setErrorCliEstado("O campo 'estado' contém caracteres especiais!")
      error = true
    }

    if (!noNumber.test(String(cli_estado).toLowerCase())) {
      setErrorCliEstado("O campo 'estado' contém números!")
      error = true
    }

    if (String(cli_estado).startsWith("-")) {
      setErrorCliEstado("O campo 'estado' contém caracteres especiais!")
      error = true

    }
    if (String(cli_estado).startsWith(" ")) {
      setErrorCliEstado("O campo 'estado' contém caracteres especiais!")
      error = true

    }

    //---------------------CEP-----------------------//

    if (cli_cep == null) {
      setErrorCliCep("O campo 'CEP' está em branco!")
      error = true
    }

    if (cli_cep.length < 8) {
      setErrorCliCep("O campo 'CEP' não está preenchido completamente!")
      error = true
    }

    if (!onlyNumber.test(String(cli_cep).toLowerCase())) {
      setErrorCliCep("O campo 'CEP' contém caracteres não permitidos!")
      error = true
    }




    //--------------------------------------------//

    //---------------------Endereço-----------------------//

    if (cli_endereco == null) {
      setErrorCliCep("O campo 'endereço' está em branco!")
      error = true
    }
    else {
      if (!alpha.test(String(cli_endereco).toLowerCase())) {
        setErrorCliEndereco("O campo 'endereço' contém caracteres não permitidos!")
        error = true
      }


      if (String(cli_endereco).startsWith("-")) {
        setErrorCliEndereco("O campo 'estado' contém caracteres especiais!")
        error = true

      }
      if (String(cli_endereco).startsWith(" ")) {
        setErrorCliEndereco("O campo 'estado' contém caracteres especiais!")
        error = true

      }

    }

    //--------------------------------------------------//


    //------------------cli_bairro-----------------------//


    if (cli_bairro == null) {
      setErrorCliBairro("O campo 'bairro!' está em branco!")
      error = true
    }


    else {
      if (!alpha.test(String(cli_bairro).toLowerCase())) {
        setErrorCliBairro("O campo 'bairro' contém caracteres especiais!")
        error = true
      }

      if (String(cli_bairro).startsWith("-")) {
        setErrorCliBairro("O campo 'estado' contém caracteres especiais!")
        error = true

      }
      if (String(cli_bairro).startsWith(" ")) {
        setErrorCliBairro("O campo 'estado' contém caracteres especiais!")
        error = true

      }
    }
    //--------------------------------------------//


    //------------------- E-mail ----------------------//




    if (cli_email == null) {
      setErrorCliEmail("O campo 'e-mail' está em branco!")
      error = true
    }
    if (!re.test(String(cli_email).toLowerCase())) {
      setErrorCliEmail("O formato do e-mail está incorreto!")
      error = true
    }


    //------------------------------------------//
    return !error
  }

  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//








  useEffect(() => {
    setId(props.id);
    setCliNome(props.cli_nome);
    setCidade(props.cidade);
    setCliRG(props.cli_rg);
    setCliEstado(props.cli_estado);
    setCliCep(props.cli_Cep);
    setCliBairro(props.cli_bairro);
    setCliEndereco(props.cli_Endereco);
    setCliEmail(props.cli_email);
  }, []);


  const salvar = (estado) => {

    if (validar() == false) {
      console.log('Deu erro');
      console.log(cli_nome)
      console.log(cli_email)
      console.log(cli_rg)
    }

    else {
      if (estado == 'cadastro') {
        insereDado(cli_nome, cidade, cli_rg, cli_estado, cli_cep, cli_endereco, cli_bairro, cli_email);
      }
      setEstado('cadastro');

    }
  }

  return (
    <View style={styles.container_header}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'space-between' }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.formulario} >
            {/* ////////////////////// HEADER /////////////// */}
            <Text style={styles.header}>Preencha os campos para cadastrar um novo cliente</Text>
            {/* ////////////////////// HEADER /////////////// */}

            {/* ////////////////////// NOME_CLIENTE /////////////// */}

            <Text style={styles.textoInput}> Nome de cliente </Text>

            <Input
              style={styles.barra}
              placeholder="Digite o nome do cliente"
              keyboardType="default"
              onChangeText={
                value => {
                  setCliNome(value);
                  setErrorCliNome(null);
                }
              }
              errorMessage={errorCliNome}

            />

            {/* ////////////////////// CEP /////////////// */}

            <Text style={styles.textoInput}> CEP </Text>
            <Input
              style={styles.barra}
              placeholder="Somente números, sem símbolos"
              autoCapitalize='none'
              keyboardType='numeric'
              onChangeText={
                value => {
                  setCliCep(value);
                  setErrorCliCep(null);
                }
              }
              errorMessage={errorCliCep}
              maxLength={8}
            />


            {/* ////////////////////// Endereço /////////////// */}

            <Text style={styles.textoInput}> Endereço </Text>
            <Input
              style={styles.barra}
              keyboardType='default'
              placeholder="Digite o endereço do usuário"
              onChangeText={
                value => {
                  setCliEndereco(value);
                  setErrorCliEndereco(null);
                }
              }
              errorMessage={errorCliEndereco}
            />

            {/* ////////////////////// Bairro /////////////// */}

            <Text style={styles.textoInput}> Bairro </Text>
            <Input
              style={styles.barra}
              placeholder="Digite o bairro do usuário"

              onChangeText={
                value => {
                  setCliBairro(value);
                  setErrorCliBairro(null);
                }
              }
              errorMessage={errorCliBairro}
            />


            {/* ////////////////////// Cidade /////////////// */}

            <Text style={styles.textoInput}> Cidade </Text>
            <Input
              style={styles.barra}
              placeholder="Digite a cidade do cliente"
              keyboardType="default"
              onChangeText={
                value => {
                  setCidade(value);
                  setErrorCidade(null);
                }
              }
              errorMessage={errorCidade}
            />

            {/* ////////////////////// Estado /////////////// */}

            <Text style={styles.textoInput}> Estado </Text>
            <Input
              style={styles.barra}
              placeholder="Digite o estado do cliente"
              keyboardType="default"
              onChangeText={
                value => {
                  setCliEstado(value);
                  setErrorCliEstado(null);
                }
              }
              errorMessage={errorCliEstado}
            />

            {/* ////////////////////// RG /////////////// */}

            <Text style={styles.textoInput}> RG </Text>
            <Input
              style={styles.barra}
              placeholder="Somente números, sem símbolos"
              keyboardType="numeric"
              onChangeText={
                value => {
                  setCliRG(value);
                  setErrorCliRg(null);
                }
              }
              errorMessage={errorCliRg}
              maxLength={9}
            />


            {/* ////////////////////// E-mail /////////////// */}

            <Text style={styles.textoInput}> E-mail </Text>
            <Input
              style={styles.barra}
              placeholder="Digite o e-mail do cliente"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={
                value => {
                  setCliEmail(value);
                  setErrorCliEmail(null);
                }
              }

              errorMessage={errorCliEmail}

            />
            <Button
              icon={{
                name: "check-circle",
                size: 15,
                color: "white"
              }}
              title="Cadastrar Cliente"
              buttonStyle={{ width: 250, marginTop: 20, marginBottom: 40 }}
              onPress={() => { salvar(estado) }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    </View>


  )
};
export default ClientesCadastrar;
