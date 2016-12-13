import React, {Component} from 'react';
import {
    AppRegistry,

    Navigator,
    StyleSheet,

    TouchableOpacity,

    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    TimePickerAndroid,
    DatePickerAndroid,
    TouchableHighlight,

    ToolbarAndroid,
    Picker,
    Alert,
    ToastAndroid,
    Animated,
    ActivityIndicator,
    DrawerLayoutAndroid,
    WebView,
    RefreshControl,
    StatusBar,
    MapView,
    ViewPagerAndroid,
    ListView,
    Modal,
    Switch,
    BackAndroid,
    AsyncStorage,
    Platform,
    ProgressBarAndroid,
    LayoutAnimation,
    UIManager,
    AppState,
} from 'react-native';
export default class extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

    }


    render() {
        return (<View style={{flex:1,backgroundColor:'grey'}}>

                <Text style={{fontSize:30,color:'blue'}}>
                    {this.props.params.name}</Text>
            </View>

        );
    }
}


