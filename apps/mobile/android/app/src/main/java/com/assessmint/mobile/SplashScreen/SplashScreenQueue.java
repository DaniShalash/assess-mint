package com.assessmint.mobile.SplashScreen;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import java.util.Vector;

/**
 * Represents a first-in-first-out (FIFO) thread safe queue of objects.
 * Its source code is based on Java internal <code>Stack</code>.
 */
public class SplashScreenQueue<E> extends Vector<E>  {

    public SplashScreenQueue() {}
    // -----------------------------------------

    @Nullable
    public synchronized E shift() {
        if (size() == 0) return null;
        E item = elementAt(0);
        removeElementAt(0);
        return item;
    }
    // -----------------------------------------

    public void push(@NonNull E item) {
        addElement(item);
    }
    // ---------------------------------------------------------------------------------------------------------------
}
