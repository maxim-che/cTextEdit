window.Templates = (function() {
  function Templates(options) {
    this.options = options;
    this.toolBar = "<div class=\"toolbar\"></div>";
    this.mainContainer = "<div class=\"" + this.options.mainSelector + "\">" + this.toolBar + "</div>\"";
  }

  return Templates;

})();

window.TextEdit = (function() {
  function TextEdit(options) {
    this.options = options;
    if (typeof $ === "undefined") {
      throw new Error("JQuery is not defined");
    }
    this.mainSelector = 'c-text-editor';
    this.textArea = $(this.options.selector);
    this.templates = new window.Templates({
      mainSelector: this.mainSelector
    });
    this.width = typeof this.options.width === "undefined" ? this.textArea.width() : this.options.width;
    this.height = typeof this.options.height === "undefined" ? this.textArea.height() : this.options.height;
    this.render();
    this;
  }

  TextEdit.prototype.render = function() {
    this.textArea.hide();
    $(this.templates.mainContainer).insertAfter(this.textArea);
    $('.c-text-editor').width(this.width);
    return $('.c-text-editor').height(this.height);
  };

  return TextEdit;

})();
