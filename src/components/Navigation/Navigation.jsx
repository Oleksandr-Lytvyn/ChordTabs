import { NavigationKey } from '../NavigationKey/NavigationKey';
import { NavigationForm } from '../NavigationSuffix/NavigationForm/NavigationForm';
import { NavigationSuffix } from '../NavigationSuffix/NavigationSuffix';

export const Navigation = (options) => {
  return (
    <>
      <NavigationKey k={options.k} />
      <NavigationSuffix s={options.s} />
      <NavigationForm k={options.k} s={options.s} />
    </>
  );
};
