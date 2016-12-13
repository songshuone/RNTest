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

  ToolbarAndroid,
  Picker,
  Alert,
  ToastAndroid,
  Animated,
  ActivityIndicator,
  DrawerLayoutAndroid,
  
} from 'react-native';

class DomeComponent extends Component{
	render(){
		return(
		  <DatePickerAndroidComponent/> 
		  );
		  }
	
}

 export default class DatePickerAndroidComponent extends Component {
	//��Ҫ�ڹ������г�ʼ��state;  state ״̬�ı�֮������render  (stateֻ������й�)
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
  <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>{this.props.name}</Text>
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
		 //logo���ܴ����ص�      navIcon����
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
									 placeholder={'������...'}
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
						onPress={()=>Alert.alert('��ܰ��ʾ!','ȷ���˳���')}
						>
						�������Ĭ�ϵ�Alter
						</Text>
						<Text 
						style={{fontSize:20,color:'red',margin:10}} 
						onPress={()=>Alert.alert('��ܰ��ʾ!','ȷ���˳���',[{text:'ȡ��',onPress:()=>ToastAndroid.show('����ȡ��~',ToastAndroid.SHORT)},
							{text:'ȷ��',onPress:()=>ToastAndroid.show('������ȷ��',ToastAndroid.SHORT)
						}])}
						>
						�������������ť��Alter
						</Text>
						<Text 
						style={{fontSize:20,color:'red',margin:10}} 
						onPress={()=>Alert.alert('��ܰ��ʾ!','���˳���',[{text:'������',onPress:()=>ToastAndroid.show('�����',ToastAndroid.SHORT)},
						{text:'������',onPress:()=>ToastAndroid.show('�ð�',ToastAndroid.SHORT)},
						{text:'�˳�',onPress:()=>ToastAndroid.show('���뵱�ӱ�!',ToastAndroid.SHORT)}])}
						>
						�������������ť��Alter
						</Text>
				  <ActivityIndicator 
							animating ={this.state.animating}
							color ={'green'}
							size ={'large'}
							style={{width:50,height:50,backgroundColor:'white'}}>
						    
						
						</ActivityIndicator>
						<Text 
						
						style={{fontSize:30}}>{this.state.animating?'hide':'��ʾ'}</Text>
						
	             
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
	 alert('���ͼ�걻�����');
}
callBacked(position){
	   alert(position);
   }
   //���д���ʱ������ѡ����
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
  /**  ����
  <Navigator 
					   initialRoute={{name:'My First Scene',index:0}}
					  //  ����ҳ����ת�Ķ���
					   configureScene={(route)=>{
							return Navigator.SceneConfigs.VerticalDownSwipeJump;
						}}
						/**�Ѷ�Ӧ�ĵ����������Դ�������Ⱦ�����
					   renderScene={(route,navigator)=>
					   <MyScene 
					   title={route.name} 
					   onForward={()=>{
						   const nextIndex = route.index+1;
						   /**��ת���µĳ���
						   navigator.push({
							   name:'Scene'+nextIndex,
							   index:nextIndex,
						   });
						   
					   }}
					   
					   onBack={()=>{
						   if(route.index > 0){
							   /**�˳���ж�ص�ǰ����
							   navigator.pop();
							   /**navigator.popToTop();   pop��ջ�е�һ��������ж�ص����е���������
							   
						   }
					   }}
					   />}
					/>)};
					
					**/
					
					/**
	
    );**/
 
/**
 //���д���ʱ������ѡ����
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
//�򵥷�װһ�����
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
      simpleText: 'ѡ������,Ĭ�Ͻ���',
      minText: 'ѡ������,���ܱȽ�������',
      maxText: 'ѡ������,���ܱȽ�������',
      presetText: 'ѡ������,ָ��2016/3/5',
    };
  }
  //���д���ʱ������ѡ����
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
            ����ѡ�������ʵ��
        </Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#a5a5a5"
          onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
          <Text style={styles.buttonText}>���������������ѡ����</Text>
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
 module.exports = DatePickerAndroidComponent;

