const DOMNodeCollection = require("/Users/appacademy/Desktop/W6D4/lib/dom_node_collection.js");

window.$l = function(arg) {
  let elementList;

  if (typeof arg === 'string') {
    elementList = document.querySelectorAll(arg);
    return new DOMNodeCollection(elementList);
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }

};
