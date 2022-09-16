export type ID = string;
const getLocalData = ():ID[] => {
    let arrayStr = localStorage.getItem("adopt");
    if(arrayStr) {
        let ar = JSON.parse(arrayStr);
        console.log(ar);
        return ar;
    }
    return [];
}
export default getLocalData;