class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(str) {
    console.log(this.htmlElements);
    if (!str) {
      return this.htmlElements[0].innerHTML;
    } else {
      for (var i = 0; i < this.htmlElements.length; i++) {
        this.htmlElements[i].innerHTML = str;
      }
    }
  }

  empty() {
    for (var i = 0; i < this.htmlElements.length; i++) {
      this.htmlElements[i].innerHTML = "";
    }
  }

  append() {
    
  }
}

module.exports = DOMNodeCollection;
