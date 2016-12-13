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
} from 'react-native';


class RNTest extends Component{
    constructor(props){
		super(props);
		this.state={
			home:true,
			shop:false,
			my:false,
		}
	}
	render(){
          return (
			  <View style={{flex:1,backgroundColor:'white'}}>
			  <StatusBar
				 backgroundColor="red"
				 translucent={true}
				 hidden={true}
				 animated={true}  
				 barStyle="light-content"/>
				<ScrollView style={{backgroundColor:'#F0F0F5', flex:9}}
				             showsVerticalScrollIndicator ={false}
							 >
				 
				      <View>
					  
					   
					   {
						  this.state.home?
						   
					   
					     <View>
						   <View style={{flex:1}}>
							 <ViewPagerAndroid
								 style={{height:200}}
								 initialPage={0}
								>
								<View> 
									<Image  
									style={[styles.img,{width:400,height:200,padding:5}]}
										   resizeMode={'stretch'}
									source={require('./img/banner_wait.jpg')}/>
								</View>
								<View> 
								   <Image 
								  style={[styles.img,{width:400,height:200,padding:5}]}
										   resizeMode={'stretch'}
								   source={require('./img/banner_wait.jpg')}/>
								</View>
								<View> 
								   <Image 
								  style={[styles.img,{width:400,height:200,padding:5}]}
										   resizeMode={'stretch'}
								   source={require('./img/banner_wait.jpg')}/>
								</View>
								
						</ViewPagerAndroid>
						<View style={{height:20,flexDirection:'row',justifyContent:'center',padding:5}}>
							<View style={{backgroundColor:'white',width:10,height:10,borderColor:'red',borderRadius:10}}></View>
							<View style={{backgroundColor:'red',width:10,height:10,borderColor:'red',marginLeft:10,marginRight:10,borderRadius:10}}></View>
							<View style={{backgroundColor:'red',width:10,height:10,borderColor:'red',borderRadius:10}}></View>
						</View>
					   </View>
						   <View style={{flexDirection:'row',backgroundColor:'white',padding:10}}>
							  <View style={{flex:1,alignSelf:'center'}}>
								  <Image style={[styles.img]} 
										 source={require('./img/device_m.png')}/>
								  <Text style={{alignSelf:'center'}}>智能设备</Text>
							  </View >
							  <View style={{flex:1,alignSelf:'center'}}>
								  <Image style={[styles.img]} 
										 source={require('./img/message_icon.png')}/>
								  <Text style={{alignSelf:'center'}}>消息</Text>
							  </View >
							  <View style={{flex:1,alignSelf:'center'}}>
								  <Image style={[styles.img]}
										 source={require('./img/ic_service.png')}/>
								  <Text style={{alignSelf:'center'}}>周边服务</Text>
							  </View>
								  <View style={{flex:1,alignSelf:'center'}}>
								  <Image style={[styles.img]}
										 source={require('./img/ic_saoyisao.png')}/>
							  <Text style={{alignSelf:'center'}}>关注商家</Text>
							  </View>
						   
						   </View>
					   
					   <View style={{flexDirection:'row',marginTop:10,backgroundColor:'white',paddingLeft:20,paddingRight:20}}>
					   
							<View style={{alignSelf:'center',width:120,height:120,borderRightWidth:1,borderColor:'#F0F0F5',paddingLeft:10,paddingTop:10,paddingRight:20}}>
								<Image style={[styles.img,{width:90,height:55,}]}
										 source={require('./img/ic_rob_god.png')}/>
							  <Text style={{alignSelf:'center',marginTop:10,fontSize:12,color:'#DBD7B5'}}>人品大爆发</Text>
							  <Text style={{alignSelf:'center',fontSize:12}}>神枪宝贝带回家</Text>
							</View>
					   
							  <View>
							   <View style={{flexDirection:'row',flex:1}}>
									<View style={{alignSelf:'center'}}>
									<Image style={[styles.img,{width:120,height:20,padding:5,marginLeft:5}]}
											resizeMode={'contain'}
											 source={require('./img/word_red.png')}/>
									<Text style={{alignSelf:'center'}}>疯狂抢红包</Text>
								</View>
								<Image style={[styles.img]}
											 source={require('./img/grap_red.png')}/>
							   </View>
							
							
								<View style={{flexDirection:'row',flex:1,borderTopWidth:1,borderColor:'#F0F0F5'}}>
									<View style={{alignSelf:'center'}}>
									<Image style={[styles.img,{width:120,height:20,padding:5}]}
										   resizeMode={'contain'}
											 source={require('./img/word_coupons.png')}/>
								  <Text style={{alignSelf:'center'}}>吃喝玩乐嗨起来</Text>
									</View>
								<Image style={[styles.img]}
											 source={require('./img/coupon_icon.png')}/>
								</View>
								</View>
					   </View>
					   
					   <View style={{flexDirection:'row',marginTop:1,height:80,backgroundColor:'white'}}>
							<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
									<View style={{padding:10}}>
										<Text style={{fontSize:15,color:'#4DCDD8'}}>新潮咨讯</Text>
										<Text style={{fontSize:12}}>给你不一样的体验</Text>
									</View>
									 <Image style={[styles.img,{marginLeft:10}]}
											 source={require('./img/coupon_icon.png')}/>
							</View>
					  
					   <View style={{flex:1,flexDirection:'row',borderLeftWidth:1,borderColor:'#F0F0F5'}}>
									<View style={{alignSelf:'center',padding:10}}>
										<Text style={{fontSize:15,color:'#FF8E8E'}}>生活妙招</Text>
										<Text style={{fontSize:12}}>生活中的小精灵</Text>
									</View>
									 <Image style={[styles.img,{marginLeft:10}]}
											 source={require('./img/coupon_icon.png')}/>
							</View>
					   
					   </View>
					   
					   
					   
					  <View style={{padding:5}}>
							<Image 
							style={[styles.img,{width:400,height:120,padding:5}]}
										   resizeMode={'stretch'}
						
						 source={require('./img/banner_wait.jpg')}/>
						
					  </View>
					   </View>:
					   this.state.shop&&!this.state.my&&!this.state.home?
					   <View>
					  
					      <View style={{backgroundColor:'#2C2C37',height:55,justifyContent:'center'}}>
						     <Text style={{alignSelf:'center',color:'white',fontSize:20}}>商家</Text>
						  </View>
						  <View style={{alignItems:'center'}}>
						    <Image style={{alignSelf:'center',width:100,height:100,marginTop:80}}
							resizeMode={'contain'}
							source={require('./img/shop_wait.png')}/>
							<Text style={{marginTop:10}}>抱歉, 您还不是入驻商家</Text>
							<Text>只有成为入驻商家才能发布广告</Text>
							
							<TouchableHighlight 
								  underlayColor ={'#9BFF9B'}
								  onPress={()=>{
									  alert('被电击了');
								  }}
							      style={{marginTop:30,marginBottom:30,backgroundColor:'#0BD38A',borderRadius:5,borderColor:'white',borderWidth:1}}
							>
							
							     <View style={{justifyContent:'center',alignItems:'center',margin:5}}>
								 <Text style={{fontSize:20,color:'white',textAlign:'center',alignSelf:'center'}}>申请商家</Text>
								 </View>
							</TouchableHighlight>
						  <View style={{flexDirection:'row'}}>
						      <Image style={{alignSelf:'center',width:18,height:18}} source={require('./img/check_shop.png')}/>
							  <Text style={{alignSelf:'center',fontSize:16}}>同意盯点汇商家服务协议</Text>
						  </View>
						  </View>
					   </View>:
					   !this.state.shop&&this.state.my&&!this.state.home?
					   <View>
					  
					   
					   </View>:null
					   }
					  
				  
				</View>
				</ScrollView>
				
				<View style={{flex:1,flexDirection:'row'}}>
				<TouchableHighlight
				  style={{backgroundColor:'white',flex:1,}}
				  underlayColor ={'white'}
				   onPress={this.homePress.bind(this,true,false,false)}>
						<View style={{flexDirection:'column',backgroundColor:'white',padding:10,margin:5}}
						>
						     
							  <Image style={[styles.img_bottom] }
							  source={this.state.home?
							  require('./img/home.png')
							  :require('./img/home_normal.png')
							  }/>
							  <Text style={{alignSelf:'center', color:this.state.home?
							  '#00CC74'
							  :'#BDBDBD'}}>首页</Text>
							
						</View>
						</TouchableHighlight>
						<TouchableHighlight 
						underlayColor ={'white'}
						  style={{flexDirection:'column',flex:1,backgroundColor:'white'}}
						  onPress={this.homePress.bind(this,false,true,false)}
						>
						<View style={{flexDirection:'column',padding:10,margin:5}}>
						     <Image style={[styles.img_bottom]}
							        source={
										this.state.shop?require('./img/shop_press.png'):
										require('./img/shop.png')
									}/>
									<Text style={{alignSelf:'center', color:this.state.shop?
							  '#00CC74'
							  :'#BDBDBD'}}>商家</Text>
						</View>
						</TouchableHighlight>
						
						<TouchableHighlight 
						  style={{flex:1,backgroundColor:'white'}}
						  underlayColor ={'white'}
						  onPress={this.homePress.bind(this,false,false,true)}
						>
						<View style={{flexDirection:'column',padding:10,margin:5}}>
						     <Image style={[styles.img_bottom]} source={
								 this.state.my?
								 require('./img/my_press.png'):
								 require('./img/my_normal.png')}/>
							 <Text style={{alignSelf:'center',
							  color:this.state.my?
							  '#00CC74'
							  :'#BDBDBD'}}
							  >我的</Text>
						</View>
						</TouchableHighlight>
				</View>
				
			  </View>
		  );
	}
	homePress(homeTag,shopTag,myTag){
		this.setState({
			home:homeTag,
			shop:shopTag,
			my:myTag,
		})
		
		
		
	}
		
	
}
var styles=StyleSheet.create({
	img:{height:45,width:45,alignSelf:'center'},
	img_bottom:{width:25,height:25,alignSelf:'center'},
	
})
AppRegistry.registerComponent('RNTest', () => RNTest);
