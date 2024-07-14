//
//  SecurityModule.swift
//  AssessmintMobile
//
//  Created by Dani Shalash on 14/07/2024.
//

import Foundation
import React

@objc(SecurityModule)
class SecurityModule: NSObject {
  
  private var windowSecurityEnabled: Bool = false;
  private let windowSecurityViewTag: Int = 31051990;
  private let windowSecurityViewAnimationDuration: Double = 0.1;

  override init() {
    super.init();
    NotificationCenter.default.addObserver(self, selector: #selector(showSecurityWindow), name: UIApplication.willResignActiveNotification, object: nil);
    NotificationCenter.default.addObserver(self, selector: #selector(hideSecurityWindow), name: UIApplication.didBecomeActiveNotification, object: nil);
  }
  // -----------------------------------------
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  // -----------------------------------------
  
  @objc
  private func showSecurityWindow() -> Void {
    if (!self.windowSecurityEnabled) { return; }
    guard let window = UIApplication.shared.keyWindow else { return; }
    if let _ = window.viewWithTag(self.windowSecurityViewTag) { return; }
    let blurEffect = UIBlurEffect(style: .prominent);
    let secView = UIVisualEffectView(effect: blurEffect)
    secView.frame = window.frame;
    secView.alpha = 0;
    secView.tag = self.windowSecurityViewTag;
    window.addSubview(secView);
    window.bringSubviewToFront(secView);
    UIView.animate(withDuration: self.windowSecurityViewAnimationDuration) {
      secView.alpha = 1;
    }
  }
  // -----------------------------------------
  
  @objc
  private func hideSecurityWindow() -> Void {
    UIApplication.shared.windows.forEach { window in
      guard let secView = window.viewWithTag(self.windowSecurityViewTag) else { return; }
      UIView.animate(withDuration: self.windowSecurityViewAnimationDuration, animations: {
        secView.alpha = 0;
      }, completion: { _ in
        secView.removeFromSuperview();
      });
    }
  }
  // ---------------------------------------------------------------------------------------------------------------
  
  // React-Native Exposed Methods ----------------------------------------------------------------------------------
  @objc
  func enableWindowSecurity() -> Void {
    self.windowSecurityEnabled = true;
  }
  // -----------------------------------------
  
  @objc
  func disableWindowSecurity() -> Void {
    self.windowSecurityEnabled = false;
  }
  // ---------------------------------------------------------------------------------------------------------------
}
