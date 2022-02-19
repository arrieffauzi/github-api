import axios from "axios"

export const getApiList = () => {
    return (dispatch) => {
        axios
            .get("https://api.github.com/users/arrieffauzi/repos")
            .then(function (response) {
                //handle success
                dispatch({
                    type: "GET_API_LIST",
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
                console.log('respon',response)
            })
            .catch(function (error) {
                //handle error
                dispatch({
                    type: "GET_API_LIST",
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
                console.log('error',error)
            })
    }
}