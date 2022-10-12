import { module, test } from 'qunit';
import { setupTest } from 'ibudget/tests/helpers';

module('Unit | Route | budgets', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:budgets');
    assert.ok(route);
  });
});
