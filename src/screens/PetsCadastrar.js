import React, { useState, useEffect, Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Switch,
  TextInput
} from 'react-native';
import styles from '../styles/pets/PetsCadastrar'



import Db from '../../db';

var db = new Db();


const insereDado = (nome, raca, sexo, idade, vacinas, peso, especie, pelagem, adotado) => {
  db.initDb();
  let pet = {
    nome: nome,
    raca: raca,
    sexo: sexo,
    idade: idade,
    vacinas: vacinas,
    peso: peso,
    especie: especie,
    pelagem: pelagem,
    adotado: adotado,
  }
  db.addPet(pet);
}


//const CadastrarUsuario = ({ navigation }) => 

const PetsCadastrar = ({ navigation }, props) => {


  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [vacinas, setVacinas] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [img_pet, setImgPet] = useState('');
  const [tipo, setTipo] = useState('');
  const [especie, setEspecie] = useState('');
  const [pelagem, setPelagem] = useState('');
  const [porte, setPorte] = useState('');
  const [adotado, setAdotado] = useState('');
  const [isEnabled, setIsEnabled] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [estado, setEstado] = useState('cadastro');

  


  useEffect(() => {
    setId(props.id);
    setNome(props.nome);
    setRaca(props.raca);
    setSexo(props.sexo);
    setIdade(props.idade);
    setVacinas(props.vacinas);
    setAltura(props.altura);
    setPeso(props.peso);
    setImgPet(props.img_pet);
    setTipo(props.tipo);
    setEspecie(props.especie);
    setPelagem(props.pelagem);
    setPorte(props.porte);
    setAdotado(props.adotado);
  }, []);


  const salvar = (estado) => {
    if (login.length == 0 || senha.length == 0 || repetirSenha.length == 0) {
      Alert.alert('Erro', 'Um ou mais campos estão em branco!');

    }

    else if (senha != repetirSenha) {
      Alert.alert('Erro', 'senhas não conferem');
    }

    if (estado == 'cadastro') {
      insereDado(nome, raca, sexo, idade, vacinas, altura, peso, img_pet, tipo, especie, pelagem, porte, adotado);

      navigation.navigate('PetsIndex');
    }
    setEstado('cadastro');
  }

  return (
    <View style={styles.container_header}>

      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }} >

          <Text style={styles.header}>Preencha os campos para cadastrar um novo Pet!</Text>


          <Text style={styles.textoInput}> Nome </Text>

          <TextInput
            style={styles.barra}
            placeholder="Digite o nome do pet"
            keyboardType="default"
            onChangeText={
              nome => setNome(nome)
            }

          />

          <Text style={styles.textoInput}> Raça </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite a raça do pet"
            keyboardType="default"
            onChangeText={
              raca => setRaca(raca)}
          />
          <Text style={styles.textoInput}> Sexo </Text>
          <TextInput
            style={styles.barra}
            placeholder="Selecione o sexo do animal"
            autoCapitalize='none'
            onChangeText={
              sexo => setSexo(sexo)
            }

          />

          <Text style={styles.textoInput}> Idade </Text>
          <TextInput
            style={styles.barra}
            placeholder="Selecione o sexo do animal"
            keyboardType='numeric'
            onChangeText={
              idade => setIdade(idade)
            }

          />

          <Text style={styles.textoInput}> Peso </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite o peso do pet"
            keyboardType='numbers-and-punctuation'
            onChangeText={
              peso => setPeso(peso)
            }

          />


          <Text style={styles.textoInput}> Especie </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite a especie do pet"
            keyboardType='default'
            onChangeText={
              especie => setEspecie(especie)
            }

          />


          <Text style={styles.textoInput}> Porte </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite a especie do pet"
            keyboardType='default'
            onChangeText={
              porte => setPorte(porte)
            }

          />

          <Text style={styles.textoInput}> Tipo </Text>
          <TextInput
            style={styles.barra}
            placeholder="Digite aqui as vacinas do pet"
            keyboardType='default'
            onChangeText={
              tipo => setTipo(tipo)
            }

          />
          <Text style={styles.textoInput}> Vacinas </Text>
          <TextInput
            style={styles.barraVacina}
            placeholder="Digite aqui as vacinas do pet"
            keyboardType='default'
            onChangeText={
              vacinas => setVacinas(vacinas)
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

export default PetsCadastrar;
