import React from 'react';

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

export default DashboardLayout;
