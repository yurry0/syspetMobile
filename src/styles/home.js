import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f2f5de'
    },

    header_image: {

        width: 350,
        height: 150,
        justifyContent: "flex-start",
        margin: 10,
        borderRadius: 2,
        borderBottomWidth: 2


    },
    horizontal: {

        width: 350,
        height: 150,
        marginLeft: 10

    },
    spine: {

        width: 150,
        height: 350,
        marginBottom: 20,
        marginHorizontal: 5

    },
    button_img : {
        width: 150,
        height: 150,

        marginTop: 22,
        marginRight: 180

    }

});

export default styles;