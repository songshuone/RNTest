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
} from 'react-native';


class RNTest extends Component{
    
	render(){
		let defaultName = 'Login';
	    let defaultComponent=Login;
		
		return(
		<View style={{flex:1}}>
			<StatusBar
				 backgroundColor="red"
				translucent={true}
				hidden={false}
				animated={true}  
				 barStyle="light-content"/>
		
			<Navigator
				 initialRoute={{name:defaultName,component:defaultComponent}}
				 renderScene={(route,navigator)=>{
					 let  Component=route.component;
					 return <Component {...route.params} navigator={navigator}/>
				 }} 
			/>
		</View>);
	}
}
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
      name : null
    } 
	}
	
	_onLogin(){
		this.props.navigator.push({
			title:'homepage',
			component:Home,
			params:{
				name:'Tom'
			}
		})
	}
	render(){
		
		return(
		<View style={{backgroundColor:'green',flex:1,alignItems:'center',justifyContent:'center'}}>
		<TouchableHighlight
		 style={{backgroundColor:'grey'}}
		  underLayColor='rgb(210,230,255)'
          onPress={this._onLogin.bind(this)}		
		>
		<Text syle={{fontSize:30,color:'red'}}>Login</Text>
		</TouchableHighlight>
		
		
		</View>
		
		);
	}
}
export default class Home extends Component{
	constructor(props){
		super(props);
		 this.state = {
      name : 'Frank'
    } 
	}
	 componentDidMount(){
		 this.setState({
			 name:this.props.name,
		 })
		 
	 }
	 _onBack(){
		 const {navigator} =this.props;
		 if(navigator){
			 navigator.pop();
		 }
		 
	 }
	 jumpPager(){
		 const {navigator}=this.props;
		 if(navigator){
			 navigator.push({
			title:'Info',
			component:Info,
			params:{
				name:'Info'
			}
			 });
		 }
		 
	 }
	render(){
		
		return(<View style={{backgroundColor:'green',flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,margin:5}} onPress={this.jumpPager.bind(this)}>Hello.{this.state.name}</Text>
                <TouchableOpacity style={{backgroundColor:'white' ,margin:5}} onPress={this._onBack.bind(this)}>
                    <Text style={{fontSize:20}}>点我返回</Text>                    
                </TouchableOpacity> 
            </View>);
	}
}
export default class Info extends Component{
	constructor(props){
		super(props);
		 this.state = {
      name : 'Frank'
    } 
	}
	 componentDidMount(){
		 this.setState({
			 name:this.props.name,
		 })
		 
	 }
	 _onBack(){
		 const {navigator} =this.props;
		 if(navigator){
			 navigator.pop();
			 
		 }
		 
	 }
	 enter(){
		 const {navigator}=this.props;
		 if(navigator){
			 navigator.push({
				 title:'DatePickerAndroidComponent',
				 component:DatePickerAndroidComponent,
				 params:{
					 name:'我来了，大家好DatePickerAndroidComponent',
					 na:navigator,
				 }
			 });
		 }
		
		 
		 
	 }
	 
