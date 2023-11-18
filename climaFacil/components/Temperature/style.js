import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.primaryWhite,
        fontSize: 200,
        shadowOpacity: 10,
        textShadowColor: colors.primaryGrey,
        textShadowOffset: {width: 1, height: 4},
        textShadowRadius: 6,
    },
});

export default styles;