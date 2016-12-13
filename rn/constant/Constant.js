/**
 * Created by Administrator on 2016/12/1 0001.
 */
import  React,{Component} from 'react'
import {
 Dimensions,
PixelRatio,
} from  'react-native'
export default{
    //屏幕的宽\高
    screen:{
        screenW:Dimensions.get('window').width,
        screenH:Dimensions.get('window').height
    },
    pixelRatio:PixelRatio.get(),//像素密度
    minpixelRatio:1/PixelRatio.get(),//最小宽度

}