import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        //
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 6,
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 6,
    },
    subtitle: {
        color: colors.grey,
        fontSize: 12,
    },
    arrow: {
        width: 32,
        height: 32,
    },
});