	 jumpPager(){
		  const {navigator}=this.props;
		  if(navigator){
			  navigator.push({
				  title:'RefreshControlComponent',
				  component:RefreshControlComponent,
				  params:{
					  name:'RefreshControlComponent',
					  tag:'test'
				  }
				  
				  
			  })
		  }
	 }
	render(){
		
		return(<View style={{backgroundColor:'green',flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text  style={{fontSize:20}} 
				onPress={this.enter.bind(this)}>ENTER DomeComponent{this.state.name}</Text>
                <TouchableOpacity style={{backgroundColor:'white' ,margin:5}} onPress={this._onBack.bind(this)}>
                    <Text style={{fontSize:20}}>点我返回</Text>                    
                </TouchableOpacity> 
				<TouchableOpacity style={{backgroundColor:'white' ,margin:5}} onPress={this.jumpPager.bind(this)}>
                    <Text style={{fontSize:20}}>Jump AnOther PAGER</Text>                    
                </TouchableOpacity> 
            </View>);
	}
}
export default class DatePickerAndroidComponent extends Component {
	//需要在构造器中初始化state;  state 状态改变之后会调用render  (state只与组件有关)
constructor(props){
	super(props);
	this.state={
		text:'',
		dateStr:'MyDATE',
		name:'DatePickerAndroidComponent',
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
 
  componentDidMount(){
		 this.setState({
			 name:this.props.name,
		 })
		 
	 }
onLoadSucess(){
	alert('load complete');
}
renderError(){
	alert('renderError!');
}
renderLoading(){
	alert('loading');
}
onError(){
	alert('onError');
}
onNavigationStateChange (){
	alert('onNavigationStateChange')
}
goto(){
	alert('goto');
	this.webview.goForward();
}
onback(){
	this.webview.goBack();
}
forward(){
	this.webview.reload();
}
  callBacked(position){
	  alert(position);
	  const {navigator}=this.props;
	  if(navigator){
	  if(position==0){
		  navigator.pop();
	  }else if(position==1){
		  navigator.push({
			  title:'MapViewComponent',
			  component:MapViewComponent,
			  params:{
				  name:'MapViewComponent  我来了',
			  }
		  });
	  }
	 }
   }
  render() {
	  var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
		<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
		<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>{this.props.name}</Text>
		<TouchableHighlight
		 style={{backgroundColor:'grey'}}
		  underLayColor='rgb(210,230,255)'
          onPress={this.goto.bind(this)}		
		>
			<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>goto</Text>
		</TouchableHighlight>
		<TouchableHighlight
		 style={{backgroundColor:'grey'}}
		  underLayColor='rgb(210,230,255)'
          onPress={this.onback.bind(this)}		
		>
			<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>onback</Text>
		</TouchableHighlight>
		<TouchableHighlight
		 style={{backgroundColor:'grey'}}
		  underLayColor='rgb(210,230,255)'
          onPress={this.forward.bind(this)}		
		>
			<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>forward</Text>
       </TouchableHighlight>

	   <WebView 
		      source={{uri:'http://reactnative.cn/docs/0.36/webview.html#content'}}
		      style={{flex:1,height:200,backgroundColor:'grey'}}   
			  onLoad={this.onLoadSucess.bind(this)}
			  renderError ={this.renderError.bind(this)}
			  scalesPageToFit ={true}
			  renderLoading ={this.renderLoading.bind(this)}
			  mediaPlaybackRequiresUserAction={true}
			  onError ={this.onError.bind(this)}
			  javaScriptEnabled ={true}
			  startInLoadingState={true}
			  onNavigationStateChange ={this.onNavigationStateChange.bind(this)}
			  domStorageEnabled ={true}
			  ref={webview =>{this.webview=webview;}}
		/>     

   </View>
  );
	  
	  
  return (  <DrawerLayoutAndroid
						  drawerWidth={300}
						  drawerPosition={DrawerLayoutAndroid.positions.Right}
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
		 onActionSelected={this.callBacked.bind(this)}
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
		  
		   componentDidMount(){
	 this.togleActivityIndicator();
 }
	  },3000);**/
  }

click(){
	 alert('这个图标被点击了');
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
export default class RefreshControlComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			isrefresh:true,
			value:'test',
		}
	}
	componentDidMount(){
	this.time=setTimeout(()=>{
		this.setState({
			isrefresh:false,
			
		})
		
	},1000);	
	}
	componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
	render(){
		return(
		<View style={{flex:1}}>
		
			<ScrollView
			style={{flex:1,backgroundColor:'green'}}
			refreshControl={
			  <RefreshControl
				refreshing={this.state.isrefresh}
				onRefresh={this.onRefresh.bind(this)}
				tintColor="#ff0000"
				title="Loading..."
				titleColor="#00ff00"
				colors={['#ff0000', '#00ff00', '#0000ff']}
				progressBackgroundColor="#ffff00"
			  />
			}>
			{!this.state.isrefresh?<View>
			   <Text style={{fontSize:30}} >{this.state.value}</Text>
			</View>:null}
		  </ScrollView>
	  </View>);
	}
	onRefresh(){
		this.setState({
		value:this.state.value+'news',
		})
	}
}
export default class MapViewComponent extends   Component{
	constructor(props){
		super(props);
		this.state={
			 region: {
			  latitude: 37.78825,
			  longitude: -122.4324,
			  latitudeDelta: 0.0922,
			  longitudeDelta: 0.0421,
            },
		}
	}
	render(){
		
		return(<View style={{flex:1,backgroundColor:'green'}}>
		<Text style={{fontSize:40}}>{this.props.name}</Text>
		<MapView style={{flex:1,width:300,alignSelf:'center'}}
		initialRegion={{
		  latitude: 37.78825,
		  longitude: -122.4324,
		  latitudeDelta: 0.0922,
		  longitudeDelta: 0.0421,
    }}
	mapType ={'hybrid'}
		/>
		</View>);
	}
}

/** export  default class MyScene extends Component{
	 
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
 }**/
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

AppRegistry.registerComponent('RNTest', () => RNTest);
