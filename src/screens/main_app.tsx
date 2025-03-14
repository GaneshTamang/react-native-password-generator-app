import { StyleSheet, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, Alert, useColorScheme, } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// custom widgets imports
import CustomCheckbox from "../custom_widgets/checkBox";
import Custom_Buttons from "../custom_widgets/custom_buttons";
import PasswordCopyCard from "../custom_widgets/passwordCopyCard"
// modules for form validation
import { generatePasswordString, passwordGenerationOptions, resetPasswordState } from "../modules/password_generator_module";
import { handleChange, myFormState, } from "../modules/formValidation_module";




// main section 


const passWordGEnAppMain = (): React.JSX.Element => {

  const [formstate, setFormState] = useState<myFormState>({
    passwordLength: "",
    formErrors: {},
    isValid: false,
  })
  const [password, setPassword] = useState("no password set initial value");
  const [passwordOptions, setPasswordOPtions] = useState<passwordGenerationOptions>({
    passwordLength: "",
    isPasswordGenerated: false,
    includeUpper: false,
    includeLower: true,
    includeNumber: false,
    includeSymbol: false,
  });
  // theme for dark and  light

  const theme = useColorScheme();//detect color theme "dark|light|undefined"
  const useStyles = theme == "dark" ? mystyles : mystyles;//use





  return (
    <KeyboardAvoidingView style={{ flexGrow: 1, }}>

      <SafeAreaView style={useStyles.appScreenContainer}>

        <ScrollView>
          <View style={useStyles.innerContainer}>

            <Text style={useStyles.headingLabel}>Password Generator</Text>

            {/* Input area section */}

            <View style={useStyles.innerContainer}>



              <View style={{ flexDirection: "row", padding: 20, justifyContent: "center" }}>

                <Text style={useStyles.textLabel}>Enter Number  |</Text>

                <TextInput
                  style={useStyles.inputDesign}
                  placeholder="Ex.8"
                  keyboardType="number-pad"
                  multiline={true}
                  value={formstate.passwordLength}
                  onChangeText={(text) => {
                    setPasswordOPtions({ ...passwordOptions, passwordLength: text });
                    handleChange(text, setFormState);  // Ensure correct function execution
                  }}
                />





              </View>

              {/* render if generated else return null*/}
              {passwordOptions.isPasswordGenerated ? <PasswordCopyCard generatedPassword={password} /> : null}

              {/* testing render if error */}

              {/* <Text>{JSON.stringify(formstate)}</Text> */}

              {/* test  password generation */}

              {/* <Text style={useStyles.textLabel}>password:{password}</Text> */}


              {/* render for validation */}
              {/* check if true then render */}
              {Object.entries(formstate.formErrors).map(
                ([formstateKey, formStateErrorMessage]) => (
                  <Text key={formstateKey} style={useStyles.errorText}>
                    {formstateKey}: {formStateErrorMessage}
                  </Text>
                ))}



              {/* checkbox section */}
              {/* lowercase checkbox */}
              <View style={{ marginTop: 40, }}>
                <Text style={useStyles.headingLabel}>Include</Text>
                <View style={useStyles.checkboxContainer}>

                  <Text style={useStyles.textLabel}>lower Case?</Text>

                  {/* direct method to use package */}
                  <BouncyCheckbox
                    isChecked={passwordOptions.includeLower}
                    disableText
                    fillColor="green"
                    size={30}
                    useBuiltInState={false}
                    // iconImageStyle={styles.iconImageStyle}
                    iconStyle={{ borderColor: 'green' }}
                    onPress={(isChecked: boolean) => {
                      // access object and add object value in funtion
                      setPasswordOPtions({ ...passwordOptions, includeLower: !isChecked })


                    }}
                  />

                </View>
                {/* custom widget method after import for more clean code */}
                {/* uppercase? */}
                <CustomCheckbox
                  checkBoxTitle="Upper Case?"
                  pickValue={passwordOptions.includeUpper}
                  boxOnPressFunction={
                    () => setPasswordOPtions({ ...passwordOptions, includeUpper: !passwordOptions.includeUpper, })
                  }
                  pickColor={"red"}
                />
                {/* numbers */}
                <CustomCheckbox checkBoxTitle="Numbers?"
                  pickValue={passwordOptions.includeNumber}
                  boxOnPressFunction={
                    () => setPasswordOPtions({ ...passwordOptions, includeNumber: !passwordOptions.includeNumber, })
                  }
                  pickColor={"blue"} />
                {/* symbols */}
                <CustomCheckbox
                  checkBoxTitle="Symbols?"
                  pickValue={passwordOptions.includeSymbol}
                  boxOnPressFunction={
                    () => setPasswordOPtions({ ...passwordOptions, ["includeSymbol"]: !passwordOptions.includeSymbol, })
                  }
                  pickColor={"brown"} />
                {/* checkbox section ended*/}
              </View>


              {/* buttons section */}
              <View style={useStyles.buttonContainer}>


                {/* generate password Button */}
                <Custom_Buttons
                  buttonTitle="Generate Password"
                  actionOnBtnPress={() => {
                    if (!formstate.passwordLength.trim()) {  // Check if input is empty
                      Alert.alert('Error', 'Please enter a number');
                      return;
                    }

                    if (!formstate.isValid) {  // Check if input is valid
                      Alert.alert('Error', 'please enter the valid number for pasword  generation');
                      return;
                    }

                    generatePasswordString({
                      passwordLength: passwordOptions.passwordLength,
                      passwordOptions: passwordOptions,
                      changePasswordOptionsState: setPasswordOPtions,
                      changeStatePassword: setPassword,
                    });

                    Alert.alert('Success', 'Password Created');
                  }}
                />

                {/* Reset Button */}
                <Custom_Buttons
                  buttonTitle="reset Password"
                  actionOnBtnPress={
                    () => {

                      resetPasswordState(setPassword, setPasswordOPtions, setFormState,);
                      setFormState({ ...formstate, passwordLength: "", isValid: false });



                    }}
                />
                {/* button section ended */}


              </View>

              {/* test */}
              {/* <Text style={styles.password}>password is :{password}</Text>
              <Text style={{ justifyContent: "center", alignContent: "center", alignSelf: "center", textAlign: "center", }}>password options :  {JSON.stringify(passwordOptions)}</Text> */}

            </View>


          </View>




        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>





  );
};
export default passWordGEnAppMain;

const mystyles = StyleSheet.create({

  appScreenContainer: {
    flex: 1,

    backgroundColor: "white",


  },
  scrollViewContainer: {
    flexGrow: 1, // Ensures ScrollView takes full height
  },
  innerContainer: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    padding: 10,
    // backgroundColor: "#0000FF"

  },
  errorText: {
    color: "red",
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  headingLabel: {
    fontSize: 40,
    fontWeight: "bold",
    elevation: 20,
    marginTop: 20,
    color: "#186a3b", // Text should be visible on grey
    // textAlign: "center",
    alignSelf: "center"
  },
  textLabel: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",

  },
  password: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", // To make the generated password stand out
    marginBottom: 10,
  },
  inputDesign: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,

    // marginTop: 10,
    marginLeft: 30,
    width: "35%",

    backgroundColor: "white", // Ensures input is clearly visible
    color: "black", // Text inside input should be visible
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 40,
    // marginHorizontal: 20,


  },
  button: {
    width: "30%",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  passwordCopyCard: {
    height: "50%",
    width: "100%",
    flex: 1,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 1,


  }


},


);

