import { StyleSheet } from "react-native";
import { ALICE_BLUE_COLOR, MEDIUM_STATE_BLUE_COLOR, RICH_BLACK_COLOR, WHITE_COLOR } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingBottom: 48,
        justifyContent: 'center',
        backgroundColor: ALICE_BLUE_COLOR
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
        backgroundColor: MEDIUM_STATE_BLUE_COLOR,
        borderRadius: 25,
        padding: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '700',
        color: WHITE_COLOR
    },
})

export default styles