import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    ToastAndroid,
} from 'react-native';
import  AppMain from './AppMain'
import Constant from './constant/Constant'
import Button from './componet/Button'
export default class extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.jumpToast = this.jumpToast.bind(this);
    }

    jumpToast() {
        const {navigator}=this.props;
        if (navigator) {
            navigator.push({
                component: AppMain,
                name: 'AppMain',
                params: {
                    name: 'AppMain',
                }
            });

        }
    }

    // <Button onPress={this.jumpToast} text={'Login'}/>
// <Image
// style={{marginTop:30,width:Constant.screen.screenW/2.5,height:Constant.screen.screenW/3,alignSelf:'center'}}
// resizeMode={'stretch'}
// source={require('./drawable/login/ic_loginlogo.png')}/>
    render() {
        return (<View style={{flex:1}}>
                <View style={{backgroundColor:'#FF6450',height:55,justifyContent:'center',alignItems:'center'}}><Text
                    style={{fontSize:20,color:'white'}}>登录</Text></View>

                <View
                    style={{flexDirection:'row',justifyContent:'center',height:50,padding:5,backgroundColor:'white',marginTop:Constant.screen.screenW*0.6}}>
                    <Text
                        style={{textAlign:'center',alignSelf:'center',marginLeft:40,marginRight:5,fontSize:17}}>手机号:</Text>
                    <TextInput placeholder={'请输入手机号'}
                               placeholderTextColor="pink"
                               keyboardType={'numeric'}
                               style={{backgroundColor:'white',flex:1,textAlign:'left',color:'red',}}
                    />
                </View>
                <View
                    style={{flexDirection:'row',justifyContent:'center',height:50,padding:5,backgroundColor:'white',marginTop:20}}>
                    <Text
                        style={{textAlign:'center',alignSelf:'center',marginLeft:40,marginRight:5,fontSize:17}}>密码
                        :</Text>
                    <TextInput placeholder={'请输入密码'}
                               placeholderTextColor="pink"
                               style={{backgroundColor:'white',flex:1,textAlign:'left',color:'red',}}
                    />
                </View>
                <View>

                    <Button onPress={()=>{
                        ToastAndroid.show('login',ToastAndroid.SHORT);
                        }} text={'登录'}/>

                </View>
            </View>

        );
    }
}


