import React, { useState, useEffect, Component } from 'react';
import {
    View,
    Text,
    Image,

} from 'react-native';
import styles from '../styles/pets/PetsView.js';
import { Actions } from 'react-native-router-flux';
import Db from '../../db';

var db = new Db();

db.initDb();

const PetsView = (props) => {
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
    const [flag, setFlag] = useState('');
    const [adotado, setAdotado] = useState('');
    const [teste, setTeste] = useState('');
    const [cod_interno, setCodInterno] = useState('0');
    const [estado, setEstado] = useState('cadastro');





    useEffect(() => {
        console.log('Props Adotado:' + props.adotado);
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
        setCodInterno(props.cod_interno);
        setTeste(props.adotado);


        if(props.adotado == 1){
            setAdotado('Sim');
        }
        else{
            setAdotado('Não');
        }
     
    }, []);

    function mostrarAdotado() {
        console.log(adotado);
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/icon_personalizado/pet.png')} />
            <Text style={styles.label}> Perfil do Pet </Text>

            <View style={styles.container_profile}>
                <Text style={styles.text_title}> ID no Sistema: <Text style={styles.text_profile}> {id} </Text> </Text>
                <Text style={styles.text_title}> Código interno de Identificação: <Text style={styles.text_profile}> {cod_interno} </Text> </Text>

                <Text style={styles.text_title}> Nome do Pet: <Text style={styles.text_profile}>  {nome} </Text> </Text>
                <Text style={styles.text_title}> Raça: <Text style={styles.text_profile}>  {raca} </Text> </Text>
                <Text style={styles.text_title}> Espécie: <Text style={styles.text_profile}>  {especie} </Text> </Text>
                <Text style={styles.text_title}> Idade: <Text style={styles.text_profile}>  {idade} </Text> </Text>
                <Text style={styles.text_title}> Sexo: <Text style={styles.text_profile}>  {sexo} </Text> </Text>

                <Text style={styles.text_title}> Altura: <Text style={styles.text_profile}>  {altura} </Text> </Text>
                <Text style={styles.text_title}> Peso: <Text style={styles.text_profile}>  {peso} </Text> </Text>
                <Text style={styles.text_title}> Pelagem: <Text style={styles.text_profile}>  {pelagem} </Text> </Text>
                <Text style={styles.text_title}> Porte: <Text style={styles.text_profile}>  {porte} </Text> </Text>
                <Text style={styles.text_title}> Vacinas: <Text style={styles.text_profile}>  {vacinas} </Text> </Text>

                <Text style={styles.text_title}> Adotado? <Text style={styles.text_profile}> {adotado} </Text> </Text>

            </View>
        </View>


    )
};
export default PetsView;
