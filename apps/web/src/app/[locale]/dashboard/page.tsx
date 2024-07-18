'use client';

import React from 'react';

import {
  Card,
  CardHeader
} from '@nextui-org/react';

import { useI18n } from '@i18n/client';

const Dashboard = () => {

  const t = useI18n();
  // ---------------------

  return (
    <main className="flex flex-col items-center justify-start p-8">

      {/** Card */}
      <Card className="w-full max-w-md m-4 rounded-lg shadow">

        {/** Header */}
        <CardHeader className="pt-6 md:pt-8 px-6 md:px-8 bg-primary-500">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            {t('signIn.title.main')}
          </h1>
        </CardHeader>

      </Card>

    </main>
  );
  // ----------------------------------------------------------------------------------------
}

export default Dashboard;
