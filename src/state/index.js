import React from 'react';
import {atom} from 'recoil';

export const showNav = atom({
  key: 'showNav', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});