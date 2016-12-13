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
        this.state={
            anim:new Animated.Value(0),
        };
      
    }
render(){
    return(
    <Animated.Image source={{uri:'https://pic2.zhimg.com/v2-d4b6cad0d9a882f85c349a407d492f59_200x112.jpg'}}
       style={{flex:1,
        transform:[{scale:this.state.anim.interpolate(
            {
                inputRange:[0,1],
                outputRange:[0,300],
            }
        )},
        {translateX:this.state.anim.interpolate({
            inputRange:[0,1],
            outputRange:[0,300]
        })
        },
        {
            rotate:this.state.anim.interpolate({
                inputRange:[0,1],
                outputRange:[0,300],
            })
        }
        ]}
       }
    resizeMode={'stretch'}
    />
   );
}
componentDidMount () {
    this.state.bounceValue.setValue(1.5);

    //Animated  动画类型: spring 弹掉动画 friction 摩擦力值 默认为7
    // Animated.spring(
    //     this.state.bounceValue,
    //     {
    //         toValue:0.8,
    //         friction:1,
    //         tension:10,//弹跳的速度
    //     }
    // ).start();
  Animated.spring(
  this.state.anim,{
      toValue:0,
      velocity:7,
      tension:-20,
      friction:3,
  }

  ).start;

// Animated.timing(//延时动画
//     this.state.bounceValue,
//     {  
//         toValue:0.8,
//         duration:3500,//持续时间
//     }
// ).start();
//加速度
//   Animated.decay(
//       this.state.bounceValue
//       ,
         
//          {velocity:1,
//           deceleration:0.2}
//   ).start();
   
}

show(){
   console.log('被点击了...');
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