package com.ucfer;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // 1.导入启动屏包


public class MainActivity extends ReactActivity {


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Ucfer";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) { // 2. 显示启动方法
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);

    }
    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    protected void onResume() {
        super.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }


}
