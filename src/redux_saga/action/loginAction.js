import {CLICK_BUTTON_LOGIN,LISTEN_CLICK_BUTTON_LOGIN} from './actionTypes'

export function LoginAcc(username,password){
    return {type:LISTEN_CLICK_BUTTON_LOGIN,username:username,password:password}
}