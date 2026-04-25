'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  for (const el of sourceString.split(';')) {
    if (!el.includes(':')) {
      continue;
    }

    const [name, value] = el.split(':');

    if (!name || !value) {
      continue;
    }

    result[name.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
