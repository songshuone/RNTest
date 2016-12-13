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
      let navigationView=(<View>
       <Text style={styles.text}>导航栏标题1</Text>
       <Text style={styles.text}>导航栏标题2</Text>
       <Text style={styles.text}>导航栏标题3</Text>
       <Text style={styles.text}>导航栏标题4</Text>
      </View>);

		 return (<DrawerLayoutAndroid
             //导航菜单视图的宽度
             drawerWidth={150}
             //参数为枚举类型 根参数来指定导航菜单从哪一侧滑动出来，left right

             drawerPosition={DrawerLayoutAndroid.positions.right}
             //渲染导航菜单
             renderNavigationView={()=>navigationView}
             // onDrawerClose 在导航菜单关闭的时候的回掉方法
             //onDrawerOpen 在导航菜单打开的时候的回掉方法f
             
             //keyboardDismissMode （视图在拖动的时候是否隐藏软键盘）
             //参数为 none 默认值  不会隐藏   on-drag隐藏
             
             //onDrawerSilde 当导航视图与用户进行交互的时候调用 类似于 onreume
             
             //onDrawerStateChanged  当导航栏视图发生

             >
             <View>
               <Image source={require('./img/banner_wait.jpg')}
                style={styles.img}/>
                <Text>主视图</Text>
             </View>
          
     
     </DrawerLayoutAndroid>);
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
        fontSize:20,
        top:50,
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
        writingDirection:'ltr',//文本方向
        lineHeight:totalHeight/5.0,
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
