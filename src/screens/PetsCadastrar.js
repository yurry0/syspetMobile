import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Switch,
  TextInput,
  Picker
} from 'react-native';
import styles from '../styles/cadastro_generico'
import Db from '../../db';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'

var db = new Db();


const insereDado = (nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado) => {
  db.initDb();
  let pet = {
    nome: nome,
    raca: raca,
    sexo: sexo,
    idade: idade,
    vacinas: vacinas,
    altura: altura,
    peso: peso,
    especie: especie,
    pelagem: pelagem,
    porte: porte,
    adotado: adotado,
  }
  db.conferePet(pet);
}


//const CadastrarUsuario = ({ navigation }) => 

const PetsCadastrar = (props) => {


  const [id, setId] = useState('');

  const [nome, setNome] = useState('');
  const [errorNome, setErrorNome] = useState('');

  const [raca, setRaca] = useState('');
  const [errorRaca, setErrorRaca] = useState('');

  const [sexo, setSexo] = useState('');
  const [errorSexo, setErrorSexo] = useState('');

  const [idade, setIdade] = useState('');
  const [errorIdade, setErrorIdade] = useState('');

  const [vacinas, setVacinas] = useState('');
  const [errorVacinas, setErrorVacinas] = useState('');

  const [altura, setAltura] = useState('');
  const [errorAltura, setErrorAltura] = useState('');

  const [peso, setPeso] = useState('');
  const [errorPeso, setErrorPeso] = useState('');

  const [especie, setEspecie] = useState('');
  const [errorEspecie, setErrorEspecie] = useState('');

  const [pelagem, setPelagem] = useState('');
  const [errorPelagem, setErrorPelagem] = useState('');

  const [porte, setPorte] = useState('');
  const [errorPorte, setErrorPorte] = useState('');

  //db - não mostrado ao usuário:
  const [adotado, setAdotado] = useState('0');
  const [estado, setEstado] = useState('cadastro');


  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//

  const validar = () => {
    let error = false

    setErrorNome(null);
    setErrorRaca(null);
    setErrorSexo(null);
    setErrorIdade(null);
    setErrorVacinas(null);
    setErrorAltura(null);
    setErrorPeso(null);
    setErrorEspecie(null);
    setErrorPelagem(null);
    setErrorPorte(null);


    const noNumber = /^([^0-9]*)$/
    const regexPonto = /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=_-]+$/g
    const regex = /^[a-zA-Z0-9\s!@#\$%\^\&*\)\(+=._-]+$/g

    //------------------Nome----------------------//
    if (nome == null) {
      setErrorNome("O campo 'nome' está em branco!")
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

    //---------------------------------------------//

    //------------------Raça----------------------//

    if (raca == null) {
      setErrorRaca("O campo 'raca' está em branco!")
      error = true
    }


    if (!regex.test(String(raca).toLowerCase())) {
      setErrorRaca("O campo 'raça' contém caracteres especiais!")
      error = true
    }

    if (!noNumber.test(String(raca).toLowerCase())) {
      setErrorRaca("O campo 'raça' contém números!")
      error = true
    }


    //---------------------=----------------------//


    //------------------Sexo----------------------//

    if (sexo == null || sexo == "default") {

      setErrorSexo("Escolha um sexo")

    }

    //---------------------------------------------//

    //------------------Idade----------------------//

    if (idade == null) {
      setErrorIdade("O campo 'idade' está em branco!")
      error = true
    }

    //--------------------------------------------//

    //------------------VACINAS ------------------//


    if (vacinas == null) {
      setErrorVacinas("O campo 'vacinas' está em branco!")
      error = true
    }

    if (!regexPonto.test(String(vacinas).toLowerCase())) {
      setErrorVacinas("O campo 'Vacinas' contém caracteres especiais!")
      error = true
    }
    if (!noNumber.test(String(vacinas).toLowerCase())) {
      setErrorVacinas("O campo 'Vacinas' contém números!")
      error = true
    }

    //--------------------------------------------//

    //-------------------Altura--------------------//

    if (altura == null) {
      setErrorAltura("O campo 'Altura' está em branco!")
      error = true
    }

    if (!regexPonto.test(String(peso).toLowerCase())) {
      setErrorAltura("O campo 'Altura' contém caracteres não permitidos!")
      error = true
    }

    //--------------------------------------------//


    //------------------Peso-----------------------//


    if (peso == null) {
      setErrorPeso("O campo 'peso' está em branco!")
      error = true
    }

    if (!regexPonto.test(String(peso).toLowerCase())) {
      setError("O campo 'peso' contém caracteres não permitidos!")
      error = true
    }

    //--------------------------------------------//


    //-------------------Especie----------------------//



    if (especie == null || especie == "default") {
      setErrorEspecie("Selecione alguma espécie")
      error = true
    }

    //------------------------------------------//


    //--------------------Pelagem---------------------//


    if (pelagem == "default" || pelagem == null) {
      setErrorPelagem("Selecione uma pelagem.")
      error = true
    }


    //--------------------------------------------//



    //--------------------Porte---------------------//


    if (porte == "default" || porte == null) {
      setErrorPorte("Selecione um porte.")
      error = true
    }


    //------------------------------------------------//


    return !error
  }

  // ----------------------------------------------------------------------- ----------------- ----------------------------------------------------------//
  //------------------------------------------------------------------------ V A L I D A Ç Ã O ----------------------------------------------------------//
  //------------------------------------------------------------------------ ----------------- ----------------------------------------------------------//



  useEffect(() => {
    setId(props.id);
    setNome(props.nome);
    setRaca(props.raca);
    setSexo(props.sexo);
    setIdade(props.idade);
    setVacinas(props.vacinas);
    setAltura(props.altura);
    setPeso(props.peso);
    setEspecie(props.especie);
    setPelagem(props.pelagem);
    setPorte(props.porte);
    setAdotado(props.adotado);
  }, []);


  const salvar = (estado) => {

    if (validar() == false) {
      console.log('Deu erro');
      console.log(sexo);
      console.log(pelagem);

    }
    else {
      if (estado == 'cadastro') {
        insereDado(nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado);
      }
    }
    setEstado('cadastro');
  }

  return (
    <View style={styles.container_header}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'space-between' }} >
        <ScrollView keyboardShouldPersistTaps="handled">

          <View style={styles.formulario}>

            <Text style={styles.header}>Preencha os campos para cadastrar um novo Pet!</Text>


            <Text style={styles.textoInput}> Nome </Text>

            <Input
              style={styles.barra}
              placeholder="Digite o nome do pet"
              keyboardType="default"
              onChangeText={
                value => {
                  setNome(value);
                  setErrorNome(null);
                }
              }
              errorMessage={errorNome}

            />
            <Text style={styles.textoInput}> Espécie </Text>
            <Picker
              style={styles.select}
              selectedValue={especie}
              onValueChange={(itemValue, itemIndex) => setEspecie(itemValue)}
            >
              <Picker.Item label="Selecione" value="default" />
              <Picker.Item label="Cão" value="Cachorro" />
              <Picker.Item label="Gato" value="Gato" />
              <Picker.Item label="Cavalo" value="Cavalo" />


            </Picker>
            <Text style={styles.textError}> {errorEspecie} </Text>

            <Text style={styles.textoInput}> Raça </Text>
            <Input
              style={styles.barra}
              placeholder="Digite a raça do pet"
              keyboardType="default"
              onChangeText={
                value => {
                  setRaca(value);
                  setErrorRaca(null);
                }
              }
              errorMessage={errorRaca}
            />


            <Text style={styles.textoInput}> Sexo: </Text>

            <Picker
              style={styles.select}
              key={"default"}
              selectedValue={sexo}
              onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
            >
              <Picker.Item label="Selecione" value="default" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Outro" value="Outro" />

            </Picker>

            <Input errorMessage={errorSexo} />


            <Text style={styles.textoInput}> Idade </Text>
            <Input
              style={styles.barra}
              placeholder="Selecione o sexo do animal"
              keyboardType='numeric'
              onChangeText={
                value => {
                  setIdade(value);
                  setErrorIdade(null);
                }
              }
              errorMessage={errorIdade}
              maxLength={2}

            />

            <Text style={styles.textoInput}> Peso </Text>
            <Input
              style={styles.barra}
              placeholder="Digite o peso do pet"
              keyboardType='decimal-pad'
              onChangeText={
                value => {
                  setPeso(value);
                  setErrorPeso(null);
                }
              }
              errorMessage={errorPeso}
              maxLength={6}

            />

            <Text style={styles.textoInput}> Altura </Text>
            <Input
              style={styles.barra}
              placeholder="Digite a altura do pet"
              keyboardType='decimal-pad'
              onChangeText={
                value => {
                  setAltura(value);
                  setErrorAltura(null);
                }
              }
              errorMessage={errorAltura}
              maxLength={6}

            />

            <Text style={styles.textoInput}> Porte </Text>

            <Picker
              style={styles.select}
              selectedValue={porte}
              onValueChange={(itemValue, itemIndex) => setPorte(itemValue)}
            >
              <Picker.Item label="Selecione" value="default" />
              <Picker.Item label="Pequeno" value="Pequeno" />
              <Picker.Item label="Médio" value="Medio" />
              <Picker.Item label="Grande" value="Grande" />

            </Picker>

  
            <Text style={styles.textError}> {errorPorte} </Text>


            <Text style={styles.textoInput}> Pelagem </Text>

            <Picker
              style={styles.select}
              selectedValue={pelagem}
              onValueChange={(itemValue, itemIndex) => setPelagem(itemValue)}
            >
              <Picker.Item label="Selecione" value="default" />
              <Picker.Item label="Fina" value="Fina" />
              <Picker.Item label="Grossa" value="Grossa" />
              <Picker.Item label="Ondulada" value="Ondulada" />
              <Picker.Item label="Lisa" value="Ondulada" />


            </Picker>



            <Text style={styles.textError}> {errorPelagem} </Text>


            <Text style={styles.textoInput}> Vacinas </Text>
            <Input
              style={styles.barraVacina}
              placeholder="Digite aqui as vacinas do pet"
              keyboardType='default'
              onChangeText={
                value => {
                  setVacinas(value);
                  setErrorVacinas(null);
                }
              }
              errorMessage={errorVacinas}
            />


            <Button
              icon={{
                name: "check-circle",
                size: 15,
                color: "white"
              }}
              title="Cadastrar Pet"
              buttonStyle={{ width: 250, marginTop: 20, marginBottom: 40 }}
              onPress={() => { salvar(estado) }}
            />
          </View>


        </ScrollView>
      </KeyboardAvoidingView>
    </View>

  )

};

export default PetsCadastrar;
