import React, { createContext, useState } from "react"; // Import createContext API

export const StateContext = createContext();
export const SetStateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <StateContext.Provider value={{ isLoaded }}>
      <SetStateContext.Provider value={{ setIsLoaded }}>
        {children}
      </SetStateContext.Provider>
    </StateContext.Provider>
  );
};

export default StateProvider;
