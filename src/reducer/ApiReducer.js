export const ApiReducer = (state = { apis: [] }, action) => {
    switch (action.type) {
        case "GET_LIST_API":
            return {apis: action.payload}
        default:
            return state;
    }
}