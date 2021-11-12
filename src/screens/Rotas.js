import React, { Component } from 'react';
import { Text } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux';
//Scenes que ficam junto a raiz da rota:
import Login from './Login';
import Home from './Home';
import CadastrarUsuario from './CadastrarUsuario'

//DEBUG - SER REMOVIDO ANTES DA VERSÃO FINAL //
import drop from './debug_drop';
//DEBUG - SER REMOVIDO ANTES DA VERSÃO FINAL //


//Scenes dentro do tabNavigator:
import HomeIndex from './HomeIndex';
import ClientesIndex from './ClientesIndex';
import PetsIndex from './PetsIndex';
import AdocoesIndex from './AdocoesIndex';

//Paginas de cadastro dentro das tabs
import ClientesCadastrar from './ClientesCadastrar';
import PetsCadastrar from './PetsCadastrar';
import AdocoesCadastrar from './AdocoesCadastrar'

//Paginas edição dentro das tabs
import ClientesEditar from './ClientesEditar';
import PetsEditar from './PetsEditar';

//Paginas de visualizar
import ClientesView from './ClientesView';
import PetsView from './PetsView';
import Ionicons from 'react-native-vector-icons/Ionicons';


const iconHome = ({ title, focused, size, color }) => {
    let icon;

    switch (title) {
        case 'Home':
            icon = focused ? 'ios-home' : 'ios-home-outline';
            break;

        case 'Clientes':
            icon = focused ? 'ios-people' : 'ios-people-outline';
            break;

        case 'Pets':
            icon = focused ? 'ios-star' : 'ios-star-outline';
            break;
        case 'Adoções':
            icon = focused ? 'ios-add' : 'ios-add-outline';
            break;
    }

    return (<Ionicons name={icon} size={20} color='#FF4B3E' />);
}

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="login"
                    component={Login}
                    title="Login"
                    hideNavBar={true}
                />

                <Scene
                    key="CadastrarUsuario"
                    component={CadastrarUsuario}
                    title="Cadastrar um novo usuario"
                    back={true}
                />
                <Scene
                    key="Debug"
                    component={drop}
                    title="DEBUGDEBUGDEBUGDEBUG"
                    back={true}
                />

                {/* Aqui fica a tabBar em react-flux */}
                <Scene
                    key="HomeTabBar"
                    tabs={true}
                    hideNavBar={true}
                    tabBarStyle={{ backgroundColor: '#FFFFF' }}>

                    {/* Tab - HomeIndex */}
                    <Scene key="homeIndex" title={'Home'} titleStyle={{ color: '#F0EFF4' }} hideNavBar={true} component={HomeIndex} icon={iconHome} />
                    {/* Tab - Clientes Index */}
                    <Scene key="ClientesIndex" title={'Clientes'} hideNavBar={true} component={ClientesIndex} icon={iconHome} />
                    <Scene key="PetsIndex" title={'Pets'} hideNavBar={true} component={PetsIndex} icon={iconHome} />
                    <Scene key="Adocoes" title={'Adoções'} hideNavBar={true} component={AdocoesIndex} icon={iconHome} />
                </Scene>
                {/* Fim da tabBar em react-flux */}

                {/* Scenes relacionadas as funções do Cliente */}
                <Scene key="ClientesCadastrar" title={'Cadastrar um novo cliente'} component={ClientesCadastrar} back={true} />
                <Scene key="ClientesEditar" title={"Editar Cliente"} component={ClientesEditar} back={true} />
                <Scene key="ClientesView" title={"Visualizar Cliente"} component={ClientesView} back={true} />

                {/* Scenes relacionadas as funções de Pet */}


            </Scene>

        </Router>


    )
}
export default App;