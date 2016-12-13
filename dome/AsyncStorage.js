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
  AppState,
} from 'react-native';

var STORAGE_KEY_ONE = '@AsyncStorageDome:key_one';
var STORAGE_KEY_MESSAGE = "@AsyncStorageDome:key_message";


//简单封装的组件
export class Button extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="#a9d9d4">
        <Text style={this.props.style}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class RNTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };

  }

  appendMessage(message){
     this.setState({messages:this.state.messages.concat(message)});
   }
  componentDidMount() {
    this.loadInitialState().done();
  }


  //初始化数据 默认从AsyncStorage获取数据
  async loadInitialState() {
  
      var value = await AsyncStorage.getItem(STORAGE_KEY_ONE);
      if (value != null) {
        this.appendMessage('从存储中获取到数据为：' + value);
      } else {
        this.appendMessage('存储中无数据，初始化为空的数据');
      }
    
    
  }
  //保存存储数据ONE
  async saveValueOne() {

      await AsyncStorage.setItem(STORAGE_KEY_ONE, "我是张三");
      this.appendMessage('保存到存储的数据为' + '我是张三');
  
   
  }
async removeValueOne(){
   try{
     await AsyncStorage.removeItem(STORAGE_KEY_ONE);
     this.appendMessage('数据删除成功...');
    
   }
   catch(error){
      this.appendMessage('AsyncStorage错误');
   }
  
}
 
  render(){


    return(<View >
          <Text style={styles.welcome}>
          AsyncStorage使用实例
          </Text>
          <Button style={styles.content} text={'点击存储数据-我是张三'} onPress={this.saveValueOne}/>
           <Button style={styles.content} text={'点击删除数据'} onPress={this.removeValueOne}/>
            <Text style={styles.content}>信息为：</Text>
            {this.state.messages.map((m)=><Text style={styles.content} key={m}>{m}</Text>)}
    
    </View>);
  }

}

const styles = StyleSheet.create({
welcome: {
    fontSize: 14,
    textAlign: 'left',
    margin: 10,
  },
  content:{
    fontSize: 13,
    textAlign: 'left',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  }
});

AppRegistry.registerComponent('RNTest', () => RNTest);