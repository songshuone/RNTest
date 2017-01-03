package com.rntest.module;

import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.HashMap;
import java.util.Map;

/**
 * //react  native 调用 自己的重新写的Toast
 * Created by Administrator on 2016/12/9 0009.
 */
public class ToastModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ToastAndroidModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    //js调用的方法需要在方法上面加上 @ReactMethod
    @ReactMethod
    public void show2(String tag, Callback sucessCallBack, Callback erroCallBack) {
        if (TextUtils.isEmpty(tag)) {
            erroCallBack.invoke("tag is null");
        } else {
            sucessCallBack.invoke("我的原生的数据", "我也是");
        }
    }

    @ReactMethod
    public void show3(int tag, int ancestorTag, Promise promise) {
        try {
            WritableMap map = Arguments.createMap();
            map.putString("promise", "promise is test");
            map.putInt("tag", tag);
            map.putInt("ancestorTag", ancestorTag);
            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject(e.getMessage());
        }

    }
}
