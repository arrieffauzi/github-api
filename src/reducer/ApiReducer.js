export const ApiReducer = (state = { apis: [] }, action) => {
    switch (action.type) {
        case "GET_API_LIST":
            return {apis: action.payload}
        default:
            return state;
    }
}