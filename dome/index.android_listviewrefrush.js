AppRegistry.registerComponent('RNTest', () => RNTest);


import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    ListView,
    BackAndroid,
    RefreshControl,
    TouchableOpacity,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import ToastAndroidModule from './rn/native/ToastAndroidModule'
var arr = [];
var tmp = new Date();
var loading = false;
const foo = 'foo'
class RNTest extends Component {
    constructor(props) {
        super(props);
        this._onRefresh = this._onRefresh.bind(this);
        var ls = new ListView.DataSource({
            rowHasChanged: (row1, row2)=>row1 !== row2
        });
        arr = this.loadDate(0);
        this.state = {
            datesource: ls.cloneWithRows(arr),
            isrefresh: false,
            isloading: false,
        }
        let arrayLike = {
            '0': 0,
            '1': 1,
            '2': 2,
            length: 3
        };
        console.log(arrayLike);
        var ar = Array.from(arrayLike, x => x + 2);
        console.log(Array.from(arrayLike).map((x)=>x + 6));

        console.log(ar);
        console.log(Array.from('hello world'));
        ;


        console.log(ar.find((x)=>x < 3));//返回符合条件的值
        console.log(ar.findIndex((x)=>x < 3));//返回符合条件的位置

        console.log(ar.includes(2));//此法与字符串中的类似
        ['w', '', 'r'].forEach((x)=> {
            console.log(x);
        });
        console.log(Array.from('es 6').filter((x)=>typeof x));
        this.fuc(undefined, null);
        this.testObj();
    }

    fuc(x, y = x) {
        console.log(`${x}===${y}`);
        this.bar();
    }

    bar(fun = ()=>foo) {
        console.log(`===${fun()}`);
        var a = [];
        this.restFunc(a, 1, 2, 3, 4);
    }

    restFunc(arr, ...item) {
        item.forEach((it)=> {
            arr.push(it);
            console.log(it);
        })
        console.log(arr);
        this.con();
    }

    //合并数组
    arr() {
        let a1 = [0, 1, 2];
        let a2 = [3, 4, 5];
        let a3 = [...a1, ...a2];//合并
        console.log(a3);

    }

    //与解构值结合
    con() {
        const [first,...rest]=[1, 2, 3, 4, 5];
        console.log(first);
        console.log(rest);
        //扩展字符串...
        var kuo = [..."hello_world"];//把字符串转为数组
        console.log(kuo);
        var x = function xx() {
        }.bind({});
        console.log(x.name);
        const number = (...nums)=>nums;
        console.log(number(1, 2, 3, 4, 56,));
        this.obj();
    }

    obj() {


        var o = {
            name: '张三',
            con: function () {
                console.log(`你  好  啊  ${this.name}`);
                return this.name;
            }
        };
        console.log(o.con());

    }

    loadDate(number) {
        let arr = [];
        for (var i = number; i < number + 30; i++) {
            arr.push('rows' + i);
        }
        return arr;
    }

    _renderRow(dataSource) {
        return (<View>
            <Text style={{fontSize:20}}>{dataSource}</Text>
        </View>);
    }

    _onRefresh() {
        let _this = this;

        this.setState({
            isrefresh: true,
        });
        setTimeout(()=> {
            _this.setState({
                isrefresh: false,
            });
        }, 3000);
    }

    _Loading() {
        if (!loading) {

            loading = true;
            this.setState({
                isloading: true,
            });
            let _this = this;
            setTimeout(()=> {
                _this.setState({
                    isloading: false,
                });
                loading = false;
            }, 3000);
        }
    }

    //异步函数属使用Promise对象
    async show3() {
        try {
            var {promise, tag, ancestorTag}=await ToastAndroidModule.show3(122, 555);
            console.log(`${promise}${tag}${ancestorTag}`);
        }
        catch (erro) {

        }
    }

    testObj() {
        var person = {
            name:'',
            sayName(){

            },
             firstName1:function(name) {
                this.name=name;
            },
            get firstName() {
                return this.name;
            }
        };
        person.firstName1('ES6');
        console.log(person.firstName);

    }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{
                ToastAndroidModule.show('Awesome', ToastAndroidModule.SHORT);
                ToastAndroidModule.show2('hellowAwesome',(msg1,msg2)=>{
                console.log(`${msg1}${msg2}`);
                },(erro)=>{
              console.log(`${erro}`);
                });
                this.show3();
                }}>
                    <Text>点击我啊</Text>
                </TouchableOpacity>
                <ListView
                    dataSource={this.state.datesource}
                    renderRow={this._renderRow}
                    refreshControl={
                    <RefreshControl
                      refreshing={this.state.isrefresh}
                      onRefresh={this._onRefresh}/>
                    }
                    onEndReached={this._Loading.bind(this)}
                    onEndReachedThreshold={20}

                >
                </ListView>
                {this.state.isloading ? <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator color={'green'} size={'large'}/>
                    <Text style={{color:'green',fontSize:20}}>加载中...</Text>
                </View> : null}
            </View>
        );
    }


}


AppRegistry.registerComponent('RNTest', () => RNTest);