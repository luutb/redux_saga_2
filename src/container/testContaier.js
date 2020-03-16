import {LoginAcc} from '../redux_saga/action/loginAction'
import { connect } from 'react-redux'
import test from '../component/test'

function mapStateToProps(state, ownProps){
    console.log( state.LoginReducer)
    return {
        err: state.LoginReducer.error       
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
      changeText:(username,password)=>{ 
          dispatch(LoginAcc(username,password))
      },
      onMouseLeaveRedux:()=>{
     
         dispatch(mouseLeave())
      }
      
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(test)