import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const CustomCheckbox = ({
    checkBoxTitle: title,
    pickValue: isBoxChecked,
    boxOnPressFunction: checkBoxOnPress,
    pickColor: checkBoxColor,
}: {
    checkBoxTitle: string;
    pickValue: boolean;
    boxOnPressFunction: () => void;
    pickColor: string;
}): React.JSX.Element => {
    return (
        <View style={styles.checkboxContainer}>
            <Text style={styles.textLabel}>{title} </Text>
            <BouncyCheckbox
                isChecked={isBoxChecked}
                disableText
                fillColor={checkBoxColor}
                size={30}
                useBuiltInState={false}
                iconStyle={{ borderColor: checkBoxColor }}
                onPress={checkBoxOnPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textLabel: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",

    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

})
export default CustomCheckbox;