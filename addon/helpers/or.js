import Ember from 'ember';

export function or(params) {
  if (params.length > 1)
    return params.any((i) => i);
  else
    throw new Error('There have to be more than one argument')
}

export default Ember.Helper.helper(or);
