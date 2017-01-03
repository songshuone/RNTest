package com.rntest.module;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


/**
 * Created by Administrator on 2017/1/3 0003.
 */
public class MyIntentModule extends ReactContextBaseJavaModule {
    public MyIntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "MyIntentModule";
    }

    @ReactMethod
    public void finishActivity(String result) {
        Activity currentActivity = getCurrentActivity();
        Intent intent = new Intent();
        intent.putExtra("result", result);
        currentActivity.setResult(11, intent);
        currentActivity.finish();

    }
    /**
     * 参数还可以扩展
     *
     * @param activityName    需要跳转的Activity的类名加包名
     * @param requestCode     请求吗
     * @param successCallback 成功的回调
     * @param erroCallback    失败的回调
     */
    @ReactMethod
    public void startActivityForResult(String activityName, int requestCode, Callback successCallback, Callback erroCallback) {
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {
                Class aimActivity = Class.forName(activityName);

                Intent intent = new Intent(currentActivity, aimActivity);
                System.out.println(requestCode + "=================");
//                intent.putExtra("boolean", false);
                currentActivity.startActivityForResult(intent, requestCode);
                successCallback.invoke("result");//成功回调返回的参数

            }

        } catch (Exception e) {

            erroCallback.invoke(e.getMessage());

            throw new JSApplicationIllegalArgumentException(

                    "Could not open the activity : " + e.getMessage());

        }

    }


}
