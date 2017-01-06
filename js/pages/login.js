'use strict';
import React, {
    Component,
} from 'react';
import {
    Text,
    View,
    Platform,
    TextInput,
    Image,
    AlertIOS,
} from 'react-native';
import {connect} from 'react-redux';

import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';

import {logIn, skipLogin} from '../actions/user';

import commonStyle from '../styles/common';
import loginStyle from '../styles/login';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'sup1',
            password: '123456',
            btnFlag: true,
        };
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.isLoggedIn != this.props.isLoggedIn && nextProps.isLoggedIn === true) {
            //will redirect

            this.refs.modal.close();
            this.toMain();
            return false;
        }
        if (nextProps.status == 'doing') {
            //loggining
            this.refs.modal.open();
            return false;
        }
        if (nextProps.status == 'error' || nextProps.status == 'done') {
            this.refs.modal.close();
            return false;
        }

        return true;
    }

    toMain() {
        const {router} = this.props;
        router.toMain();
    }

    handleLogin() {
        if (!this.state.username || !this.state.password) {
            AlertIOS.alert(
                'username, password?'
            );
            return;
        }
        let opt = {
            'name': this.state.username,
            'password': this.state.password,
        };
        this.props.dispatch(logIn(opt));
    }

    handleRegister() {
        const {dispatch} = this.props;
        dispatch(skipLogin());
    }

    onChangeName(text) {
        this.setState({'username': text});
    }

    onChangePswd(text) {
        this.setState({'password': text});
    }


    render() {
        return (
            <View style={[commonStyle.wrapper, loginStyle.loginWrap]}>
                <Image source={require('../imgs/icons/bg.png')} resizeMode={'stretch'}>
                    <View style={loginStyle.loginMain}>
                        <View style={loginStyle.loginMainCon}>
                            <View style={loginStyle.comCulture}>
                                <Text style={[commonStyle.textCenter,{color:'#ccc'}]}>Welcome</Text>
                                <Text style={[commonStyle.textCenter,{color:'#ccc'}]}>You are the best.</Text>
                            </View>
                            <View style={loginStyle.formStyle}>
                                <View style={[loginStyle.formInput,loginStyle.formInputSplit]}>
                                    <Image source={require('../imgs/icons/user.png')}
                                           resizeMode={'stretch'}
                                           style={{width:25,height:25}}/>
                                    <TextInput
                                        ref="login_name"
                                        placeholder='username'
                                        style={[loginStyle.loginInput,{height:45,alignSelf:'center'}]}
                                        onChangeText={this.onChangeName.bind(this)}/>
                                </View>
                                <View style={loginStyle.formInput}>
                                    <Image source={require('../imgs/icons/passicon.png')}resizeMode={'contain'}
                                           style={{width:25,height:25}}/>
                                    <TextInput
                                        ref="login_psw"
                                        style={[loginStyle.loginInput,{height:45,alignSelf:'center'}]}
                                        secureTextEntry={true}
                                        placeholder='password'
                                        onChangeText={this.onChangePswd.bind(this)}/>
                                </View>
                                <View style={{alignItems: 'flex-end'}}>
                                    <View style={loginStyle.forget}>
                                        <View>
                                            <Image source={require('../imgs/icons/prompt.png')}
                                                   style={{width:15,height:15,marginRight:10}}
                                                   resizeMode={'contain'}/>
                                        </View>
                                        <View >
                                            <Text style={{color:'#62a2e0', backgroundColor: 'white'}}>forget
                                                password?</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[loginStyle.btn,]}>
                                <View style={loginStyle.btnWrap}>
                                    <Text style={loginStyle.loginBtn2} onPress={this.handleLogin.bind(this)}>Log
                                        in</Text>
                                </View>
                                <View style={loginStyle.btnWrap}>
                                    <Text style={loginStyle.loginBtn2}
                                          onPress={this.handleRegister.bind(this)}>Skip</Text>
                                </View>
                            </View>
                        </View>


                    </View>
                </Image>

                <ModalBox style={[commonStyle.modal,commonStyle.justAlign]}
                          ref={"modal"} backdropPressToClose={false}
                          animationDuration={10}
                          backdrop={true}
                          backdropOpacity={0}
                >
                    <Spinner style={commonStyle.spinner}
                             isVisible={true}
                             size={50} type="Arc" color="#FFFFFF"/>
                </ModalBox>


            </View>
        );
    }
}


function select(store) {
    return {
        isLoggedIn: store.userStore.isLoggedIn,
        user: store.userStore.user,
        status: store.userStore.status,
    }
}


export default connect(select)(LoginPage);


