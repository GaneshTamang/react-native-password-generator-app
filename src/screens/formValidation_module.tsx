
// formValidation.tsx

import { object } from "yup";

// Define the type of the state object
export type myFormState = {
  inputNumber: string;
  formErrors: { [key: string]: string };
  isValid: boolean;
};

// Validate form input
export const checkFormErrorsForValidation = (inputText: string) => {
  // initing empty error
  let currentErrors: { [key: string]: string } = {};
  // checking errors and adding
  if (!inputText.trim()) {
    currentErrors.inputText = "Input cannot be empty";
  } else if (isNaN(Number(inputText))) {
    currentErrors.inputText = "Input must be a number";
  } else if (Number(inputText) < 8) {
    currentErrors.inputText = "Invalid value. Should not be less than 8";
  } else if (Number(inputText) > 16) {
    currentErrors.inputText = "Invalid value. Should not be greater than 16";
  }
  // after check return error values
  return currentErrors;
};
export function validateForm(formstate: myFormState,): boolean {
  if (Object.keys(formstate.formErrors).length === 0) {
    return true;
  } else {
    return false;
  }

}

// Handle change and update the state
export const handleChange = (
  incomingKeyboardInput: string,
  changeStateOnTyping: React.Dispatch<React.SetStateAction<myFormState>>
) => {
  const currentErrors = checkFormErrorsForValidation(incomingKeyboardInput); // Validate the input text
  const validityCheckIfObjKeyValExists = Object.keys(currentErrors).length === 0;
  changeStateOnTyping((prevState) => ({
    ...prevState, // Keep previous state values
    inputNumber: incomingKeyboardInput, // Update only inputNumber
    formErrors: currentErrors, // Update form errors
    isValid: validityCheckIfObjKeyValExists, // Update validity
  }));
};

// Handle form submission and update the state
export const handleSubmit = (
  inputText: string,
  handleSubmitsetState: React.Dispatch<React.SetStateAction<myFormState>>
) => {
  const currentErrors = checkFormErrorsForValidation(inputText); // Use the validateForm function
  const validityCheckIfObjKeyValExists = Object.keys(currentErrors).length === 0;
  handleSubmitsetState((prevState) => ({
    ...prevState,
    formErrors: currentErrors, // Update form errors
    isValid: validityCheckIfObjKeyValExists, // Set form validity based on the error check
  }));
};

