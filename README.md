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

<details><summary>Add enzyme / Snapshot tests</summary>

-   Install enzyme

```bash
yarn add --dev enzyme enzyme-adapter-react-16 react-test-renderer
```

-   Enzyme setup: src/setupTests.js

```js
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });
```

</details>
