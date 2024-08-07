package com.assessmint.mobile

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.modules.i18nmanager.I18nUtil
import com.facebook.soloader.SoLoader

import java.util.Locale

import com.assessmint.mobile.Security.SecurityPackage
import com.assessmint.mobile.SplashScreen.SplashScreenPackage

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost = object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> = PackageList(this).packages.apply {
            add(SecurityPackage())
            add(SplashScreenPackage())
        }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
    }
    // -----------------------------------------

    override val reactHost: ReactHost
        get() = getDefaultReactHost(applicationContext, reactNativeHost)
    // -----------------------------------------

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)

        // Handle Localization
        val sharedI18nUtilInstance = I18nUtil.getInstance()
        val locale = Locale.getDefault()
        if (locale.language == "ar") {
            sharedI18nUtilInstance.allowRTL(this, true)
        } else {
            sharedI18nUtilInstance.allowRTL(this, false)
        }

        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            // If you opted-in for the New Architecture, we load the native entry point for this app.
            load()
        }
    }
    // ---------------------------------------------------------------------------------------------------------------
}
