const { getLocalStorageMock } = require('../dist');

describe('local-storage-mock', () => {
  let window = {};

  beforeEach(() => {
    window.localStorage = getLocalStorageMock();
  });

  afterEach(() => {
    window = {};
  });

  test('constructor', () => {
    expect(window.localStorage.length).toBe(0);
    expect(window.localStorage.store).toEqual({});
  });

  describe('function of key', () => {
    test('Set some items', () => {
      expect(window.localStorage.key(0)).toBe(null);

      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.key(0)).toBe('testkey');
      expect(window.localStorage.key(1)).toBe(null);

      window.localStorage.setItem('testkey2', 'testvalue2');
      expect(window.localStorage.key(0)).toBe('testkey');
      expect(window.localStorage.key(1)).toBe('testkey2');
    });

    test('Non argument', () => {
      expect(() => {
        window.localStorage.key();
      }).toThrowError(
        "Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
      );
    });
  });

  describe('function of getItem', () => {
    test('Get item', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
    });

    test('Non-existent key', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey2')).toBe(null);
    });

    test('Non argument', () => {
      expect(window.localStorage.getItem()).toBe(null);
    });
  });

  describe('function of setItem', () => {
    test('Set some items', () => {
      expect(
        window.localStorage.setItem('testkey', 'testvalue')
      ).toBeUndefined();
      expect(window.localStorage.length).toBe(1);
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');

      expect(
        window.localStorage.setItem('testkey2', 'testvalue2')
      ).toBeUndefined();
      expect(window.localStorage.length).toBe(2);
      expect(window.localStorage.getItem('testkey2')).toBe('testvalue2');
    });

    test('Overwrite with the same key', () => {
      expect(
        window.localStorage.setItem('testkey', 'testvalue')
      ).toBeUndefined();
      expect(window.localStorage.length).toBe(1);

      expect(
        window.localStorage.setItem('testkey', 'testvalue2')
      ).toBeUndefined();
      expect(window.localStorage.length).toBe(1);
      expect(window.localStorage.getItem('testkey')).toBe('testvalue2');
    });

    test('Overwrite with the same key2', () => {
      expect(
        window.localStorage.setItem('testkey', 'testvalue')
      ).toBeUndefined();
      expect(window.localStorage.length).toBe(1);

      expect(window.localStorage.setItem('testkey', '')).toBeUndefined();
      expect(window.localStorage.length).toBe(1);
      expect(window.localStorage.getItem('testkey')).toBe('');
    });

    test('Not specify key', () => {
      expect(window.localStorage.setItem('', 'testvalue')).toBeUndefined();
      expect(window.localStorage.length).toBe(0);
    });

    test('Non argument', () => {
      expect(() => {
        window.localStorage.setItem();
      }).toThrowError(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 0 present."
      );
    });

    test('1 argument', () => {
      expect(() => {
        window.localStorage.setItem('testkey');
      }).toThrowError(
        "Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present."
      );
    });
  });

  describe('function of removeItem', () => {
    test('Remove item', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);

      expect(window.localStorage.removeItem('testkey')).toBeUndefined();
      expect(window.localStorage.getItem('testkey')).toBe(null);
      expect(window.localStorage.length).toBe(0);
    });

    test('Not exists key', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);

      expect(window.localStorage.removeItem('testkey2')).toBeUndefined();
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);
    });

    test('Already deleted key', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);

      expect(window.localStorage.removeItem('testkey')).toBeUndefined();
      expect(window.localStorage.getItem('testkey')).toBe(null);
      expect(window.localStorage.length).toBe(0);

      expect(window.localStorage.removeItem('testkey')).toBeUndefined();
    });

    test('Non argument', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);

      expect(() => {
        window.localStorage.removeItem().toBeUndefined();
      }).toThrowError(
        "Uncaught TypeError: Failed to execute 'removeItem' on 'Storage': 1 argument required, but only 0 present."
      );
    });
  });

  describe('function of clear', () => {
    test('Clear items', () => {
      window.localStorage.setItem('testkey', 'testvalue');
      expect(window.localStorage.getItem('testkey')).toBe('testvalue');
      expect(window.localStorage.length).toBe(1);

      expect(window.localStorage.clear()).toBeUndefined();
      expect(window.localStorage.getItem('testkey')).toBe(null);
      expect(window.localStorage.length).toBe(0);
    });
  });
});
