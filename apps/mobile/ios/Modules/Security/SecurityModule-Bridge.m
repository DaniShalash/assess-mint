//
//  SecurityModule-Bridge.m
//  AssessmintMobile
//
//  Created by Dani Shalash on 14/07/2024.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SecurityModule, NSObject)

RCT_EXTERN_METHOD(
  enableWindowSecurity
)
// -----------------------------------------

RCT_EXTERN_METHOD(
  disableWindowSecurity
)
// ---------------------------------------------------------------------------------------------------------------

@end

