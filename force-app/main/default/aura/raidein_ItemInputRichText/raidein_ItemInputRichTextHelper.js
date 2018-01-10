({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:inputRichText', {
      '@disabled': component.get("v.disabled"),
      "@messageWhenBadInput": component.get("v.messageWhenBadInput"),
      "@placeholder": component.get("v.placeholder"),
      "@title": component.get("v.title"),
      "@value": component.get("v.value"),
      "@disabledCategories": "FORMAT_TEXT", // TODO
      '@variant': component.get("v.variant")
    });
  },

  create: function (component, name, attributes) {
    component.find("preview").createComponent(component, name, attributes);
  },

  renderCode: function (component) {
    console.log("button render code.");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
