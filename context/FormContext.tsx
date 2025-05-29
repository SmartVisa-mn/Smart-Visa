// context/FormContext.tsx
import { createContext, useState, ReactNode } from "react";

export const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
