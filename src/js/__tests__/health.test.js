import dispHealth from '../health';

test('should healthy', () => {
  const received = dispHealth({ name: 'Маг', health: 77 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = dispHealth({ name: 'Маг', health: 38 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = dispHealth({ name: 'Маг', health: 9 });
  expect(received).toBe('critical');
});

test('The value is not a number!', () => {
  expect(() => {
    dispHealth({});
  }).toThrow();
});

test('The item is not a number!', () => {
  expect(() => {
    dispHealth({ name: 'Маг', health: 'mistake' });
  }).toThrow();
});

test('The argument is not a number!', () => {
  expect(() => {
    dispHealth({ name: 'Маг', health: -10 });
  }).toThrow();
});