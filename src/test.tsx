// import { Button, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
// import React, { useState } from "react";
// import * as yap from "yup";
// import { Formik } from "formik";
// import BouncyCheckbox from "react-native-bouncy-checkbox";

// import CustomCheckbox from "../custom_widgets/checkBox";
// import Custom_Buttons from "../custom_widgets/custom_buttons";



// const passwordGenApp = () => {

//     const [password, setPassword] = useState("no password set initial value");
//     const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
//     const [lowerCase, setLowerCase] = useState(true);
//     const [upperCase, setUpperCase] = useState(false);
//     const [numbers, setNumbers] = useState(false);
//     const [symbols, setSymbols] = useState(false);
//     // const [input, setInput] = useState<string>("");


//     const generatePasswordString = (passwordLength: number) => {
//         // Initial character list before checking

//         let upperCaseCharacterSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         let lowerCasecharacterSet: string = "abcdefghijklmnopqrstuvwxyz";
//         let numberSet: string = "1234567890"; // Fixed type from number to string
//         let symbolSet: string = "@$%_+&#";

//         // Checking for proper state to put value 1 by 1 for all character lists
//         if (isPasswordGenerated) {
//             // characterListForGen = ""
//             let characterListForGen: string = "";
//             console.log("initiated adding with check box and character gen list: " + characterListForGen + "and values to gen are L,U,N,S are:" + lowerCase + upperCase + numbers + symbols)
//             if (upperCase) {
//                 characterListForGen += upperCaseCharacterSet;

//             } console.log("uppercase checked and done")
//             if (lowerCase) {
//                 characterListForGen += lowerCasecharacterSet;

//             }
//             console.log("lowercase checked and done")
//             if (numbers) {
//                 characterListForGen += numberSet;

//             } console.log("numbers checked and done")
//             if (symbols) {
//                 characterListForGen += symbolSet;
//             }
//             console.log("symbols checked and done")
//             console.log("Finally char generation list:" + characterListForGen)

//             if (characterListForGen !== "") {
//                 let passwordResult: string = createPassword(characterListForGen, passwordLength);
//                 setPassword(passwordResult);
//                 setIsPasswordGenerated(true);
//             }
//         }
//         else {
//             console.log("already generated:   " + isPasswordGenerated)
//             return;

//         }



//     };

//     const createPassword = (characters: string, passwordLength: number): string => {
//         let result: string = "";
//         for (let index = 0; index < passwordLength; index++) {
//             const characterIndex: number = Math.floor(Math.random() * characters.length);
//             result += characters.charAt(characterIndex);
//         }
//         return result;
//     };

//     const resetPasswordState = () => {
//         setPassword("restetted to no value");
//         setIsPasswordGenerated(false);
//         setLowerCase(false);
//         setUpperCase(false);
//         setNumbers(false);
//         setSymbols(false);
//     };

//     const passWordSchema = yap.object().shape({
//         passwordLength: yap.number()
//             .min(4, "Should be at least 4")
//             .max(16, "Should be at most 16")
//             .required("Length is required")
//     });

//     return (

//         <SafeAreaView style={styles.appScreenContainer}>

//             <View style={styles.innerContainer}>
//                 <Text style={styles.headingLabel}>Password Generator</Text>
//                 <Formik
//                     initialValues={{ passwordLength: "10" }}
//                     // validationSchema={passWordSchema}
//                     onSubmit={values => {

//                         generatePasswordString(Number(values.passwordLength))
//                         console.log(values);
//                     }

//                     }
//                 >
//                     {({ values, touched, errors, handleChange, handleSubmit, handleReset, }) =>
//                     (

//                         <View style={styles.innerContainer}>
//                             {/* Labels */}


//                             <View style={{ flexDirection: "row", padding: 20, justifyContent: "center" }}>
//                                 <Text style={styles.textLabel}>Enter Number  |</Text>
//                                 {/* check if true then render */}
//                                 {/* {touched.passwordLength && errors.passwordLength && (<Text>
//                   {errors.passwordLength}
//                 </Text>)} */}

//                                 <TextInput
//                                     style={styles.inputDesign}
//                                     placeholder="Ex.8"
//                                     keyboardType="number-pad"
//                                     value={values.passwordLength}
//                                     onChangeText={
//                                         handleChange("passwordLength")


//                                     }
//                                 />

