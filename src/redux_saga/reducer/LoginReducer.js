import {CLICK_BUTTON_LOGIN,LISTEN_CLICK_BUTTON_LOGIN,SUCCESS,ERROR} from '../action/actionTypes'

const defaultState ={

    data:"Không",
    isLoading:'',
    error:0
}

export default(state=defaultState,action) =>{

    switch(action.type){
        case CLICK_BUTTON_LOGIN:
            console.log("CLICK_BUTTON_LOGIN")
            return {...state,
                    data:null,
                    error:-1               
                    }

        case SUCCESS:           
        console.log("SUCCESS")
            return {...state,
                    data:action.value,
                    error:1}

        case ERROR:     
        console.log("ERROR")      
            return {...state,
                    error:0}

        default:
            return state;
    }

}