
// formValidation.tsx



// typo for form stateObject
/**
 * 
 *  Typo for form state Object
 */
export type myFormState = {
  passwordLength: string;
  formErrors: formErrorMessage;
  isValid: boolean;
};

/**
 * 
 *  type for formError message object => [key] : value 
 */
type formErrorMessage = { [formkey: string]: string };
// Validate form input
export const checkFormErrorsForValidation = (inputText: string): formErrorMessage => {
  // initing empty error
  let currentErrors: { [formkey: string]: string } = {};
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
    passwordLength: incomingKeyboardInput, // Update only inputNumber
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

