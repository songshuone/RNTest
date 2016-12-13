import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    BackAndroid,
    View,
} from 'react-native';
import Login from './rn/Login'
import  {BackPressHandle} from './rn/constant/NavigatorBack'
var _navigator;
class RNTest extends Component {
    constructor(props) {
        super(props);
        this.gotoBack = this.gotoBack.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.gotoBack);
    }

    gotoBack() {
        if (_navigator) {
            return BackPressHandle(_navigator);
        } else return false;

    }

    render() {
        return (
            <View style={{flex:1}}>

                <Navigator
                    ref="navigator"
                    initialRoute={{
                    component:Login,
                    name:'Login'
                }}
                    configureScene={()=>{
                      return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                    _navigator=navigator;
                    let Component=route.component;
                    return (<Component navigator={navigator} {...route}/>);
                    }}
                />

            </View>
        );
    }


}