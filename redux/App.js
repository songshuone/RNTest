/**
 * Created by Administrator on 2017/1/4 0004.
 */
'use strict'
import  React, {Component} from'react-native'
import {Provider} from 'react-redux'
import Root from' ./Root'
import configureStore from './store/Index'
export  default class App extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading: true,
            store: configureStore(()=> {
                this.setState({
                    isLoading: false,
                })
            })

        };

    }

    render() {
        if (this.state.isLoading) {
            console.log('loading app ...');
            return null;
        }
        return (<Provider store={this.state.store}>
            <Root/>
        </Provider>)
    }

}