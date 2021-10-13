import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container_header: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFF7AE"
    },
    header: {
        marginTop: 25,
        fontSize: 20,
        letterSpacing: 2,
        color: 'black',
        marginBottom: 35

    },
    barra: {
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        marginTop: 50,
        width: 300,
        height: 42,
        backgroundColor: '#C83E4D',
        marginBottom: 80

    },

    botaoText: {
        color: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 16
    }

})

export default styles;
