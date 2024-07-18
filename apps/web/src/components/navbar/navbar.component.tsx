'use client';

import React, { useCallback, ChangeEvent } from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Select,
  SelectItem
} from '@nextui-org/react';

import { I18nProviderClient, useI18n, useChangeLocale, useCurrentLocale, LanguageCode } from '@i18n/client';

type Props = {
  locale: LanguageCode;
};

export const NavBar = (props: Props) => (
  <I18nProviderClient locale={props.locale}>
    <WrappedNavBar />
  </I18nProviderClient>
);

export const WrappedNavBar = () => {

  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLanguage = useCurrentLocale();
  // ---------------------

  const onLanguageChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    changeLocale(event.target.value as LanguageCode);
  }, [changeLocale]);
  // ---------------------

  return (
    <Navbar>

      {/** Brand */}
      <NavbarBrand>
        <div className="bg-primary flex items-center justify-center p-2 mr-1 rounded-full aspect-square">
          <Image src="/nav_logo.png" width={28} height={23.6} alt="Logo" />
        </div>
        <p className="text-3xl font-extralight text-inherit mx-2 md:mx-3">{t('common.label.appName')}</p>
      </NavbarBrand>

      {/** Content */}
      <NavbarContent justify="end">

        {/** Language Selection */}
        <NavbarItem className="min-w-32">

          <Select
            variant="flat"
            size="sm"
            selectionMode="single"
            selectedKeys={[currentLanguage]}
            onChange={onLanguageChange}>

            <SelectItem key={LanguageCode.EN}>{t('common.language.en')}</SelectItem>
            <SelectItem key={LanguageCode.AR}>{t('common.language.ar')}</SelectItem>
            <SelectItem key={LanguageCode.FR}>{t('common.language.fr')}</SelectItem>

          </Select>

        </NavbarItem>

      </NavbarContent>
  
    </Navbar>
  );
  // ----------------------------------------------------------------------------------------
}
