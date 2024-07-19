/**
 * Notifications Service
 */
jest.mock('@services/notifications.service', () => ({
  get NotificationsService() {
    return {
      getPermissionStatus: jest.fn().mockResolvedValue('granted'),
      requestPermission: jest.fn().mockResolvedValue(undefined),
      post: jest.fn().mockResolvedValue(undefined)
    };
  }
}));
// ---------------------
// -----------------------------------------------------------------------
