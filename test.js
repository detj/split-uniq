import test from "ava";
import splituniq from "./index.js";

test('splits, trims & dedups', t => {
  t.deepEqual(splituniq('beep, boop, beep'), ['beep', 'boop']);
  t.deepEqual(splituniq('beep | boop | beep', '|'), ['beep', 'boop']);
  t.deepEqual(splituniq('   beep  ,     boop   ,  boop'), ['beep', 'boop']);
});
