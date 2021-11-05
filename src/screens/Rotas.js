import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './Login';
import HomeIndex from './HomeIndex';

const App = () => {
return(
    <Router>
        <Scene key="root">
            <Scene
                key="login"
                component={Login}
                title="Login"

            />

            <Scene
                key="homeIndex"
                component={HomeIndex}
                title="Home"

            />

        </Scene>

    </Router>


)
}
export default App;