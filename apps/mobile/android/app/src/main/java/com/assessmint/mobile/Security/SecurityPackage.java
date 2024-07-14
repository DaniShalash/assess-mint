package com.assessmint.mobile.Security;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

public class SecurityPackage implements ReactPackage {

    @Override
    @NonNull
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new SecurityModule(reactContext));
        return modules;
    }
    // -----------------------------------------

    @Override
    @NonNull
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
    // ---------------------------------------------------------------------------------------------------------------
}
