const {freezeTag} = require('freeze-tag');

const reduxFreeze = (reducer, options) => {
  const freeze = freezeTag(options);
  return (state = {}, action) => reducer(freeze(state), action);
};

module.exports = reduxFreeze;
