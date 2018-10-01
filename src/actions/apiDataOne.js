//Fetch data for api call from first game

function apiDataOne(response){

    return{
        type: "apiFetchDataOne",
        payload: response
    }
}

export default apiDataOne;