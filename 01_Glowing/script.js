"use strict";
// Add Event On Element

const addEventOnElement = function (element, type, callback) {
  if (element.length > 1) {
    for (let item = 0; item < element.length; item++) {
      element[item].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};
