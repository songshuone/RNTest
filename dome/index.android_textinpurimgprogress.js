/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  Button,
  ViewPagerAndroid,
  ListView,
  BackAndroid,
  Platform,
  ProgressBarAndroid,
} from 'react-native';
  
let Dimensions=require('Dimensions');
let totalWidth=Dimensions.get('window').width;
let totalHeight=Dimensions.get('window').height;
let textInputWidth=totalWidth*0.6;
let uriImg='https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png';

 class RNTest extends Component{
	 constructor(props){
      super(props);
      // 

	 }
	 render(){
   console.log("xxx");

		 return <View 
        style={styles.container}
        // accessible={true}
        //onMagicTap={this.showToast('onMagicTap')}
        //onAccessibilityTap={this.showToast('onAccessibilityTap')}
      
     >
		 <Text style={styles.text} >Text风格样式</Text>
        <Image  
        source={
          {
            uri:uriImg
          }
        } 
        style={[styles.img,{justifyContent:'flex-end',alignItems:'center',}]}
        // onLoad={this.showToast('load surcess')}
        // onLoadStart={this.showToast('  start load ')}
        // onLoadEnd={this.showToast('load fail')}
        resizeMode={'stretch'}
          //image中嵌套text 或 view
        >
        <Text style={{color:'blue',fontSize:20}}>Baidu</Text>
        </Image>
       
       <TextInput 
               style={styles.textInput}
               autoCapitalize={'none'}//控制textinput输入的字符进行切换 none  不进行切换
               autoCorrect={true}//设置拼写自动修正功能（默认开启的）
               autoFocus={false}//是否默认获取到焦点 默认为false  (需要在组件加载componentDidMount完成之后才能获取到焦点)
               defaultValue={'请输入'}//默认显示的文字
               editable={true}//设置文本框是否可以编辑 默认为true
               keyboardType={'numeric'}//键盘类型 numeric数字键盘 其他类型 查看文档
              // maxLength={5}//限制输入的最大长度
               multiline={true}//设置可以输入多行文字 默认false
               onBlur={()=>{alert('没有焦点了')}}//在textinput失去焦点的时候调用
               onChangeText={(text)=>{console.log(text);}}//text的内容发生改变的时候调用    并且会传递文本内容
               //onChange={}//在textinput内容发送变化的时候调用
               onFocus={this.showToast('我获取到焦点了')}//文本框获取到焦点的回掉
               placeholder={'pleace input content'}//类似于android 的hint
               placeholderTextColor={'red'}
               //secureTextEntry={true}//输入字符后显示为圆点
               value={123}
              //  numberOfLines={3}//设置文本输入框行数，前提是要设置multiline=[true}
              textAlign={'right'}
              textAlignVertical={'top'}
              underlineColorAndroid={'red'}
              

       />
      <ProgressBarAndroid 
            style={{width:totalWidth*0.6}}
            color={'green'}
            indeterminate={true}//设置是否要显示一个默认的进度信息
            progress={0.3}//设置加载的进度值
            styleAttr={'Horizontal'}
      />
		 
		 </View>
	 }
showToast(msg){


  ToastAndroid.show(msg,1);
}
	
	
	
}
	
  const styles=StyleSheet.create(
    {
      container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backfaceVisibility:'hidden',//设置view翻转的是否可见
        borderWidth:2,
        borderColor:'green',
        borderStyle:'solid',
        opacity:0.5,//透明度
        margin:20,
        elevation:50,//设置z轴  可以产生立体效果
        borderRadius:15,//边框圆角
        overflow:'hidden',// 设置内容超过容器显示还是隐藏
        
      },
      text:{
        color:'blue',
        fontFamily:'粗体',//字体名称
        fontSize:40,
        fontStyle:'italic', //字体风格 italic（斜体）
        fontWeight:'bold',//字体权重  normal bold 100
        textShadowOffset:{width:4,height:4},//设置阴影效果
        textShadowRadius:5,//阴影效果圆角
        textShadowColor:'pink',//阴影颜色
        letterSpacing:10,//字符间距
        textAlign:'center',   //文字对齐方式
        //lineHeight:50,//行高
        textDecorationLine:'underline',//横线位置
        textDecorationStyle:'dashed',//横线的样式
        textDecorationColor:'green',//横线的颜色
        writingDirection:'ltr'//文本方向
          },
      img:{
        width:150,
        height:100,
        alignSelf:'center',
        borderRadius:15,
        borderColor:'red',
        borderWidth:1,
        opacity:0.5,
        overflow:'visible',
      
    },
    textInput:{
     width:textInputWidth,
    // backgroundColor:'white',
     
    },

    }
   
    );
AppRegistry.registerComponent('RNTest', () => RNTest);
