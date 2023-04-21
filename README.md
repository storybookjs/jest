# Storybook Jest

Storybook integration for Jest, instrumented for use with the [Interactions addon](https://github.com/storybookjs/storybook/blob/next/addons/interactions/README.md).

## FAQ

### Typescript does not recognize expect().toBeInTheDocument()

This is likely an issue with newer package managers.

The `@storybook/jest` package provides some type augmentations so that `expect` has extended matchers coming from Testing Library. The way it works, is that `@storybook/jest` depends on `@testing-library/jest-dom`, a package that depends on `@types/testing-library__jest-dom`. That @types package should be hoisted in your project in order for your types to fully work. As a result, you should have a `node_modules/@types/testing-library__jest-dom` directory. If you don't, then the types won't exist and that's why you're having issues.

For instance, if you have a yarn project, hoisting happens automatically. However if you're using **pnpm**, `@types` are not hoisted automatically, you will have to add a `.npmrc` file with the following setting:

```js
// .npmrc
public-hoist-pattern[]=@types*
```

Otherwise, installing `@types/testing-library__jest-dom` as a direct dependency should have the same effect and fix your issue.

If you are still experiencing issues after making these changes, it's very likely that your `tsconfig.json` file contains specific type overrides, which means that it will ignore automatic types, for instance:

```json
{
	"compilerOptions": {
    "types": [
			"node",
			"mocha",
		]
  }
}
```

In that case, make sure to add `testing-library__jest-dom` to the `types` array:

```json
{
	"compilerOptions": {
    "types": [
			"node",
			"mocha",
      "testing-library__jest-dom"
		]
  }
}
```