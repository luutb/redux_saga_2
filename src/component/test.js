import React,{Component} from 'react'
import {View,Image, TouchableOpacity, TextInput,Text, Alert} from 'react-native'


export default class TestAnimation extends Component
{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    showError(err){
       
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if (nextProps.err == 0){
          
            Alert.alert("Vui long nhap lai")
        
          
        }else if (nextProps.err == 1){
            Alert.alert("oki")
        }
    } 
    render(){
        let {err} = this.props;
        console.log("main", err)
        return(
            <View>           
                <TouchableOpacity>
                    <TextInput placeholder={"Username"} onChangeText={(text)=>this.setState({username:text})}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity>
                    <TextInput placeholder="Password" onChangeText={(text)=>this.setState({password:text})}></TextInput>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.changeText(this.state.username,this.state.password)}>
                    <Text>abc</Text>
                </TouchableOpacity>
            </View>
        )
    }
}