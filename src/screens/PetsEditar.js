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

var db = new Db();


const editaDado = (nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado, id) => {
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
        pk_id_pet: id
    }
    db.updatePet(pet);
}


const PetsEditar = (props) => {


    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [vacinas, setVacinas] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [especie, setEspecie] = useState('');
    const [pelagem, setPelagem] = useState('');
    const [porte, setPorte] = useState('');
    const [adotado, setAdotado] = useState('0');
    const [estado, setEstado] = useState('editar');




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
        if (estado == 'editar') {
            editaDado(nome, raca, sexo, idade, vacinas, altura, peso, especie, pelagem, porte, adotado, id);
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

                        <Text style={styles.header}>Edite as informações de um pet já existente!</Text>

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

                        <Text style={styles.textoInput}> Nome </Text>

                        <TextInput
                            style={styles.barra}
                            placeholder="Digite o nome do pet"
                            keyboardType="default"
                            value={nome}
                            onChangeText={
                                nome => setNome(nome)
                            }

                        />
                        <Text style={styles.textoInput}> Raça </Text>
                        <TextInput
                            value={raca}
                            style={styles.barra}
                            placeholder="Digite a raça do pet"
                            keyboardType="default"
                            onChangeText={
                                raca => setRaca(raca)}
                        />
                        <Text style={styles.textoInput}> Sexo: </Text>

                        <Picker
                            style={styles.select}
                            selectedValue={sexo}
                            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
                        >
                            <Picker.Item label="Selecione" value="default" />
                            <Picker.Item label="Masculino" value="Masculino" />
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Outro" value="Outro" />

                        </Picker>

                        <Text style={styles.textoInput}> Idade </Text>
                        <TextInput
                            style={styles.barra}
                            placeholder="Selecione o sexo do animal"
                            keyboardType='numeric'
                            value={idade}
                            onChangeText={
                                idade => setIdade(idade)
                            }
                            maxLength={2}

                        />

                        <Text style={styles.textoInput}> Peso </Text>
                        <TextInput
                            style={styles.barra}
                            placeholder="Digite o peso do pet"
                            value={peso}
                            keyboardType='numbers-and-punctuation'
                            onChangeText={
                                peso => setPeso(peso)
                            }
                            maxLength={6}

                        />

                        <Text style={styles.textoInput}> Altura </Text>
                        <TextInput
                            style={styles.barra}
                            value={altura}
                            placeholder="Digite a altura do pet"
                            keyboardType='numbers-and-punctuation'
                            onChangeText={
                                altura => setAltura(altura)
                            }
                            maxLength={6}

                        />



                        <Text style={styles.textoInput}> Especie </Text>
                        <TextInput
                            style={styles.barra}
                            value={especie}
                            placeholder="Digite a especie do pet"
                            keyboardType='default'
                            onChangeText={
                                especie => setEspecie(especie)
                            }

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


                        <Text style={styles.textoInput}> Vacinas </Text>
                        <TextInput
                            style={styles.barraVacina}
                            value={vacinas}
                            placeholder="Digite aqui as vacinas do pet"
                            keyboardType='default'
                            onChangeText={
                                vacinas => setVacinas(vacinas)
                            }

                        />


                        <TouchableOpacity style={styles.botao} onPress={() => { salvar(estado) }} >
                            <Text style={styles.botaoText}> + Editar Pet</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </KeyboardAvoidingView>
        </View>

    )

};

export default PetsEditar;