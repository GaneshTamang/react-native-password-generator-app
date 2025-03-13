import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { handleChange, handleSubmit } from './formValidation_module'; // Import functions from formValidation.ts

// Define the type of the state object
type StateType = {
    inputNumber: string;
    formErrors: { [key: string]: string };
    isValid: boolean;
}; const [formstateWithVal, setformStateWithVal] = useState<StateType>({
    inputNumber: "", // Default empty string
    formErrors: {}, // Error object for validation
    isValid: false, // Initial validation state
});

const App = () => {


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.centerBox}>
                <Text style={styles.textStyle}>Form and Validation Example</Text>
                <Text style={styles.textStyle}>{formstateWithVal.inputNumber}</Text>

                {/* Input Field */}
                <TextInput
                    value={formstateWithVal.inputNumber}
                    // checks value on real time change
                    onChangeText={(text) => handleChange(text, setformStateWithVal)}  // Use handleChange here
                    style={styles.input}
                    placeholder="Enter a number"
                    keyboardType="numeric"
                />

                {/* Display Errors */}
                {Object.entries(formstateWithVal.formErrors).map(
                    ([key, errorMessage]) => (
                        <Text key={key} style={styles.errorText}>
                            {key}: {errorMessage}
                        </Text>
                    ))}

                {/* Display Validation State */}
                <Text>{formstateWithVal.isValid ? "Valid" : "Invalid"}</Text>

                {/* Submit Button */}
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit(formstateWithVal.inputNumber, setformStateWithVal)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerBox: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    errorText: {
        color: "red",
        marginTop: 5,
        textAlign: "center",
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
});
