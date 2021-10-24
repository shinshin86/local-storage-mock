# localStorage Mock

This is the mock of localStorage.

The behavior is not perfectly reproduced (The value returned when an unintended value is passed, for example), but the basic logic is implemented.

## Install

This package uses scoped modules.
Therefore, please install it as follows.

```sh
npm install local-storage-mock@npm:@shinshin86/local-storage-mock
# or
yarn add local-storage-mock@npm:@shinshin86/local-storage-mock
```

Of course, you can also install it this way.
In that case, please also enter the package with `@` when you load it.

(Ex: `require('@shinshin86/local-storage-mock')` )

```sh
npm install @shinshin86/local-storage-mock
# or
yarn add @shinshin86/local-storage-mock
```

## Usage

```javascript
const { getLocalStorageMock } = require('local-storage-mock');

const window = {
  localStorage: getLocalStorageMock(),
};

window.localStorage.setItem('testkey', 'testvalue');
console.log(window.localStorage.getItem('testkey'));
// => testvalue

console.log(window.localStorage.key(0));
// => testkey

console.log(window.localStorage.length);
// => 1

window.localStorage.removeItem('testkey');
console.log(window.localStorage.getItem('testkey'));
// => null

window.localStorage.setItem('testkey', 'testvalue');
console.log(window.localStorage.getItem('testkey'));
// => testvalue

window.localStorage.clear();
console.log(window.localStorage.length);
// => 0

console.log(window.localStorage.getItem('testkey'));
// => null
```

## TypeScript localStorage Mock

It was originally a project to create a mock for localStorage in TypeScript.

If you want to use the localStorage mock written in TypeScript, you can copy and use the code here( `src/index.ts` ).

## License

[MIT](https://github.com/shinshin86/local-storage-mock/blob/main/LICENSE)

## Author

[Yuki Shindo](https://shinshin86.com/)
