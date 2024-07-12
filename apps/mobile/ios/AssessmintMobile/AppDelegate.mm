#import "AppDelegate.h"
#import "Assessmint-Swift.h"

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

// Initialize App
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // Define Module Name
  self.moduleName = @"AssessmintMobile";

  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  // Loading Bridge
  [super application:application didFinishLaunchingWithOptions:launchOptions];
  
  // Splash Screen
  [SplashScreenModule hold];

  return YES;
}
// ------------------------------------------------------------------------------------------------

// Required For Loading JS Bundle
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}
// --------------
- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
// ------------------------------------------------------------------------------------------------

@end
