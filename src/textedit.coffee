class window.CTextEdit
  constructor: (@options) ->
    if typeof $ is "undefined"
      throw new Error "JQuery is not defined"

    @mainSelector = 'c-text-editor'
    @textArea = $ @options.selector
    @templates = new window.CTextEdit.Templates { mainSelector: @mainSelector }
    @width    = if typeof @options.width is "undefined" then @textArea.width() else @options.width 
    @height   = if typeof @options.height is "undefined" then @textArea.height() else @options.height
    @render()

    @

  render: () ->
    @textArea.hide()
    $(@templates.mainContainer).insertAfter @textArea
    $('.c-text-editor').width @width
    $('.c-text-editor').height @height 
    $('.editor').height @height - $('.c-text-editor > .toolbar').height() 
    
