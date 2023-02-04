import { NavigationKey } from '../NavigationKey/NavigationKey';
// import { NavigationForm } from '../NavigationForm/NavigationForm';
import { NavigationSuffix } from '../NavigationSuffix/NavigationSuffix';
import { NavigationInst } from '../NavigationInst/NavigationInst';

export const Navigation = (options) => {
  return (
    <>
      <NavigationInst i={options.i} />
      <NavigationKey sk={options.sk} />
      <NavigationSuffix ss={options.ss} k={options.k} />
      {/* <NavigationForm k={options.k} s={options.s} /> */}
    </>
  );
};
