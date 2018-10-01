//Fetch data from api call for second game

function apiDataTwo(response){

    return{
        type: "apiFetchDataTwo",
        payload: response
    }
}

export default apiDataTwo;