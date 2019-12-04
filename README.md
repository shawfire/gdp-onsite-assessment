## Instructions

1. Run `nvm use` to ensure correct Node version is used.

```bash
nvm i `cat .nvmrc`
```

2. Run `npm i -g yarn` to install yarn.
3. Run `yarn install` to install dependencies.
4. Run the tests.

-   Run `yarn test:jest` to run the tests using Jest.
    OR
-   Run `yarn test:mocha` to run the tests using Mocha.

5. Run `yarn start` to run both BE and FE services.

## Notes

<details><summary>Git Notes</summary>

-   [Generate a token to git push via https when account uses 2FA](https://github.com/settings/tokens)
-   [Make "git push" work with 2FA](https://github.com/github/hub/issues/822)
-   Initial commit to new repository.

```bash
git add --all
git commit -a -m 'Initial commit'
git branch
git remote set-url origin https://github.com/shawfire/gdp-onsite-assessment.git
git push
```

</details>

<details><summary>Code Coverage</summary>

-   Add the following lines to scripts in package.json:

```json
{
    "scripts": {
        "test:coverage": "concurrently \"jest --coverage --collectCoverageFrom=src/**/*.{js,jsx}\" \"open coverage/lcov-report/index.html\"",
        "coverage:open": "open ../coverage/lcov-report/index.html"
    }
}
```

</details>

<details><summary>enzyme unit and snapshot testing</summary>

-   Install enzyme with yarn

```bash
yarn add -D enzyme-to-json enzyme enzyme-adapter-react-16
```

-   Install enzyme with npm

```bash
npm i -D enzyme-to-json enzyme enzyme-adapter-react-16
```

-   Enzyme setup: src/setupTests.ts

```ts
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });
```

-   sample snapshot test

```ts
import * as React from 'react';
import { ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ErrorSvg } from '../ErrorSvg';

describe('Single Invite Review', () => {
    let wrapper: ReactWrapper | ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<ErrorSvg />);
    });

    test('ErrorSvg snapshot', () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
```

</details>
