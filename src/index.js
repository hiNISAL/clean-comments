const { removeComments } = require('./utils/utils');

module.exports = (code, { onlyBlock, onlyLine } = {}) => {
  if (onlyBlock) {
    return removeComments(code, 'onlyBlock');
  }

  if (onlyLine) {
    return removeComments(code, 'onlyLine');
  }

  return removeComments(code, 'all');
}
