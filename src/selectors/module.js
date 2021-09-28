import _ from 'lodash';

function getModuleName(module) {
  return _.get(module, 'data.name');
}

function getModuleLevels(module) {
  return _.get(module, 'data.levels');
}

export default {
  getModuleName,
  getModuleLevels,
}
