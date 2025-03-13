import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Custom_Buttons = ({ buttonTitle: title, actionOnBtnPress: callbackAction, }:
    { buttonTitle: string, actionOnBtnPress: () => void, feedBIsDisabled: boolean }) => {

    return (

        <TouchableOpacity
            onPress={callbackAction}

        >
            <View style={[styles.buttonStyle,]}>
                <Text style={styles.textStyle}>
                    {title}</Text></View>
        </TouchableOpacity>

    )
}

export default Custom_Buttons

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#2296F3",
        paddingHorizontal: 20,
        paddingVertical: 6,
        justifyContent: 'center',
        borderRadius: 3,
        elevation: 5,
        shadowOffset: { height: 1, width: 1 },
        shadowColor: "black",
        shadowOpacity: 1,

    },
    textStyle: {
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',

    }
})