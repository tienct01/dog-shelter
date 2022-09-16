import { ID } from "./getLocalData"

const updateLocalData = (data: ID[])=> {
    localStorage.setItem("adopt", JSON.stringify(data));
}
export default updateLocalData;
