//define the innitial state
const initialState = {
    apiInfo: []
}

//defines the reducer with an initialized state and logic to handle the action
function TwitchApp(state = initialState, action) {
    switch(action.type){
        case 'apiFetchDataOne':
            return{
                ...state,
                apiInfo: action.payload
            }
        
        case 'apiFetchDataTwo':
            return{
                ...state,
                apiInfo: action.payload
            }
        
        case 'apiFetchDataThree':
            return{
                ...state,
                apiInfo: action.payload
            }
           
        default:
            return state
    }
}

export default TwitchApp