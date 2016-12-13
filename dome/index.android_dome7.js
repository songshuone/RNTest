/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TimePickerAndroid,
  DatePickerAndroid,
  TouchableHighlight,
  Navigator,
  ToolbarAndroid,
  Picker,
  Alert,
  ToastAndroid,
  Animated,
  ActivityIndicator,
  DrawerLayoutAndroid,
  
} from 'react-native';

class RNTest extends Component{
	render(){
		return(
		<Navigator 
		  initialRoute={{index:0,}}
		  renderScene={(route,navigator)=>
		  <DatePickerAndroidComponent 
		    onForward={()=>{
				var nextIndex=route.index+1;
				navigator.push({
					index:nextIndex,
				});
			}}
			onBack={()=>{
				if(route.index>0){
					navigator.pop();
				}
		  }}
		  >
		  </DatePickerAndroidComponent>
		  }
		  
		/>
		
		
		
		);
	}
}

 export default class DatePickerAndroidComponent extends Component {
	//需要在构造器中初始化state;  state 状态改变之后会调用render  (state只与组件有关)
constructor(props){
	super(props);
	this.state={
		text:'',
		dateStr:'MyDATE',
		fadeAnim: new Animated.Value(0), // init opacity 0
	    animating:true,
	}
}
 
 /**
  <View style={{width:100,height:100,backgroundColor:'powderblue'}}/>
	   <View style={{width:100,height:100,backgroundColor:'powderblue'}}/>
	     <View style={styles.childStyle}/>  
		 <View style={{width:100,height:100,backgroundColor:'powderblue'}}/>
		 <TextInput style={styles.textInput} 
		 placeholder={'xxxxx'}
		 secureTextEntry={'true'}
		 placeholderTextColor={'blue'}
		 onChangeText={(text)=>{this.setState({text:text})}}/>
		 <Text style={{padding:10,fontSize:20,}}>
			 {this.state.text}
		 </Text>
		 <Image style={{width:300,height:200,}}
		 source={{uri:'http://ww3.sinaimg.cn/large/610dc034jw1f8w2tr9bgzj20ku0mjdi8.jpg'}}/>
 **/

  render() {
	  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
	  
	  
  return (  <DrawerLayoutAndroid
						  drawerWidth={300}
						  drawerPosition={DrawerLayoutAndroid.positions.Left}
						  renderNavigationView ={() => navigationView}>
						 <View style={{flex:1,flexDirection:'column'}}>
	  
	 <View style={{flexDirection:'row',}}>
	  <ToolbarAndroid 
	    titleColor={'#fff'}
		 // navIcon={require('./img/xx.png')}
		  //logo={require('./img/check_shop.png')}
         style={{backgroundColor:'green',height:55,flex:1}}
		 title={'RNTest'}
		 subtitle={'subTitle'}
		 subtitleColor={'red'}
		 //overflowIcon={require('./img/home_press.png')}
		 actions={[{title:'setings',icon:require('./img/xx.png'),show:'always'},
		 {title:'setings',icon:require('./img/home_press.png'),show:'ifRoom'},
		 {title:'nevers',icon:require('./img/home_press.png'),show:'never'}]}
		 onActionSelected={this.callBacked}
		 //logo不能触发回调      navIcon可以
		 //onIconClicked={this.click}
  /></View>
  <ScrollView style={{backgroundColor:'#999'}}>
      <View style={styles.container}>
		<View style={{backgroundColor:'#555',flexDirection:'row'}}>
		   <View style={{flex:1,}}>
		   <Text style={{fontSize:30,color:'#fff',alignSelf:'center'}}>Text</Text>
		   </View>
		</View>
					<View 
						style={{
						marginLeft:10,
						marginRight:10,
						marginTop:10,
						backgroundColor:'#CDCDCD',
						width:340,}}>
						 <Text style={{fontSize:15,color:'#000',marginLeft:10,marginTop:5,marginBottom:5}}>Auto-focus</Text>
				  </View>
					<View   
					style={{
							backgroundColor:'#888',
							marginLeft:10,
							marginRight:10,
							width:340,
							height:80,
							justifyContent:'center',
							alignItems:'center',
								}}>
					
							<View
							style={{
									backgroundColor:'#f9f9f9',
									width:300,
									borderColor:'grey',
									height:55,
									borderRadius:10,
									alignSelf:'center',
									borderWidth:1,
										}}
										>
								 <TextInput 
								     autoFoucs={true}
									 style={{ height:50,
									 backgroundColor:'#f9f9f9',
									 alignSelf:'center',
									 width:280,
									 fontSize:15,
									 color:'#000'}}
									 placeholder={'请输入...'}
								 />
						  </View>
					</View>
					
					<View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'grey',width:340,}}>
							<Text style={{fontSize:15,color:'#000',alignSelf:'center',margin:5,}}>Live Re-Write maxLength</Text>
					
					</View>
					<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
					         <View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
							 <TextInput style={{backgroundColor:'#f2f2f2'}}
										placeholder={'xx'}	
										maxLength={5}
										keyboardType={'numeric'}
										
							 />
							 </View>
					        <Text style={{fontSize:15,color:'blue',flex:1}}>20</Text>
					</View>
						
					<View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'grey',width:340,}}>
							<Text style={{fontSize:15,color:'#000',alignSelf:'center',margin:5,}}>Live Re-Write (no space  allows)</Text>
					
					</View>
					<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
					         <View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
							 <TextInput style={{backgroundColor:'#f2f2f2'}}
										placeholder={'xx'}	
										
							 />
							 </View>
					     
					</View>
					<View style={{marginTop:10,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10,backgroundColor:'grey',width:340,}}>
							<Text style={{fontSize:15,color:'#000',alignSelf:'center',margin:5,}}>auto-capitalize</Text>
					
					</View>
					
					<View >
						<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
								
                                <View style={{flex:3}}> 
									<Text style={{fontSize:15,color:'blue',alignSelf:'flex-end'}}>sentences</Text>
								</View>
								<View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
								 <TextInput style={{backgroundColor:'#f2f2f2'}}
											placeholder={'xx'}	
											autoCapitalize='sentences'
								 />
								 </View>
							 
						</View>
						<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
								<View style={{flex:3}}>
								    <Text  style={{fontSize:15,color:'blue',alignSelf:'flex-end'}}>words</Text>	
								</View>							
								<View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
								 <TextInput style={{backgroundColor:'#f2f2f2'}}
											placeholder={'xx'}	
											autoCapitalize='words'
								 />
								 </View>
							 
						</View>
						<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
								<View style={{flex:3}}>
									<Text  style={{fontSize:15,color:'blue',alignSelf:'flex-end'}}>characters</Text>
								</View>						
								<View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
								 <TextInput style={{backgroundColor:'#f2f2f2'}}
											placeholder={'xx'}	
											autoCapitalize='characters'
								 />
								 </View>
							 
						</View>
						<View style={{ flexDirection:'row',alignItems:'center', backgroundColor:'#f2f2f2' ,width:340,height:80,marginLeft:10,marginRight:10,}}>
								<View style={{flex:3}}>
									<Text style={{ fontSize:15,color:'blue' ,alignSelf:'flex-end'}}>none</Text>
								</View>							
								<View style={{borderColor:'grey',borderWidth:1,flex:8,marginLeft:10,height:55,marginRight:10,}}>
								 <TextInput style={{backgroundColor:'#f2f2f2'}}
											placeholder={'none'}	
											autoCapitalize='none'
											multiline={true}
											
								 />
								 </View>
							 
						</View>
					</View>
					<TouchableHighlight 
					underlayColor='blue' 
					style={{backgroundColor:'green',margin:10,}}
					onPress={this.showPicker.bind(this,"text",{date:new Date(2016,5,6)})} >
						<Text style={{fontSize:20,margin:5,}}>TimePickerAndroid</Text>
					</TouchableHighlight>
					<TouchableHighlight 
					underlayColor='blue' 
					style={{backgroundColor:'green',margin:10,}}
					onPress={this.showPickerMy.bind(this,"xx",{date:new Date(2016,5,8)})} >
						<Text style={{fontSize:20,margin:5,width:200,}}>{this.state.dateStr}</Text>
					</TouchableHighlight>
					<DataPickerDemo/>
      
	                <Picker  
					    style={{width:300,height:55,backgroundColor:'#678'}}
						selectedValue={this.state.language}
					    onValueChange={(lang)=>this.setState({language:lang})}        
					>
					  <Picker.Item label='java' value='java'/>
					  <Picker.Item label='ios' value='ios'/>
					  <Picker.Item label='c++' value='c++'/>
					
					</Picker>
					
					<Text 
						style={{fontSize:20,color:'red',margin:10}} 
						onPress={()=>Alert.alert('温馨提示!','确认退出吗')}
						>
						点击弹出默认的Alter
						</Text>
						<Text 
						style={{fontSize:20,color:'red',margin:10}} 
						onPress={()=>Alert.alert('温馨提示!','确认退出吗',[{text:'取消',onPress:()=>ToastAndroid.show('你点击取消~',ToastAndroid.SHORT)},
							{text:'确定',onPress:()=>ToastAndroid.show('你点击了确定',ToastAndroid.SHORT)
						}])}
						>
						点击弹出两个按钮的Alter
						</Text>
						<Text 
						style={{fontSize:20,color:'red',margin:10}} 
						onPress={()=>Alert.alert('温馨提示!','想退出吗',[{text:'我想想',onPress:()=>ToastAndroid.show('你想吧',ToastAndroid.SHORT)},
						{text:'不想了',onPress:()=>ToastAndroid.show('好吧',ToastAndroid.SHORT)},
						{text:'退出',onPress:()=>ToastAndroid.show('你想当逃兵!',ToastAndroid.SHORT)}])}
						>
						点击弹出三个按钮的Alter
						</Text>
				  <ActivityIndicator 
							animating ={this.state.animating}
							color ={'green'}
							size ={'large'}
							style={{width:50,height:50,backgroundColor:'white'}}>
						    
						
						</ActivityIndicator>
						<Text 
						onPress={this.props.onForward}
						style={{fontSize:30}}>{this.state.animating?'hide':'显示'}</Text>
						
	             
	  </View>
	  
	  </ScrollView>
	  
	  
	  </View>
  </DrawerLayoutAndroid>)};
  /**
      
  );
  }**/
  
  togleActivityIndicator(){
	  this.setState({
			  animating:!this.state.animating
		  });
	 /**
	  setTimeout(()=>{
		  this.setState({
			  animating:!this.state.animating
		  });
		  this.togleActivityIndicator();
	  },3000);**/
  }
 componentDidMount(){
	 this.togleActivityIndicator();
 }
