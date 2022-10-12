import { module, test } from 'qunit';
import { setupRenderingTest } from 'ibudget/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Header />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Header @text="ello" />
    `);

    assert.dom(this.element).hasText('ello');
  });
});
