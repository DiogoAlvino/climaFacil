import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cityInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    dataInfo: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.primaryWhite,
        fontSize: 30,
    },
    icon: {
        color: colors.primaryWhite,
    },
    subText: {
        color: colors.primaryWhite,
        fontSize: 15
    }
});

export default styles;