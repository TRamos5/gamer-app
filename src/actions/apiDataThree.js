//Fetcha data from api call for third game

function apiDataThree(response){

    return{
        type: "apiFetchDataThree",
        payload: response
    }
}

export default apiDataThree;