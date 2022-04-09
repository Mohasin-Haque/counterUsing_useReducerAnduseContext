import { createContext, useContext } from "react";
import { useReducer } from "react";
import { counterReducer } from "./counterReducer";

const CounterContext = createContext(null)

const useCounter = () => useContext(CounterContext)

const CounterProvider = ({ children }) => {
const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
  return(
    <CounterContext.Provider value={{state, dispatch}}>
    { children } 
    </CounterContext.Provider>
  )
}

export { CounterProvider, useCounter };
