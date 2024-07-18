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

export const NavBar = () => {

  const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');
  // ---------------------

  const onLanguageChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  }, []);
  // ---------------------

  return (
    <Navbar>

      {/** Brand */}
      <NavbarBrand>
        <div className="bg-primary-500 px-2 py-1 mr-1 rounded">
          <Image src="/nav_logo.png" width={41} height={20} alt="Logo" />
        </div>
        <p className="text-2xl font-semibold text-inherit">Mint</p>
      </NavbarBrand>

      {/** Content */}
      <NavbarContent justify="end">

        {/** Language Selection */}
        <NavbarItem className="min-w-32">

          <Select
            variant="flat"
            size="sm"
            selectionMode="single"
            selectedKeys={[selectedLanguage]}
            onChange={onLanguageChange}>

            <SelectItem key="en">English</SelectItem>
            <SelectItem key="ar">Arabic</SelectItem>
            <SelectItem key="fr">French</SelectItem>

          </Select>

        </NavbarItem>

      </NavbarContent>
  
    </Navbar>
  );
  // ----------------------------------------------------------------------------------------
}
