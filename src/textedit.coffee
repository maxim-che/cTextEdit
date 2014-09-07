class TextEdit
  constructor: (@selector) ->
    if typeof $ is "undefined"
      throw new Error "JQuery is not defined"
