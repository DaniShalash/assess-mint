'use client';

import React, { useCallback } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button
} from '@nextui-org/react';

import { useUserDetails } from '@providers';

import { UserDetails } from '@models';

import { NotificationsService } from '@services';

import { logoutAction } from '@actions/auth.actions';

import { useI18n } from '@i18n/client';

const Dashboard = () => {

  const t = useI18n();
  // ---------------------

  const userDetails: UserDetails | undefined = useUserDetails();
  // ---------------------

  const logout = useCallback(() => {
    logoutAction();
    NotificationsService.post(t('notifications.logout.title'), t('notifications.logout.body'));
  }, [t]);
  // ---------------------

  return (
    <main className="flex flex-col items-center justify-start p-8">

      {/** Card */}
      <Card className="w-full max-w-md rounded-lg shadow">

        {/** Header */}
        <CardHeader className="pt-6 md:pt-8 px-6 md:px-8 bg-primary-500">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            {t('dashboard.title.main')}
          </h1>
        </CardHeader>

        {/** Body */}
        <CardBody className="px-6 md:px-8 space-y-2 md:space-y-4">

          {/** User ID Label */}
          <h2 className="font-semibold text-justify">
            {t('dashboard.label.userId')}
          </h2>

          {/** User ID Value */}
          <p className="text-justify">
            {(
              userDetails?.userId ?
              userDetails.userId :
              t('dashboard.message.userIdNotFound')
            )}
          </p>

        </CardBody>

        <Divider />

        {/** Footer */}
        <CardFooter className="flex flex-col items-stretch justify-center pt-6 md:pt-8 px-6 md:px-8 space-y-2 md:space-y-4">

          {/** Logout */}
          <Button
            color="secondary"
            onClick={logout}>
            {t('dashboard.label.logout')}
          </Button>

        </CardFooter>

      </Card>

    </main>
  );
  // ----------------------------------------------------------------------------------------
}

export default Dashboard;
