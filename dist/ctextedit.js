window.CTextEdit = (function() {
  function CTextEdit(options) {
    this.options = options;
    if (typeof $ === "undefined") {
      throw new Error("JQuery is not defined");
    }
    this.mainSelector = 'c-text-editor';
    this.textArea = $(this.options.selector);
    this.templates = new window.CTextEdit.Templates({
      mainSelector: this.mainSelector
    });
    this.width = typeof this.options.width === "undefined" ? this.textArea.width() : this.options.width;
    this.height = typeof this.options.height === "undefined" ? this.textArea.height() : this.options.height;
    this.render();
    this;
  }

  CTextEdit.prototype.render = function() {
    this.textArea.hide();
    $(this.templates.mainContainer).insertAfter(this.textArea);
    $('.c-text-editor').width(this.width);
    return $('.c-text-editor').height(this.height);
  };

  return CTextEdit;

})();

window.CTextEdit.Templates = (function() {
  function Templates(options) {
    this.options = options;
    this.toolBar = " <div class=\"toolbar\">\n   <div class=\"left\">\n      <a href=\"#\" class=\"select-italic-btn ctext-btn\">\n       <i class=\"fa fa-italic\"></i>\n     </a>\n        <a href=\"#\" class=\"select-bold-btn ctext-btn\">\n       <i class=\"fa fa-bold\"></i>\n     </a>\n</div>\n   <div class=\"right\">\n      <a href=\"#\" class=\"select-color-btn ctext-btn\">\n       <i class=\"fa fa-tint\"></i>\n     </a>\n     <a href=\"#\" class=\"select-smile-btn ctext-btn\">\n       <i class=\"fa fa-smile-o\"></i>\n     </a>\n     <a href=\"#\" class=\"attach-btn ctext-btn\">\n       <i class=\"fa fa-paperclip\"></i>\n     </a>\n   </div>\n </div>";
    this.editor = "<div class=\"editor\" contentEditable=\"true\"></div>";
    this.mainContainer = "<div class=\"" + this.options.mainSelector + "\">\n  " + this.toolBar + "\n  " + this.editor + "\n</div>";
  }

  return Templates;

})();
