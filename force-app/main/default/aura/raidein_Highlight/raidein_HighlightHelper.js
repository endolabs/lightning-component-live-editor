({
  highlightCode: function (component, code, Prism) {
    // console.log("highlight code", code);

    if (Prism) {
      var div = component.find("myCode").getElement();
      div.innerHTML = Prism.highlight(code, Prism.languages.markup);
      Prism.highlightAll();
    } else {
      console.log('Prism undefined.');
    }
  }
})