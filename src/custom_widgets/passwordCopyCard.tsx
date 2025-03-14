import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PasswordCopyCard({ generatedPassword }: { generatedPassword: string }): React.JSX.Element {
    return (

        <View style={[styles.passwordCopyCard,]}>
            <Text style={styles.headingLabel}>PassWord</Text>
            <Text style={styles.textStyle}>{generatedPassword}</Text>
        </View>


    )
}

const styles = StyleSheet.create({

    headingLabel: {
        fontSize: 30,
        fontWeight: "bold",

        marginVertical: 20,

        color: "Brown", // Text should be visible on grey
        // textAlign: "center",
        alignSelf: "center"
    },
    passwordCopyCard: {

        height: 200,
        width: "80%",
        backgroundColor: "#CDC0AF",
        borderRadius: 40,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 10, height: -10 },
        elevation: 4,

    },

    textStyle: {
        marginTop: 15,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',

    }
})