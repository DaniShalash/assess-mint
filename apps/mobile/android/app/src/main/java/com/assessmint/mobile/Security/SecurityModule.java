package com.assessmint.mobile.Security;

import android.app.Activity;
import android.view.WindowManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = "SecurityModule")
public class SecurityModule extends ReactContextBaseJavaModule {

    public SecurityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    // -----------------------------------------

    @Override
    @NonNull
    public String getName() {
        return "SecurityModule";
    }
    // -----------------------------------------

    @SuppressWarnings("unused")
    @ReactMethod
    public void addListener(String eventName) {
        // Keep: Required for RN built in Event Emitter Calls.
    }
    // -----------------------------------------

    @SuppressWarnings("unused")
    @ReactMethod
    public void removeListeners(Integer count) {
        // Keep: Required for RN built in Event Emitter Calls.
    }
    // -----------------------------------------

    @SuppressWarnings("unused")
    @ReactMethod
    public void enableWindowSecurity() {
        final Activity activity = this.getCurrentActivity();
        if (activity != null) {
            activity.runOnUiThread(() -> {
                activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_SECURE);
            });
        }
    }
    // -----------------------------------------

    @SuppressWarnings("unused")
    @ReactMethod
    public void disableWindowSecurity() {
        final Activity activity = this.getCurrentActivity();
        if (activity != null) {
            activity.runOnUiThread(() -> {
                activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_SECURE);
            });
        }
    }
    // ---------------------------------------------------------------------------------------------------------------
}
