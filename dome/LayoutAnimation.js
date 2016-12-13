import React, { Component } from 'react';
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

var CustomLayoutAnimation = {
    duration: 5000,
    create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    }

};

export class CostomButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<TouchableHighlight
            style={styles.button}
            underlayColor={'#a5a5a5'}
            onPress={this.props.onPress}
            >
            <Text style={{fontSize:25,color:'green'}}>{this.props.text}</Text>
        </TouchableHighlight>
        );
    }

}

class RNTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: [],
            num: 0,
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
        // LayoutAnimation.linear;
        //自定义的动画
        LayoutAnimation.configureNext(CustomLayoutAnimation);
    }

    onPressAddView() {
      if(this.state.views.length>=0){
          this.setState({
            num: Number.parseInt(this.state.num) + 1,
        });
            this.state.views.push(this.renderAddedView(this.state.num));
      }
    }
    onPressRemoveView() {
        
        if(this.state.views.length>0){
          this.setState({
            num: Number.parseInt(this.state.num) - 1,
        });
          this.state.views.pop();
        }
         
    }
    renderAddedView(i) {
        return (<View  style={styles.view}>
            <Text style={{ color: '#fff' }}>{i}</Text>
        </View>);
    }

    render() {
       
        return (<View style={{ marginTop: 20, margin: 10 }}>
            <Text style={styles.welcome}> LayoutAnimation实例演示</Text>
            <CostomButton text={'添加view'} onPress={this.onPressAddView.bind(this)} />
            <CostomButton text={'删除view'} onPress={this.onPressRemoveView.bind(this)} />
            <View style={styles.viewContainer}>
                {this.state.views}
            </View>

        </View>);
    }


}


const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    view: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },


});
AppRegistry.registerComponent('RNTest', () => RNTest);