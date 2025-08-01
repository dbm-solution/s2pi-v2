import type frMessages from './fr/index';

export type Messages = typeof frMessages;
export type IntlMessages = Messages;

// This ensures all other locales match the French structure
declare global {
  interface IntlMessages extends Messages {}
}
