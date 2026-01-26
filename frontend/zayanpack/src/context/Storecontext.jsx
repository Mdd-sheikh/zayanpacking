import { createContext } from "react";

 export const Context = createContext(null);

 const ContextProvider = ({children}) =>{

    const check = () =>{
        console.log("helllo context");
        
    }
  const value = {
     check
  }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
 }

 export default ContextProvider;