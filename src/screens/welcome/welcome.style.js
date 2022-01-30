import { StyleSheet } from "react-native";

const RICH_BLACK_COLOR = '#343434'
const ALICE_BLUE = '#F9FCFF'
const MEDIUM_STATE_BLUE = '#736CED'
const WHITE = '#FFFFFF'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBottom: 48,
        justifyContent: 'center',
        backgroundColor: ALICE_BLUE
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 72,
        height: 72,
        marginBottom: 24
    },
    title: {
        fontSize: 48,
        color: RICH_BLACK_COLOR,
    },
    description: {
        marginTop: 24,
        color: RICH_BLACK_COLOR,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: MEDIUM_STATE_BLUE,
        borderRadius: 25,
        padding: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: WHITE
    },
})

export default styles