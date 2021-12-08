import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text,
    Picker
} from 'react-native';
import styles from '../styles/cadastro_generico'
import Db from '../../db';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

var db = new Db();


const editaDado = (nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado, cod_interno, id) => {
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
        cod_interno: cod_interno,
        pk_id_pet: id,

    }
    db.conferePetEdit(pet);
    db.updatePet(pet);
}


const PetsEditar = (props) => {


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

    const [cod_interno, setCodInterno] = useState('');
    const [errorCodInterno, setErrorCodInterno] = useState('');



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
        //Regex: alfanumerico:
        const alpha = /^[a-z0-9]+$/

        //Regex: alfaspace
        const alfaspace = /^[a-zA-Z0-9 ]*$/

        //Regex: numerico:
        const soNumero = /^[0-9]+$/

        //Regex: permite espaço e acentos usados no brasil:
        const regex_br = /^[A-Za-z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'-]+$/

        //Regex: permite espaço, virgulas e acentos usados no brasil:
        const regex_vacina = /^[A-Za-z0-9 áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,'-\,]+$/



        //------------------Nome----------------------//
       
        if (nome == null) {
            setErrorNome("O campo 'nome' está em branco!")
            error = true

        }
      

        else {

             
        if (!regex_br.test(String(nome).toLowerCase())) {
            setErrorNome("O campo 'nome' contém caracteres especiais!")
            error = true
        }
           
                if (!noNumber.test(String(nome).toLowerCase())) {
                    setErrorNome("O campo 'nome' contém números!")
                    error = true
                }

                if (String(nome).startsWith("-")) {
                    setErrorNome("O campo 'nome' contém -!")
                    error = true

                }
            
        }





        //---------------------------------------------//

        //------------------Raça----------------------//
        if (!regex_br.test(String(raca).toLowerCase())) {
            setErrorRaca("O campo 'raça' contém caracteres especiais!")
            error = true
        }
        else {
            if (raca == null) {
                setErrorRaca("O campo 'raça' está em branco!")
                error = true
            }

            else {




                if (!noNumber.test(String(raca).toLowerCase())) {
                    setErrorRaca("O campo 'raça' contém números!")
                    error = true
                }


                if (String(raca).startsWith("-")) {
                    setErrorRaca("O campo 'raça' contém caracteres especiais!")
                    error = true

                }

            }
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
        if (!spaceNumber.test(String(vacinas).toLowerCase())) {
            setErrorVacinas("O campo 'Vacinas' contém só números/espaços em branco!")
            error = true
        }

        else {
            if (!regex_vacina.test(String(vacinas).toLowerCase())) {
                setErrorVacinas("O campo 'Vacinas' contém caracteres especiais!")
                error = true

            }

        }

        //--------------------------------------------//

        //-------------------Altura--------------------//

        if (altura == null) {
            setErrorAltura("O campo 'Altura' está em branco!")
            error = true
        }
        else {



        }

        //--------------------------------------------//


        //------------------Peso-----------------------//


        if (peso == null) {
            setErrorPeso("O campo 'peso' está em branco!")
            error = true
        }

        else {
            if (peso.length > 4) {

                setErrorPeso("O campo 'peso' tem caracteres acima do limite!")
                error = true

            }
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


        //--------------------COD_INTERNO---------------------//
        if (cod_interno == null) {
            setErrorCodInterno("O campo 'código interno' está em branco!")
            error = true
        }


        if (String(cod_interno).length < 5) {

            setErrorCodInterno("O campo 'codigo interno' precisa de 3 números.")
            error = true
        }


        if (!alpha.test(String(cod_interno).toLowerCase())) {
            setErrorCodInterno("O campo 'código interno' só contem caracteres especiais!")
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
        setCodInterno(props.cod_interno)
        setAdotado(props.adotado);
    }, []);


    const salvar = (estado) => {

        if (validar() == false) {
            console.log('Deu erro');
            console.log(cod_interno)
            console.log(altura)
            console.log(raca)
            console.log(vacinas)


        }

        else {
            if (estado == 'editar') {
                editaDado(nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado, cod_interno, id);
            }
        }
        setEstado('editar');
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
                            value={nome}
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


                        <Text style={styles.textoInput}> Código Interno </Text>
                        <Text style={styles.textError}> Modelo: NNN; Ex: 001 </Text>
                        <Input
                            value={cod_interno}
                            disabled={true}
                            editable={false}
                            style={styles.barra}
                            keyboardType="numeric"
                            autoCapitalize="characters"
                            onChangeText={
                                value => {
                                    setCodInterno("AN" + value);
                                    setErrorCodInterno(null);
                                }
                            }
                            maxLength={7}
                            errorMessage={errorCodInterno}
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

                        <Input errorMessage={errorEspecie} disabled={true} />

                        <Text style={styles.textoInput}>Raça</Text>
                        <Input
                            value={raca}
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

                        <Input errorMessage={errorSexo} disabled={true} />


                        <Text style={styles.textoInput}> Idade </Text>
                        <Input
                            value={idade}
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
                            value={peso}
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
                            value={altura}
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

                        <Input errorMessage={errorEspecie} disabled={true} />


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



                        <Input errorMessage={errorPelagem} disabled={true} />


                        <Text style={styles.textoInput}> Vacinas </Text>
                        <Input
                            value={vacinas}
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
                            title="Editar Pet"
                            buttonStyle={{ width: 250, marginTop: 20, marginBottom: 40 }}
                            onPress={() => { salvar(estado) }}
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </View>

    )

};

export default PetsEditar;
