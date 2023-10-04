# v0.2.3 (Wed Oct 04 2023)

#### 🐛 Bug Fix

- Fix cjs/esm interoperability [#47](https://github.com/storybookjs/jest/pull/47) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.2.2 (Tue Aug 29 2023)

#### 🐛 Bug Fix

- Release 0.2.2 [#43](https://github.com/storybookjs/jest/pull/43) ([@IanVS](https://github.com/IanVS) [@yannbf](https://github.com/yannbf))
- Update @testing-library/jest-dom to v6 [#42](https://github.com/storybookjs/jest/pull/42) ([@IanVS](https://github.com/IanVS) [@yannbf](https://github.com/yannbf))
- Fix version in package.json, support yarn 3 [#41](https://github.com/storybookjs/jest/pull/41) ([@IanVS](https://github.com/IanVS) [@yannbf](https://github.com/yannbf))

#### Authors: 2

- Ian VanSchooten ([@IanVS](https://github.com/IanVS))
- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.2.1 (Fri Aug 18 2023)

#### 🐛 Bug Fix

- Release 0.2.1 [#38](https://github.com/storybookjs/jest/pull/38) ([@kasperpeulen](https://github.com/kasperpeulen))
- Specify triple slash reference in banner [#37](https://github.com/storybookjs/jest/pull/37) ([@kasperpeulen](https://github.com/kasperpeulen))

#### Authors: 1

- Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen))

---

# v0.2.0 (Thu Aug 17 2023)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Norbert de Langen ([@ndelangen](https://github.com/ndelangen))

:heart: Vanessa Yuen ([@vanessayuenn](https://github.com/vanessayuenn))

:heart: Valentin Palkovic ([@valentinpalkovic](https://github.com/valentinpalkovic))

:heart: Homa Wong ([@unional](https://github.com/unional))

:heart: Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen))

:heart: Michael Shilman ([@shilman](https://github.com/shilman))

### Release Notes

#### Prebundle @storybook/instrumenter package ([#27](https://github.com/storybookjs/jest/pull/27))

This change bundles the `@storybook/instrumenter` package which fixes dependency conflicts in certain scenarios. It shouldn't impact the functionality of the package itself, but let us know if you experience any issues!

---

#### 🚀 Enhancement

- Release/0.2.0 [#36](https://github.com/storybookjs/jest/pull/36) ([@yannbf](https://github.com/yannbf) [@ndelangen](https://github.com/ndelangen) [@vanessayuenn](https://github.com/vanessayuenn) [@valentinpalkovic](https://github.com/valentinpalkovic) [@unional](https://github.com/unional) [@kasperpeulen](https://github.com/kasperpeulen))
- Fix: Make sure that expect matches the runtime type when instrumented [#34](https://github.com/storybookjs/jest/pull/34) ([@kasperpeulen](https://github.com/kasperpeulen))
- Prebundle @storybook/instrumenter package [#27](https://github.com/storybookjs/jest/pull/27) ([@ndelangen](https://github.com/ndelangen) [@yannbf](https://github.com/yannbf))

#### 🐛 Bug Fix

- bump version [#31](https://github.com/storybookjs/jest/pull/31) ([@yannbf](https://github.com/yannbf))
- Retrigger release [#30](https://github.com/storybookjs/jest/pull/30) ([@yannbf](https://github.com/yannbf))
- Change Storybook dependencies from `future` npm tag to `next` [#28](https://github.com/storybookjs/jest/pull/28) ([@yannbf](https://github.com/yannbf))
- Change build scripts to use tsup instead of tsc [#26](https://github.com/storybookjs/jest/pull/26) ([@ndelangen](https://github.com/ndelangen) [@yannbf](https://github.com/yannbf))

#### 📝 Documentation

- docs: update link [#33](https://github.com/storybookjs/jest/pull/33) ([@unional](https://github.com/unional))
- Add more explanation to the types FAQ [#25](https://github.com/storybookjs/jest/pull/25) ([@yannbf](https://github.com/yannbf))

#### Authors: 8

- Homa Wong ([@unional](https://github.com/unional))
- Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen))
- Michael Shilman ([@shilman](https://github.com/shilman))
- Norbert de Langen ([@ndelangen](https://github.com/ndelangen))
- Valentin Palkovic ([@valentinpalkovic](https://github.com/valentinpalkovic))
- Vanessa Yuen ([@vanessayuenn](https://github.com/vanessayuenn))
- Yann Braga ([@yannbf](https://github.com/yannbf))
- yannbf@gmail.com (runner@fv-az180-857.oqwrao4tgo5u1osypft1dvkhhh.cx.internal.cloudapp.net)

---

# v0.1.0 (Mon Apr 03 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen)), for all your work!

#### 🚀 Enhancement


#### 🐛 Bug Fix

- Support storybook 7.0 [#23](https://github.com/storybookjs/jest/pull/23) ([@yannbf](https://github.com/yannbf))
- Support storybook 7.0 [#22](https://github.com/storybookjs/jest/pull/22) ([@yannbf](https://github.com/yannbf))

#### Authors: 2

- Kasper Peulen ([@kasperpeulen](https://github.com/kasperpeulen))
- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.10 (Fri Mar 18 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Ian VanSchooten ([@IanVS](https://github.com/IanVS)), for all your work!

#### 🐛 Bug Fix

- Filter invalid matchers before extending expect [#16](https://github.com/storybookjs/jest/pull/16) ([@IanVS](https://github.com/IanVS) [@yannbf](https://github.com/yannbf))

#### Authors: 2

- Ian VanSchooten ([@IanVS](https://github.com/IanVS))
- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.9 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- deps: use latest storybook instrumenter [#14](https://github.com/storybookjs/jest/pull/14) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.8 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- deps: upgrade @storybook/instrumenter [#13](https://github.com/storybookjs/jest/pull/13) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.7 (Thu Feb 17 2022)

#### 🐛 Bug Fix

- feat: add testing-library expect matchers [#12](https://github.com/storybookjs/jest/pull/12) ([@yannbf](https://github.com/yannbf))

#### Authors: 1

- Yann Braga ([@yannbf](https://github.com/yannbf))

---

# v0.0.6 (Fri Feb 04 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: null[@FTWinston](https://github.com/FTWinston)

:heart: Yann Braga ([@yannbf](https://github.com/yannbf))

:heart: Gert Hengeveld ([@ghengeveld](https://github.com/ghengeveld))

#### 🐛 Bug Fix

- Fix #8: Generated type of expect [#9](https://github.com/storybookjs/jest/pull/9) ([@FTWinston](https://github.com/FTWinston))
- chore: add auto-release process [#11](https://github.com/storybookjs/jest/pull/11) ([@yannbf](https://github.com/yannbf))
- chore: add linear workflow [#10](https://github.com/storybookjs/jest/pull/10) ([@yannbf](https://github.com/yannbf))
- feat: support cjs and esm [#6](https://github.com/storybookjs/jest/pull/6) ([@yannbf](https://github.com/yannbf))
- fix: change output target to commonjs [#5](https://github.com/storybookjs/jest/pull/5) ([@yannbf](https://github.com/yannbf))
- change @storybook/expect version to latest [#4](https://github.com/storybookjs/jest/pull/4) ([@yannbf](https://github.com/yannbf))
- fix expect version [#3](https://github.com/storybookjs/jest/pull/3) ([@yannbf](https://github.com/yannbf))
- Include typings when releasing the library [#2](https://github.com/storybookjs/jest/pull/2) ([@yannbf](https://github.com/yannbf))
- feat: add typescript support [#1](https://github.com/storybookjs/jest/pull/1) ([@yannbf](https://github.com/yannbf))

#### ⚠️ Pushed to `main`

- 0.0.5 ([@ghengeveld](https://github.com/ghengeveld))
- Use proper dist tag for @storybook/expect ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.4 ([@ghengeveld](https://github.com/ghengeveld))
- Make sure we use the prerelease version of @storybook/expect and move expect itself to devDeps ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.3 ([@ghengeveld](https://github.com/ghengeveld))
- Bump deps and add @types/react to fix compilation issue ([@ghengeveld](https://github.com/ghengeveld))
- Fix versions ([@ghengeveld](https://github.com/ghengeveld))
- Add eslint/prettier config ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.0 ([@ghengeveld](https://github.com/ghengeveld))
- Do not intercept static expect helpers ([@ghengeveld](https://github.com/ghengeveld))
- 0.0.0-alpha.5 ([@yannbf](https://github.com/yannbf))
- 0.0.0-alpha.4 ([@yannbf](https://github.com/yannbf))
- 0.0.0-alpha.3 ([@yannbf](https://github.com/yannbf))
- 0.0.0-alpha.2 ([@yannbf](https://github.com/yannbf))
- Initial commit ([@ghengeveld](https://github.com/ghengeveld))

#### Authors: 3

- [@FTWinston](https://github.com/FTWinston)
- Gert Hengeveld ([@ghengeveld](https://github.com/ghengeveld))
- Yann Braga ([@yannbf](https://github.com/yannbf))
