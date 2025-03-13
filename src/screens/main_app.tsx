import { StyleSheet, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// custom widgets 
import CustomCheckbox from "../custom_widgets/checkBox";
import Custom_Buttons from "../custom_widgets/custom_buttons";
import { generatePasswordString, passwordGenerationOptions, resetPasswordState } from "./password_generator";
import { handleChange, myFormState } from "./formValidation_module";


// typos






// main section 


const passwordGenApp = (): React.JSX.Element => {

  const [formstate, setFormState] = useState<myFormState>({
    inputNumber: "",
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

  // const [input, setInput] = useState<string>("");





  return (
    <KeyboardAvoidingView style={{ flexGrow: 1, }}>

      <SafeAreaView style={styles.appScreenContainer}>

        <ScrollView>
          <View style={styles.innerContainer}>

            <Text style={styles.headingLabel}>Password Generator</Text>

            {/* Input area section */}

            <View style={styles.innerContainer}>



              <View style={{ flexDirection: "row", padding: 20, justifyContent: "center" }}>

                <Text style={styles.textLabel}>Enter Number  |</Text>

                <TextInput
                  style={styles.inputDesign}
                  placeholder="Ex.8"
                  keyboardType="number-pad"
                  multiline={true}
                  value={formstate.inputNumber}
                  onChange={

                    (event) => {
                      const text = event.nativeEvent.text;
                      setPasswordOPtions({ ...passwordOptions, passwordLength: event.nativeEvent.text });
                      handleChange(text, setFormState);
                    }}


                />




              </View>
              {/* render if error */}
              {/* check if true then render */}
              {Object.entries(formstate.formErrors).map(
                ([key, errorMessage]) => (
                  <Text key={key} style={styles.errorText}>
                    {key}: {errorMessage}
                  </Text>
                ))}

              <Text style={styles.textLabel}>password:{password}</Text>
              {/* checkbox section */}
              {/* lowercase checkbox */}
              <View>
                <Text style={styles.headingLabel}>Include</Text>
                <View style={styles.checkboxContainer}>
                  <View >
                    <Text style={styles.textLabel}>lower Case?-</Text>
                  </View>
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
              <View style={styles.buttonContainer}>
                <Custom_Buttons
                  buttonTitle="Generate Password"
                  actionOnBtnPress={
                    () => {
                      generatePasswordString(
                        {
                          passwordLength: Number(formstate.inputNumber),
                          passwordOptions: passwordOptions,
                          changePasswordOptionsState: setPasswordOPtions,
                          changeStatePassword: setPassword,
                        }

                      )

                    }
                  }
                  feedBIsDisabled={false}
                />
                <Custom_Buttons
                  buttonTitle="reset Password"
                  actionOnBtnPress={
                    () => {

                      resetPasswordState(setPassword, setPasswordOPtions,);
                      setFormState({ ...formstate, inputNumber: "" })


                    }}
                  feedBIsDisabled={false} />
                {/* button section ended */}


              </View>
              {/* <Text style={styles.headingLabel}> {input}</Text> */}
              <Text style={styles.password}>password is ::{password}</Text>
              <Text style={styles.password}>password options :  {JSON.stringify(passwordOptions)}</Text>
              {/* <Text style={styles.password}>{characterListForGen}</Text> */}
            </View>






            {passwordOptions ? (<View><Text>
              test</Text></View>) : null}

          </View>


        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>





  );
};
export default passwordGenApp;

const styles = StyleSheet.create({
  appScreenContainer: {
    flex: 1,

    // backgroundColor: "grey",


  },
  scrollViewContainer: {
    flexGrow: 1, // Ensures ScrollView takes full height
  },
  innerContainer: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    // backgroundColor: "#0000FF"

  },
  errorText: {
    color: "red",
    marginTop: 5,
    textAlign: "center",
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
    marginVertical: 10,


  },
  button: {
    width: "30%",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },



},


);

