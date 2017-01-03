/**
 * Created by Administrator on 2017/1/3 0003.
 */
'use strict'
import MyIntentModule from'../rn/native/MyIntentModule'
import ToastAndroidModule from '../rn/native/ToastAndroidModule'
export function startActivityForResult() {
    MyIntentModule.startActivityForResult(
        "com.rntest.myactivity.MyReactNativeActivity", 100,
        (successMsg)=> {
            ToastAndroidModule.show(`跳转成功${successMsg}`, ToastAndroidModule.SHORT);
        },
        (erroMsg)=> {
            alert(erroMsg);
        }
    );
}