const DOMNodeCollection = require ("./dom_node_collection.js");

function $l(selector) {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  } else {
    const arr = [];
    const nodeList = document.querySelectorAll(selector);
    for (var i = 0; i < nodeList.length; i++) {
      arr.push(nodeList[i]);
    }
    return new DOMNodeCollection(arr);
  }
}

window.$l = $l;
