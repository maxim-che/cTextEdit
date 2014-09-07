class window.Templates
  constructor: (@options) ->

    @toolBar = """
                <div class="toolbar"></div>
               """
    
    @mainContainer = """
                      <div class="#{ @options.mainSelector }">#{ @toolBar }</div>"
                     """
