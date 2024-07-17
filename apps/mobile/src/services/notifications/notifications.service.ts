import notifee, {
  Event,
  InitialNotification,
  NotificationSettings,
  AuthorizationStatus
} from '@notifee/react-native';

import { MintError } from '@assessmint/core';

class Notifications {

  private isInitialized: boolean = false;

  private readonly channelId: string = 'general';
  private readonly channelName: string = 'General Notifications';
  private readonly tag: string = 'NotificationsService';

  constructor() {}

  // Public Methods ---------------------------------------------------------
  public async init(): Promise<void> {
    if (this.isInitialized) return;
    try {
      await notifee.createChannel({
        id: this.channelId,
        name: this.channelName
      });
      this.isInitialized = true;
      notifee.onForegroundEvent(this.onForegroundEvent);
      notifee.onBackgroundEvent(this.onBackgroundEvent);
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to initialize notifications service.'
      });
    }
  }
  // --------------------

  public async getInitialNotification(): Promise<InitialNotification | undefined> {
    try {
      const initialNotification: InitialNotification | null = await notifee.getInitialNotification();
      return initialNotification || undefined;
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to request notifications permission.'
      });
    }
  }
  // --------------------

  public async requestPermission(): Promise<boolean> {
    try {
      const settings: NotificationSettings = await notifee.getNotificationSettings();
      if (settings.authorizationStatus === AuthorizationStatus.AUTHORIZED) return true;
      const result: NotificationSettings = await notifee.requestPermission({
        sound: true,
        alert: true,
        badge: true,
        announcement: false,
        carPlay: false,
        provisional: false
      });
      return result.authorizationStatus === AuthorizationStatus.AUTHORIZED;
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to request notifications permission.'
      });
    }
  }
  // --------------------

  public async post(title: string, body: string): Promise<void> {
    try {
      await notifee.displayNotification({
        title,
        body,
        android: {
          channelId: this.channelId
        }
      });
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to post notification.'
      });
    }
  }
  // -----------------------------------------------------------------------

  // Private Methods --------------------------------------------------------
  private onForegroundEvent(event: Event): void {
    /**
     * Logic for handling foreground events should go here...
     * Since this is an assessment app, there's no handling  for anything here.
     */
  }
  // --------------------

  private async onBackgroundEvent(event: Event): Promise<void> {
    /**
     * Logic for handling background events should go here...
     * Since this is an assessment app, there's no handling  for anything here.
     */
  }
  // ------------------------------------------------------------------------
}

export const NotificationsService = new Notifications();
