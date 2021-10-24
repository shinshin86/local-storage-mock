# localStorage Mock

This is the mock of localStorage.

The behavior is not perfectly reproduced (The value returned when an unintended value is passed, for example), but the basic logic is implemented.

## Install

```sh
npm install local-storage-mock
# or
yarn add local-storage-mock
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

MIT

## Author

[Yuki Shindo](https://shinshin86.com/)
