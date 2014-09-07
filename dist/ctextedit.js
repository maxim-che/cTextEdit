var TextEdit;

TextEdit = (function() {
  function TextEdit(selector) {
    this.selector = selector;
    if (typeof $ === "undefined") {
      throw new Error("JQuery is not defined");
    }
  }

  return TextEdit;

})();
