// const INITAL_STATE = ()=>{ //Arrow function should remove and check that work or not
//     const covidData = []
// };
const INITAL_STATE = { //Arrow function should remove and check that work or not
    covidData: []
};
export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case "UPDATEDATA":
            return ({
                ...state,
                covidData: action.covidData
            })
        default:
            return state
    }
}