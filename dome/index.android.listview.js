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
} from 'react-native';
  
   export default class ThreeComponent extends Component{
	  constructor(props){
		  super(props);
		  this.state={
			  id:'',
		  }
	  }
	  componentDidMount(){
		  this.setState(
			  {
				  id:this.props.id,
			  }
		  )
	  }
	  _pressGetDate(date){
		  const {navigator}=this.props;
		  
		  if(this.props.getDate){
			  this.props.getDate(date);
		  }
		  if(navigator){
			 
			  navigator.pop();
		  }
		  
	  }
	  _back(){
		  const {navigator}=this.props;
		  if(navigator){
			  navigator.pop();
		  }
	  }
	  render(){
		  
		  return (<View>
		   <TouchableHighlight onPress={this._back.bind(this)}>
			   <Text style={{fontSize:25}}>
			   back
			   </Text >
		   </TouchableHighlight>
		   
		   <TouchableHighlight onPress={this._pressGetDate.bind(this,'hello world')}>
			   <Text style={{fontSize:25}}>
			   _pressGetDate
			   </Text>
		   </TouchableHighlight>
		   <Text style={{fontSize:25}}>
		   {this.state.id}
			   </Text>
		  </View>);
	  }
	  

	  
  }
  
  export default class TwoComponent extends Component{
	  constructor(props){
		  super(props);
		  this.state={
			  date:'',
		  }
	  }
	  
	  _press(){
		  const {navigator}=this.props;
		  let  _this=this;
		  if(navigator){
			  navigator.push(
			  {
				  name:'ThreeComponent',
				  component:ThreeComponent,
				  params:{
					  id:'1234',
					  getDate(date){
					  _this.setState(
					  {
						  date:date,
					  })
				  }
				  },
				  
				  
			  }
			  );
		  }
		  
	  }
	  render(){
		  
		  return (<View>
		  <TouchableHighlight onPress={this._press.bind(this)}>
		   <Text style={{fontSize:25}}>
		   click me
		   </Text>
		  </TouchableHighlight>
		   <Text style={{fontSize:25}}>
		   {this.state.date}
		   </Text>
		  </View>);
	  }
	  
	  
  }

class RNTest extends Component{
	
	/**
	
	componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
   onBackAndroid = () => {
    const nav = this.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };
	**/
	
    constructor(props){
		super(props);
	/**
	var ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1===r2});
	let arr=['row1','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3','row2','row3'];
	this.state={
		data:ds.cloneWithRows(arr),
	};
	**/
	
	 
		this.state={
			dataSource:new ListView.DataSource({
		             	rowHasChanged:(r1,r2)=>r1!==r2
			}
			),
			loaded:false,
		}  ;
		  
	
	
	
	}
	//组件加载完成后   加载数据
	componentDidMount(){
		this.fetchData();
	}
	//加载数据
	fetchData(){
		 var url='http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';
		fetch(url)
		.then((response)=>response.json())
		.then((responseData)=>{
			this.setState({
				dataSource:
				this.state.dataSource.cloneWithRows
				(responseData.result.data),
				loaded:true,
			});
		}).done();
	}
	  render(){

	
	 
		  return (
		  <ListView 
			  dataSource={this.state.dataSource}
			  renderRow={(rowData)=>
		  
		   <View style={{backgroundColor:'white',flex:1,flexDirection:'row'}}>
		   
		   <View>
				 <Image 
					 style={{alignSelf:'center', width:100,height:60}}
					  resizeMode={'stretch'}
					 source={{uri:rowData.logo}}/>		
		   </View>
		   <View style={{flex:1}}>
				<Text style={{fontSize:25,color:'blue',textAlign:'center'}}>
				{rowData.team_cn}
				</Text>
				<Text style={{fontSize:25,color:'blue',textAlign:'center'}}>
				{rowData.score}
				</Text>
		   </View>
			  
		   </View>
		  
		  }
		        />
		  );
	  }
	/**
	
	  render(){
		  let defaultComponentname='TwoComponent';
	      let defaultComponent=TwoComponent;
		  return(<Navigator
		           initialRoute={{name:defaultComponentname,component:defaultComponent}}
		            renderScene={
						(route,navigator)=>
						{
						  let Component=route.component;
						  return (<Component {...route.params}
						     navigator={navigator}/>);
						}
						
					}
					//对组件的引用
					ref={
						(navigator)=>
						this.navigator=navigator
						}
		  
		  />);
	  }**/
	
	
	
	
/**
	render(){
		return (<ListView
		   dataSource={this.state.data}
		   renderRow={(rowDate)=>fd
		   <View style={{backgroundColor:'white',flex:1}}>
		   <View >
				<Text style={{fontSize:25,color:'blue',textAlign:'center'}}>{rowDate}</Text>
		   </View>
			  <View style={{alignSelf:'center',flex:1,height:100,justifyContent:'center',alignItems:'center'}}>
                 <Image 
					 style={{alignSelf:'center', width:400,height:100}}
					  resizeMode={'stretch'}
					 source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>			  
			  </View>
		   </View>
		   }
		
		>
	
		</ListView>);
	}

**/
	
	alert1(){
      var set=new Set();
	  var arr=[1,2,3,5,5,6,7,5,5,5,5];
	  arr.map((x)=>set.add(x));
	  for(let i of set.entries()){//返回的值 包括键和值  set中完全相等
		  console.log(i);
	  }
	  //for(let i of set.keys()){
		//  console.log(i);
	  //}
	  
	   //for(let i of set.values()){
		//  console.log(i);
	  //}
	  
	  //alert([...set]);1,2,3,4,5,6,7
	  //alert(set.delete(3));true
	  alert(set.has(0));//false
	  
	   //set.clear();//清空set集合值  无返回 值
	   //Array.from();//可以把set转为数组
	  // var a=Array.from(set);
	  // console.log(a+"===");
	  var  obj={
		  'width':1,
		  'height':2,
		  
	  };
	  
	  if(obj['width']){//看这个对象中是否包含该属性
	  
		  
		  console.log(obj.width+'============');
	  }
	   
	    set.forEach((value,key)=>{
			console.log(value*2);
			
		});
		let set1=new Set([1,2,3]);
		//set1=new Set([...set1].map((val)=>val*2));
		//set1=new Set(Array.from(set1,val=>val*2));
		console.log(...set1);
		//把map 转换为对象
		let map=new Map().set('name','张三').set('sex','man').set('year',12);
		
		let obj1=Object.create(null);
		for(let [k,v] of map.entries()){
			obj1[k]=v;
		}
		console.log(obj1);
		console.log(obj1.name);
		console.log(obj1['name']);
		
		
		//对象转为map
		
		var o={
			'name':'李四',
			'address':'四川',
			'bir':'1995.1.2'
		};
		var mp=new Map();
		
		for(let k of Object.keys(o)){
			mp.set(k,o[k]);
		}
		console.log(mp);
		
		
		//map 转json
		
		let myMap=new Map()
		.set(true,2).set({foo:3},['tips','提示']);
		console.log(JSON.stringify([...myMap]));
		
		//json string 转map
		let json='[[true,2],[{"foo":3},["tips","提示"]]]';
		var jMap=new Map(JSON.parse(json));
		console.log(jMap);
		
		
		
		
		var p=new Point(2,5);
		console.log(p.add());
	}
	

	
	
}
	
AppRegistry.registerComponent('RNTest', () => RNTest);
