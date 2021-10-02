import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/usuario/Cadastrar_Usuario'

const Cadastrar_Usuario = () => {
  return (
    <View style={styles.container_header}>
     
      <Text style={styles.header}>Preencha os campos para cadastrar um novo usuário</Text>


      <Text> Nome de usuário </Text>
     <TextInput
        style={styles.barra}
        keyboardType="ascii-capable"
        placeholder="Digite o nome do usuário"

      />
   <Text> Email </Text>
      <TextInput
        style={styles.barra}
        placeholder="Digite seu e-mail de acesso"
        keyboardType="email-address"
    
      />
   <Text> Senha </Text>
      <TextInput
        style={styles.barra}
        secureTextEntry={true}
        placeholder="Digite a senha do usuário"
     
      />

      <TouchableOpacity style={styles.botao}> 
      <Text style={styles.botaoText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>

    
  )
}
export default Cadastrar_Usuario;