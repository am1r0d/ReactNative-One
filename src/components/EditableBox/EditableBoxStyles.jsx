import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingVertical: 12,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        //
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 6,
    },
    label: {
        color: colors.grey,
        fontSize: 12,
        marginBottom: 6,
    },
    input: {
        color: colors.blue,
        fontSize: 14,
        fontWeight: "500",
    },
});
