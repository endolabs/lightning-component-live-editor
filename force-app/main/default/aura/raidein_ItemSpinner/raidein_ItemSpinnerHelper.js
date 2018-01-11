({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:spinner', {
      '@alternativeText': component.get("v.alternativeText"),
      '@size': component.get("v.size"),
      '@title': component.get("v.title"),
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
