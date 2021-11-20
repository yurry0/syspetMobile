import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_header: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white"
    },
    header: {
        marginTop: 25,
        fontSize: 20,
        letterSpacing: 2,
        color: 'black',
        marginBottom: 35,
        alignSelf: 'center'

    },
    textError:{
        fontSize: 12,
        color: 'red',
        marginTop: 5,
        marginBottom: 8
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
        marginTop: 80,
        width: 300,
        height: 42,
        backgroundColor: '#339933',
        marginBottom: 25

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
        fontSize: 15,
        marginTop: 2
    },

    barraVacina: {
        height: 100,
        width: 300,
        backgroundColor: '#fff',
        marginTop: 20,
        borderBottomColor: '#fc9d03',
        borderBottomWidth: 4,
        justifyContent: 'flex-start'
    },
    formulario: {

        justifyContent: 'center',
        alignItems: 'center'

    },
    select: {
        height: 50,
        width: 150,
        marginBottom: 5
    },

})

export default styles;
