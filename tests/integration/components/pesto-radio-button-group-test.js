import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pesto-radio-button-group', 'Integration | Component | pesto radio button group', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pesto-radio-button-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pesto-radio-button-group}}
      template block text
    {{/pesto-radio-button-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
