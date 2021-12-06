import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';
import { SafeAreaProvider } from 'react-native-safe-area-context'
//Scenes que ficam junto a raiz da rota:
import Login from './Login';
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
import AdocoesEditar from './AdocoesEditar';

//Paginas de visualizar
import ClientesView from './ClientesView';
import PetsView from './PetsView';
import AdocoesView from './AdocoesView'

//Paginas de CadastrarAdoção

import AdocoesCadastrarPet from './AdocoesCadastrarPet';
import AdocoesCadastrarCliente from './AdocoesCadastrarCliente';
import AdocoesConfirm from './AdocoesConfirm';

//Icones
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
        <SafeAreaProvider>
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
                        duration={0}
                        type={ActionConst.RESET}
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
                    <Scene key="PetsCadastrar" title={'Cadastrar um novo pet'} component={PetsCadastrar} back={true} />
                    <Scene key="PetsEditar" title={"Editar Pet"} component={PetsEditar} back={true} />
                    <Scene key="PetsView" title={"Visualizar Pet"} component={PetsView} back={true} />

                    {/* Scenes relacionadas as funções de Adocao */}
                    <Scene key="AdocoesCadastrar" title={'Cadastrar uma nova adoção'} component={AdocoesCadastrar} back={true} />
                    <Scene key="AdocoesEditar" title={"Editar Adoção"} component={AdocoesEditar} back={true} />
                    <Scene key="AdocoesView" title={"Detalhes da Adoção"} component={AdocoesView} back={true} />


                    {/* Scenes relacionadas ao fluxo de adicionar adoção: */}
                    <Scene key="AdocoesCadastrarPet" title={'Adoção - Pet'} component={AdocoesCadastrarPet} back={true} />
                    <Scene key="AdocoesCadastrarCliente" title={'Adoção - Cliente'} component={AdocoesCadastrarCliente} back={true} />
                    <Scene key="AdocoesConfirm" title={'Adoção - Confirmar Dados'} component={AdocoesConfirm} back={true} />

                </Scene>

            </Router>

        </SafeAreaProvider>
    )
}
export default App;