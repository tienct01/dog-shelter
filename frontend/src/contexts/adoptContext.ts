import { createContext, Dispatch } from "react";
import { Dog } from "../App";
import { ID } from "../dataFromLocalStorage/getLocalData";

interface AdoptContextType {
    allDogs: Dog[];
    adoptedList: ID[];
    setAdoptedList: Dispatch<string[]>;
}
const AdoptContext = createContext<AdoptContextType>({} as AdoptContextType);
export default AdoptContext;