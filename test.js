const test = require('ava')

const splituniq = require('./')

test('splits, trims & dedups', t => {
  t.deepEqual(splituniq('beep, boop, beep'), ['beep', 'boop'])
  t.deepEqual(splituniq('beep | boop | beep', '|'), ['beep', 'boop'])
})
