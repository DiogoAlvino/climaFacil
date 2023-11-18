import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.transparentGrey,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 336,
        height: 100,
        borderRadius: 47,
        gap: 10,
        padding: 20
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: colors.primaryPurple,
    },
    text: {
        color: colors.primaryPurple,
        fontSize: 13,
        textShadowColor: colors.primaryBlack,
    },
    shadowProps: {
        shadowColor: colors.primaryBlack,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.3,
        shadowRadius: 3
    }
});

export default styles;