'use client';

const getPermissionStatus = async (): Promise<'default' | 'granted' | 'denied' | undefined> => {
  try {
    if ('Notification' in window) {
      return Notification.permission;
    }
  } catch {}
};
// ----------------------

const requestPermission = async (): Promise<void> => {
  try {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') return;
      await Notification.requestPermission();
      return;
    }
  } catch {}
};
// ----------------------

const post = (title: string, body: string): void => {
  try {
    if ('Notification' in window) {
      if (Notification.permission !== 'granted') return;
      new Notification(title, {
        body: body,
        icon: '/push_icon.png'
      });
    }
  } catch {}
};
// ------------------------------------------------------------------------------------------

export const NotificationsService = {
  getPermissionStatus,
  requestPermission,
  post
};
