import { default as expectPatched } from '@storybook/expect';
import { instrument } from '@storybook/instrumenter';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as mock from 'jest-mock';

const { jest } = instrument({ jest: mock });

const expect: typeof expectPatched = instrument(
  { expect: expectPatched },
  { intercept: (_method, path) => path[0] !== 'expect' }
).expect;

expect.extend(matchers);

export { expect, jest };
