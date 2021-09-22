import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/App';


export default class Welcome extends Component {
    render() {
        return (

            <View style={styles.container}>

                <TouchableOpacity> </TouchableOpacity>

                <Text style={styles.texto}> {this.props.titulo}</Text>
            

            </View>
        )
    }
}
