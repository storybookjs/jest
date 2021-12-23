import { default as expectPatched } from '@storybook/expect';
import { instrument } from '@storybook/instrumenter';
import * as mock from 'jest-mock';

export const { jest } = instrument({ jest: mock });

export const expect: typeof expectPatched = instrument(
  { expect: expectPatched },
  { intercept: (method, path) => path[0] !== 'expect' }
).expect;