//                                 {/*  Labels and input section ended */}
//                             </View>

//                             {/* checkbox section */}
//                             <View>
//                                 <Text style={styles.headingLabel}>Include</Text>
//                                 <View style={styles.checkboxContainer}>
//                                     <View >
//                                         <Text style={styles.textLabel}>lower Case?-</Text>
//                                     </View>
//                                     {/* direct method to use package */}
//                                     <BouncyCheckbox
//                                         isChecked={lowerCase}
//                                         disableText
//                                         fillColor="green"
//                                         size={30}
//                                         useBuiltInState={false}
//                                         // iconImageStyle={styles.iconImageStyle}
//                                         iconStyle={{ borderColor: 'green' }}
//                                         onPress={(checked: boolean) => {
//                                             // These two should be same value
//                                             setLowerCase(!lowerCase);

//                                         }}
//                                     />

//                                 </View>
//                                 {/* custom widget method after import for more clean code */}
//                                 <CustomCheckbox checkBoxTitle="Upper Case?" pickValue={upperCase} boxOnPressFunction={() => setUpperCase(!upperCase)} pickColor={"red"} />
//                                 <CustomCheckbox checkBoxTitle="Numbers?" pickValue={numbers} boxOnPressFunction={() => setNumbers(!numbers)} pickColor={"blue"} />
//                                 <CustomCheckbox checkBoxTitle="Symbols?" pickValue={symbols} boxOnPressFunction={() => setSymbols(!symbols)} pickColor={"brown"} />
//                                 {/* checkbox section ended*/}
//                             </View>


//                             {/* buttons section */}
//                             <View style={styles.buttonContainer}>
//                                 <Custom_Buttons
//                                     buttonTitle="Generate Password"
//                                     actionOnBtnPress={
//                                         () => handleSubmit()
//                                     }
//                                     feedBIsDisabled={false}
//                                 />
//                                 <Custom_Buttons
//                                     buttonTitle="reset Password"
//                                     actionOnBtnPress={() => {
//                                         handleReset();
//                                         resetPasswordState();

//                                     }}
//                                     feedBIsDisabled={false} />
//                                 {/* button section ended */}


//                             </View>
//                             {/* <Text style={styles.headingLabel}> {input}</Text> */}
//                             <Text style={styles.password}>password is ::{password}</Text>
//                             <Text style={styles.password}>ispassgenerated??? ::{isPasswordGenerated.toString()}</Text>
//                             {/* <Text style={styles.password}>{characterListForGen}</Text> */}
//                         </View>

//                         // innercontainer ended

//                     )}

//                 </Formik>
//                 {isPasswordGenerated ? (<View><Text>
//                     test</Text></View>) : null}

//             </View>
//         </SafeAreaView>




//     );
// };
// export default passwordGenApp;

// const styles = StyleSheet.create({
//     appScreenContainer: {
//         flex: 1,
//         // backgroundColor: "grey",


//     },
//     scrollViewContainer: {
//         flexGrow: 1, // Ensures ScrollView takes full height
//     },
//     innerContainer: {
//         flex: 1,
//         marginTop: 10,
//         padding: 10,
//         // backgroundColor: "#0000FF"

//     },
//     headingLabel: {
//         fontSize: 40,
//         fontWeight: "bold",
//         elevation: 20,
//         marginTop: 20,
//         color: "#186a3b", // Text should be visible on grey
//         // textAlign: "center",
//         alignSelf: "center"
//     },
//     textLabel: {
//         fontSize: 25,
//         fontWeight: "bold",
//         textAlign: "center",

//     },
//     password: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "black", // To make the generated password stand out
//         marginBottom: 10,
//     },
//     inputDesign: {
//         borderWidth: 1,
//         borderColor: "black",
//         padding: 10,
//         borderRadius: 5,
//         // marginTop: 10,
//         marginLeft: 30,
//         width: "20%",
//         backgroundColor: "white", // Ensures input is clearly visible
//         color: "black", // Text inside input should be visible
//     },
//     buttonContainer: {
//         flex: 1,
//         justifyContent: "space-between",
//         flexDirection: "row",
//         marginVertical: 10,


//     },
//     button: {
//         width: "30%",
//         marginHorizontal: 5,
//         marginVertical: 10,
//     },
//     checkboxContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },



// },


// );

