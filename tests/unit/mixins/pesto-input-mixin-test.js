import Ember from 'ember';
import PestoInputMixinMixin from 'ember-pesto/mixins/pesto-input-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | pesto input mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let PestoInputMixinObject = Ember.Object.extend(PestoInputMixinMixin);
  let subject = PestoInputMixinObject.create();
  assert.ok(subject);
});
