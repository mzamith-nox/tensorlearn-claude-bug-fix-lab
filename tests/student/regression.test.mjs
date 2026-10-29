import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('viewer user-4 cannot see claim-B owned by user-42 (prefix-overlap incident)', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claimB], 'user-4', 'claim-B'), null);
  // The real owner still gets the claim, so returning null for everyone can't pass this test
  assert.deepEqual(getClaim([claimB], 'user-42', 'claim-B'), claimB);
});
