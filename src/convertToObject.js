'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  for (const el of sourceString.split(';')) {
    if (!el.includes(':')) {
      continue;
    }

    const [name, value] = el.split(':');

    if (!name || !value) {
      continue;
    }

    stylesObject[name.trim()] = value.trim();
  }

  return stylesObject;
}

module.exports = convertToObject;
