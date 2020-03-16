import { put, takeEvery } from 'redux-saga/effects'
import{CLICK_BUTTON_LOGIN,LISTEN_CLICK_BUTTON_LOGIN,ERROR,SUCCESS} from '../action/actionTypes'
import * as callApi from '../../apiResponse/callApiLoginCtr' 


export function* checkLogin({username,password}){
    console.log("logi 22");

    // cai nay la luc dau dua du lieu ve mac dinh
    // xem ben reducer
    yield put({type:CLICK_BUTTON_LOGIN})
    var response;
    response = yield callApi._callApiPost({user_name:username,password}) ;


     if(response.data!=null&&response.error==1){
         
         yield put({type:SUCCESS,value:response})
     }
     else{
      
         yield put({type:ERROR,value:response})
     }
  }

export function* watchCheckLogin(){
    yield takeEvery(LISTEN_CLICK_BUTTON_LOGIN,checkLogin)
}