import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const style = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.primaryWhite,
        borderRadius: 50,
        paddingHorizontal: 50,
        width: 300,
        height: 60,
        color: colors.primaryWhite,
        textAlign: 'center',
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        color: colors.primaryWhite,
    },
    icon: {
        position: 'absolute',
        left: 20,
        color: colors.primaryWhite,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default style;