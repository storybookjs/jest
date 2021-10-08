import { default as expectPatched } from '@storybook/expect'
import { instrument } from '@storybook/instrumenter'
import * as mock from 'jest-mock'

export const { jest } = instrument({ jest: mock })

export const { expect } = instrument(
  { expect: expectPatched },
  { intercept: true }
)
