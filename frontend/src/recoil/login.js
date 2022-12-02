import { atom } from 'recoil';

import { localStorageEffect } from './pagesState';

const loginState = atom({
  key: 'loginState',
  default: false,
  effects: [localStorageEffect('loginState')],
});

const sessionState = atom({
  key: 'sessionState',
  default: false,
  effects: [localStorageEffect('sessionState')],
});

const accessToken = atom({
  key: 'accessToken',
  default: '',
});

const refreshToken = atom({
  key: 'refreshToken',
  default: '',
  effects: [localStorageEffect('refreshToken')],
});

export { sessionState, loginState, accessToken, refreshToken };
