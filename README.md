Experiment: setting up ts-node + mocha tests within commonjs with imported ESM modules

See `package.json` for all of the commands

Befor running any of the other commands, run `npm i` to install dependencies.

To run the built application in node (expected behaviour: no exceptions):

```
npm run build
npm run exec-js
```

To run the built application in ts-node (expected behaviour: no exceptions):

```
npm run exec-ts  # you shouldn't need to build first
```

To run the tests:

```
npm run test  # this uses ts-node under the hood, via ts-mocha
```
