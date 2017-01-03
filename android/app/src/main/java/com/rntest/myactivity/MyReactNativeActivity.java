package com.rntest.myactivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.rntest.R;


/*/react native跳转到原生android
 * Created by Administrator on 2017/1/3 0003.
 */
public class MyReactNativeActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return MyReactNativeActivity.class.getName();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my);
        findViewById(R.id.textView).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(MyReactNativeActivity.this, "被点击了", 0).show();
            }
        });

    }

//    protected List getPackages() {
//        return Arrays.asList(
//                new MainReactPackage(),
//                new AnExampleReactPackage()
//        );
//    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (resultCode == RESULT_OK && requestCode == 100) {
            String result = data.getStringExtra("result");
            if (!TextUtils.isEmpty(result)) {
                System.out.println("=======" + result);
            } else {
                System.out.println("=======null");
            }


        } else {
            System.out.println("=======没数据返回");

        }


    }
}
