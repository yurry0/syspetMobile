import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_header: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#E8EDDF",
 
    },
    header: {
        marginTop: 25,
        fontSize: 20,
        letterSpacing: 2,
        color: 'black',
        marginBottom: 35,
        alignSelf:'center'

    },
    barra: {
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
        width: 300,
        height: 45,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        borderBottomColor: '#fc9d03',
        borderBottomWidth: 4
    },
    botao: {
        marginTop: 50,
        width: 300,
        height: 42,
        backgroundColor: '#709255',
        marginBottom: 45

    },

    botaoText: {
        color: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16
    },
    textoInput: {
        alignSelf: 'center',
        letterSpacing: 1,
        fontSize: 15
    },
    barraVacina: {
        height: 100,
        backgroundColor: '#fff',
        marginTop: 3,
        borderBottomColor: '#fc9d03',
        borderBottomWidth: 4,
        justifyContent: 'flex-start'
    }

})

export default styles;
