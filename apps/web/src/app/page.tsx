'use client'

import { useState } from 'react';
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Select,
  SelectItem
} from '@nextui-org/react';

import {
  MintError,
  validateEmail,
  validatePassword,
  validateUserName,
  UserIdType,
  UserCountry,
  Validity
} from '@assessmint/core';

const Home = () => {

  const [userCountry, setUserCountry] = useState<UserCountry>(UserCountry.UAE);
  const [userIdType, setUserIdType] = useState<UserIdType>(UserIdType.EMAIL);
  const [userId, setUserId] = useState<string>('');
  const [userIdValidity, setUserIdValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [password, setPassword] = useState<string>('');
  const [passwordValidity, setPasswordValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  // ---------------------

  return (
    <main className="flex flex-col items-center justify-start p-8">

      {/** Card */}
      <Card className="w-full max-w-md m-4 rounded-lg shadow">

        {/** Header */}
        <CardHeader className="pt-6 md:pt-8 px-6 md:px-8 bg-primary-500">
          <h1 className="text-white text-3xl md:text-4xl font-bold">Sign In</h1>
        </CardHeader>
        
        {/** Body */}
        <CardBody className="p-6 md:p-8 space-y-4 md:space-y-6">

          {/** Options */}
          <div className="flex flex-row items-center justify-stretch space-x-4 md:space-x-6 mb-4">

            {/** Email */}
            <Select variant="underlined" label="UserID Type">
              <SelectItem key="em">Email</SelectItem>
              <SelectItem key="un">Username</SelectItem>
            </Select>

            {/** User Country */}
            <Select variant="underlined" label="Country">
              <SelectItem key="ae">UAE</SelectItem>
              <SelectItem key="in">India</SelectItem>
              <SelectItem key="pk">Pakistan</SelectItem>
              <SelectItem key="fr">France</SelectItem>
            </Select>

          </div>

          {/** User ID */}
          <Input
            label="UserID"
            description="Your email address."
            name="userId"
            type="text"
            autoComplete="userID"
            required={true}
            value={userId}
            onChange={(e) => setUserId(e.target.value)} />

          {/** Password */}
          <Input
            label="Password"
            description="Strong and unique password without spaces."
            name="password"
            type="password"
            autoComplete="current-password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />

        </CardBody>

        <Divider />

        {/** Footer */}
        <CardFooter className="flex flex-col items-stretch justify-center pt-6 md:pt-8 px-6 md:px-8 space-y-2 md:space-y-4">

          {/** SignUp */}
          <Button color="primary">
            Sign Up
          </Button>

          {/** Login */}
          <Button variant="light" color="primary">
            Have an account? Login
          </Button>

        </CardFooter>

      </Card>

    </main>
  );
  // ----------------------------------------------------------------------------------------
}

export default Home;
