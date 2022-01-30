import { StyleSheet } from "react-native";
import { GREY_COLOR, RICH_BLACK_COLOR } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft: 21,
        paddingRight: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        color: RICH_BLACK_COLOR,
        fontSize: 18,
    },
    date: {
        color: GREY_COLOR,
        fontSize: 14,
        marginTop: 5,
    },
    image: {
        width: 96,
        height: 85,
        backgroundColor: 'gray',
        marginRight: 21,
        borderRadius: 13,
    },
    actionsContainer: {
        flexDirection: 'row',
    },
    action: {
        marginLeft: 11,
    },
    separator: {
       height: 18, 
    },
})

export default styles;