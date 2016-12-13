/**
 * Created by Administrator on 2016/12/2 0002.
 */
'use strict';
//返回键的处理
export  function BackPressHandle(navigator) {
    if(navigator&&navigator.getCurrentRoutes().length>1){
        navigator.pop();
        return true;
    }
    return false;

}