click(){
	 alert('这个图标被点击了');
}
callBacked(position){
	   alert(position);
   }
   //进行创建时间日期选择器
  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }
  
  async showPickerMy(text,options){
	  try{
		  var newState;
		  const {action,year,month,day} = await DatePickerAndroid.open(options);
		  if(action===DatePickerAndroid.dismissedAction){
			  newState = 'dismissed';
		  }else{
			 var date = new Date(year, month, day);
			 var month=date.getMonth()+1;
			  newState= date.getFullYear()+'/'+month+'/'+date.getDate();
              
		  }
		  this.setState({dateStr:newState});
		  
	  }
	  catch({code,message}){
		  alert(message);
	  }
	  
  }
   
  }
  /**  导航
  <Navigator 
					   initialRoute={{name:'My First Scene',index:0}}
					  //  配置页面跳转的动画
					   configureScene={(route)=>{
							return Navigator.SceneConfigs.VerticalDownSwipeJump;
						}}
						/**把对应的导航条的属性传给所渲染的组件
					   renderScene={(route,navigator)=>
					   <MyScene 
					   title={route.name} 
					   onForward={()=>{
						   const nextIndex = route.index+1;
						   /**跳转到新的场景
						   navigator.push({
							   name:'Scene'+nextIndex,
							   index:nextIndex,
						   });
						   
					   }}
					   
					   onBack={()=>{
						   if(route.index > 0){
							   /**退出并卸载当前场景
							   navigator.pop();
							   /**navigator.popToTop();   pop到栈中第一个场景，卸载掉所有的其他场景
							   
						   }
					   }}
					   />}
					/>)};
					
					**/
					
					/**
	
    );**/
 
