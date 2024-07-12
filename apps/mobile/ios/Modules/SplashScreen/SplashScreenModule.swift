//
//  SplashScreenModule.swift
//  AssessmintMobile
//
//  Created by Dani Shalash on 12/07/2024.
//

import Foundation

@objc(SplashScreenModule)
class SplashScreenModule: NSObject {
  
  private static var waiting = true
  private static var addedJsLoadErrorObserver = false

  override init() {
    super.init()
  }
  // -----------------------------------------
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  // -----------------------------------------
  
  @objc
  func hide() -> Void {
    SplashScreenModule.dismiss()
  }
  // -----------------------------------------
  
  @objc
  static func hold() -> Void {
    if (!SplashScreenModule.addedJsLoadErrorObserver) {
      NotificationCenter.default.addObserver(self, selector: #selector(jsLoadError(_:)), name: NSNotification.Name.RCTJavaScriptDidFailToLoad, object: nil)
      SplashScreenModule.addedJsLoadErrorObserver = true
    }
    while (waiting) {
      let later: Date = Date(timeIntervalSinceNow: 0.1)
      RunLoop.main.run(until: later)
    }
  }
  // -----------------------------------------
  
  @objc
  private static func dismiss() -> Void {
    if (!SplashScreenModule.waiting) { return }
    DispatchQueue.main.async {
      SplashScreenModule.waiting = false
    }
    NotificationCenter.default.removeObserver(self)
  }
  // -----------------------------------------
  
  @objc
  static func jsLoadError(_ notification: Notification) -> Void {
    SplashScreenModule.dismiss()
  }
  // ---------------------------------------------------------------------------------------------------------------
}
