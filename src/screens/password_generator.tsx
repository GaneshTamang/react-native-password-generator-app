

import React from "react";

export type passwordGenerationOptions = {
    passwordLength?: number | string,
    isPasswordGenerated: boolean,
    includeUpper: boolean,
    includeLower: boolean,
    includeNumber: boolean,
    includeSymbol: boolean,
};


//  here making propertyname value mandatory 
// e.g add({first,second}:{first:number,second:number}){returen a+b} 
// this makes function property name mandatory for function call add(mandatory )
export const generatePasswordString = ({ passwordLength, passwordOptions, changePasswordOptionsState, changeStatePassword }
    : {
        passwordLength: number | string,
        passwordOptions: passwordGenerationOptions,
        changePasswordOptionsState: React.Dispatch<React.SetStateAction<passwordGenerationOptions>>,
        changeStatePassword: React.Dispatch<React.SetStateAction<string>>,
    }

) => {
    let upperCaseCharacterSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseCharacterSet: string = "abcdefghijklmnopqrstuvwxyz";
    let numberSet: string = "1234567890"; // Fixed type from number to string
    let symbolSet: string = "@$%_+&#";

    let characterListForGen: string = "";
    if (passwordOptions.isPasswordGenerated === false) {

        if (passwordOptions.includeUpper) {
            characterListForGen += upperCaseCharacterSet;
        }
        if (passwordOptions.includeLower) {
            characterListForGen += lowerCaseCharacterSet;
        }
        if (passwordOptions.includeNumber) {
            characterListForGen += numberSet;
        }
        if (passwordOptions.includeSymbol) {
            characterListForGen += symbolSet;
        }

        if (characterListForGen !== "") {
            // call create pass
            let passwordResult: string = createPassword(characterListForGen, Number(passwordLength));
            changeStatePassword(passwordResult);
            changePasswordOptionsState({ ...passwordOptions, isPasswordGenerated: true, });
        }

    }


};

const createPassword = (characters: string, passwordLength: number): string => {
    let result: string = "";
    for (let index = 0; index < passwordLength; index++) {
        const characterIndex: number = Math.floor(Math.random() * characters.length);
        result += characters.charAt(characterIndex);
    }
    return result;
};

// reset state rerender
export const resetPasswordState = (
    setpass: React.Dispatch<React.SetStateAction<string>>,
    resetPasswordOptions: React.Dispatch<React.SetStateAction<passwordGenerationOptions>>,

) => {
    resetPasswordOptions({
        passwordLength: "",
        isPasswordGenerated: false,
        includeUpper: false,
        includeLower: true,
        includeNumber: false,
        includeSymbol: false,
    });
};
