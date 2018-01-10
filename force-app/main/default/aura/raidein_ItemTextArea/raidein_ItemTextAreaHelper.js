({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:textarea', {
      '@disabled': component.get("v.disabled"),
      '@label': component.get("v.label"),
      "@maxlength": component.get("v.maxlength"),
      "@messageWhenBadInput": component.get("v.messageWhenBadInput"),
      "@messageWhenTooLong": component.get("v.messageWhenTooLong"),
      "@messageWhenValueMissing": component.get("v.messageWhenValueMissing"),
      "@minlength": component.get("v.minlength"),
      "@name": component.get("v.name"),
      "@placeholder": component.get("v.placeholder"),
      "@readonly": component.get("v.readonly"),
      "@required": component.get("v.required"),
      "@title": component.get("v.title"),
      "@value": component.get("v.value"),
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