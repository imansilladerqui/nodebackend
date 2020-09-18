const router = require('./Network/routes');

const useSpy = jest.fn();
const listenSpy = jest.fn();

jest.doMock('express', () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
  })
});

describe('should test server configuration', () => {
  test('should call router && bodyparser', () => {
    require('./index.js');
    expect(useSpy).toHaveBeenCalledTimes(7);
  });

  test('should call listen fn', () => {
    require('./index.js');
    expect(listenSpy).toHaveBeenCalled();
  });
});