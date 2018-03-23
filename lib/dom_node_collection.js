class DOMNodeCollection {
  constructor (args) {
    this.args = args;

    return this;
  }

  html(string) {
    if (string === undefined) {
      return this.args[0];

    } else {
      this.args.forEach(function(el) {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.args.forEach(function(el) {
      el.innerHTML ="";
    });
  }

  append(arg) {
    this.args.forEach(function(el) {
      el.innerHTML += arg;
    });
  }

  attr(string) {
    var el = this.args[0].attributes;
    return el[string];
  }

  addClass(string) {
    this.args.forEach(function(el) {
      el.setAttribute("class", string);
    });
  }

  removeClass() {
    this.args.forEach(function(el) {
      el.removeAttribute("class");
    });
  }

  children() {
    let childArr = [];
    this.args.forEach(function(el) {
       childArr = childArr.concat(Array.from(el.children));
    });
    return childArr;
  }

  parent() {
    let parentArr = [];
    this.args.forEach(function(el) {
       if (!parentArr.includes(el.parentNode)) {
         parentArr = parentArr.concat(el.parentNode);
       }
    });
    return parentArr;
  }

  find(string) {
    let findArr = [];
    this.args.forEach(function(el) {
      findArr = findArr.concat(Array.from(el.querySelectorAll(string)));
    });

    return findArr;
  }

  remove() {
    this.args.forEach(function(el) {
      el.remove();
    });
  }

  on(action, callback) {
    this.args.forEach(function(el) {
      el.addEventListener(action, callback);
    });
  }
}

module.exports = DOMNodeCollection;