/**
 //进行创建时间日期选择器
  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }
  
  async showPickerMy(text,options){
	  try{
		  var newState;
		  const {action,year,month,day} = await DatePickerAndroid.open(options);
		  if(action===DatePickerAndroid.dismissedAction){
			  newState = 'dismissed';
		  }else{
			 var date = new Date(year, month, day);
			 var month=date.getMonth()+1;
			  newState= date.getFullYear()+'/'+month+'/'+date.getDate();
              
		  }
		  this.setState({dateStr:newState});
		  
	  }
	  catch({code,message}){
		  alert(message);
	  }
	  
  }
  **/



 export  default class MyScene extends Component{
	 
	static defaultProps={
		title:'MyScene',
	
	}
	 render(){
		 
		 return(
		 <View>
			<Text style={{fontSize:20,color:'red',}} onPress={this.props.onForward}>{this.props.title}</Text>
			<Text style={{fontSize:20,color:'blue',marginTop:10,}} onPress={this.props.onBack}>back</Text>
		 </View>);
	 }
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection:'column',
	justifyContent:'flex-start',
	alignItems:'flex-start'
  },
  childStyle:{
	
	  width:100,
	  height:100,
	  backgroundColor:'red',
  }
  ,
  textInput:{
	  height:65,
	  width:300,
	  fontSize:20,
	  color:'red',
	  backgroundColor:'grey'
  }
  ,welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});
//简单封装一个组件
class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
class DataPickerDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      presetDate: new Date(2016, 3, 5),
      allDate: new Date(2020, 4, 5),
      simpleText: '选择日期,默认今天',
      minText: '选择日期,不能比今日再早',
      maxText: '选择日期,不能比今日再晚',
      presetText: '选择日期,指定2016/3/5',
    };
  }
  //进行创建时间日期选择器
  async showPicker(stateKey, options) {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);      
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>
            日期选择器组件实例
        </Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#a5a5a5"
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <Text style={styles.buttonText}>点击弹出基本日期选择器</Text>
        </TouchableHighlight>
        <CustomButton text={this.state.presetText}
         onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}/>
         <CustomButton text={this.state.minText}
         onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:new Date()})}/>
         <CustomButton text={this.state.maxText}
         onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date()})}/>
      </View>
    );
  }
}

//========================================
//=========================================


AppRegistry.registerComponent('RNTest', () => RNTest);
