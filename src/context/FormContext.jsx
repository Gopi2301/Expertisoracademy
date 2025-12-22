import { createContext, useContext, useState } from "react";

// create context
const FormContext = createContext();

// provider
export const FormProvider = ({ children }) => {

    const [showApplyModal, setShowApplyModal] = useState(false);


    return (
        <FormContext.Provider value={{ showApplyModal, setShowApplyModal }}>
            {children}
        </FormContext.Provider>
    );
}


// custom hook
export const useFormContext = () => useContext(FormContext);
