import React from 'react';
import type { Metadata } from 'next';

import { getI18n } from '@i18n/server';

import { I18nProviderClient, LanguageCode } from '@i18n/client';

type Props = {
  children: React.ReactNode;
  params: {
    locale: LanguageCode;
  }
};

const DashboardLayout = (props: Props) => {

  const { children, params } = props;
  // ---------------------

  return (
    <I18nProviderClient locale={params.locale}>
      {children}
    </I18nProviderClient>
  );
  // ----------------------------------------------------------------------------------------
}

// Metadata ---------------------
export const generateMetadata = async (): Promise<Metadata> => {

  const t = await getI18n();
  // ---------------------

  return {
    title: `${t('common.label.appName')} - ${t('dashboard.title.main')}`
  }
}
// ------------------------------------------------------------------------------------------

export default DashboardLayout;
