package com.assessmint.mobile.SplashScreen;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.app.Activity;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.animation.AccelerateInterpolator;
import android.window.SplashScreenView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.splashscreen.SplashScreen;
import androidx.core.splashscreen.SplashScreenViewProvider;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

import java.util.Timer;
import java.util.TimerTask;

public class SplashScreenModule extends ReactContextBaseJavaModule {

    @Nullable
    private static SplashScreen mSplashScreen = null;

    private static final String TAG = "SplashScreenModule";
    private static final int ANIMATION_DURATION = 175;

    private static boolean mIsSplashScreenVisible = false;
    private static boolean mShouldKeepOnScreen = true;

    private static final SplashScreenQueue<Promise> mPromiseQueue = new SplashScreenQueue<>();

    public SplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    // -----------------------------------------

    @Override
    @NonNull
    public String getName() {
        return "SplashScreenModule";
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

    public static void init(@Nullable final Activity activity) {
        if (activity == null) {
            Log.d(TAG, "Ignored initialization, current activity is null");
            return;
        }
        mSplashScreen = SplashScreen.installSplashScreen(activity);
        mIsSplashScreenVisible = true;
        mSplashScreen.setKeepOnScreenCondition(() -> mShouldKeepOnScreen);
        mSplashScreen.setOnExitAnimationListener(new SplashScreen.OnExitAnimationListener() {
            @Override
            public void onSplashScreenExit(@NonNull final SplashScreenViewProvider splashScreenViewProvider) {
                final View splashScreenView = splashScreenViewProvider.getView();
                splashScreenView.animate()
                        // Crappy hack to avoid automatic layout transitions
                        .setDuration(ANIMATION_DURATION)
                        .setStartDelay(0)
                        .alpha(0.0f)
                        .setInterpolator(new AccelerateInterpolator())
                        .setListener(new AnimatorListenerAdapter() {
                            @Override
                            public void onAnimationEnd(Animator animation) {
                                super.onAnimationEnd(animation);
                                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) {
                                    splashScreenViewProvider.remove();
                                } else {
                                    // Avoid calling applyThemesSystemBarAppearance
                                    ((SplashScreenView) splashScreenView).remove();
                                }
                            }
                        }).start();
            }
        });
    }
    // -----------------------------------------

    private void clearPromiseQueue() {
        while (!mPromiseQueue.isEmpty()) {
            Promise promise = mPromiseQueue.shift();
            if (promise != null) {
                promise.resolve(true);
            }
        }
    }
    // -----------------------------------------

    private void hideAndResolveAll() {
        if (mSplashScreen == null || !mIsSplashScreenVisible) {
            clearPromiseQueue();
            return;
        }
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                final Activity activity = getReactApplicationContext().getCurrentActivity();
                if (activity == null || activity.isFinishing()) {
                    // Wait for activity to be ready
                    final Timer timer = new Timer();
                    timer.schedule(new TimerTask() {
                        @Override
                        public void run() {
                            hideAndResolveAll();
                            timer.cancel();
                        }
                    }, 250);
                } else {
                    mShouldKeepOnScreen = false;
                    final Timer timer = new Timer();
                    // We cannot rely on setOnExitAnimationListener
                    // See https://issuetracker.google.com/issues/197906327
                    timer.schedule(new TimerTask() {
                        @Override
                        public void run() {
                            mIsSplashScreenVisible = false;
                            timer.cancel();
                            clearPromiseQueue();
                        }
                    }, ANIMATION_DURATION);
                }
            }
        });
    }
    // ---------------------------------------------------------------------------------------------------------------

    // Exported React-Native Methods ---------------------------------------------------------------------------------
    @SuppressWarnings("unused")
    @ReactMethod
    public void hide(final Promise promise) {
        mPromiseQueue.push(promise);
        hideAndResolveAll();
    }
    // ---------------------------------------------------------------------------------------------------------------
}

