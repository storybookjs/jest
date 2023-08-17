import { default as expectPatched } from '@storybook/expect';
import { instrument } from '@storybook/instrumenter';
import * as matchers from '@testing-library/jest-dom/matchers';
import * as mock from 'jest-mock';

const { jest } = instrument({ jest: mock });

/**
 * The `expect` function is used every time you want to test a value.
 * You will rarely call `expect` by itself.
 */
export interface Expect extends Pick<jest.Expect, keyof jest.Expect> {
  /**
   * The `expect` function is used every time you want to test a value.
   * You will rarely call `expect` by itself.
   *
   * @param actual The value to apply matchers against.
   */
  <T = any>(actual: T): jest.JestMatchersShape<
    jest.Matchers<Promise<void>, T>,
    jest.Matchers<Promise<void>, T>
  >;
}

const expect = instrument(
  { expect: expectPatched },
  { intercept: (_method, path) => path[0] !== 'expect' }
).expect as unknown as Expect;

// @TODO: This should be reverted once https://github.com/testing-library/jest-dom/pull/438 is merged
// Some bundlers include an undefined `default` in the namespace import,
// or __esmodule (a boolean) which cause expect.extend to throw.
const validMatchers = { ...matchers };
Object.keys(validMatchers).forEach((matcherName) => {
  const matcher = validMatchers[matcherName];
  if (typeof matcher === 'undefined' || typeof matcher === 'boolean') {
    delete validMatchers[matcherName];
  }
});

expect.extend(validMatchers);

export { expect, jest };
