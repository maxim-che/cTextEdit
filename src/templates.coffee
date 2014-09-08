class window.CTextEdit.Templates
  constructor: (@options) ->

    @toolBar = """
                <div class="toolbar">
                  <div class="left">
                     <a href="#" class="select-italic-btn ctext-btn">
                      <i class="fa fa-italic"></i>
                    </a>
                       <a href="#" class="select-bold-btn ctext-btn">
                      <i class="fa fa-bold"></i>
                    </a>
               </div>
                  <div class="right">
                     <a href="#" class="select-color-btn ctext-btn">
                      <i class="fa fa-tint"></i>
                    </a>
                    <a href="#" class="select-smile-btn ctext-btn">
                      <i class="fa fa-smile-o"></i>
                    </a>
                    <a href="#" class="attach-btn ctext-btn">
                      <i class="fa fa-paperclip"></i>
                    </a>
                  </div>
                </div>
               """
    @editor  = """
                <div class="editor" contentEditable="true"></div>
               """

    @mainContainer = """
                      <div class="#{ @options.mainSelector }">
                        #{ @toolBar }
                        #{ @editor }
                      </div>
                     """
