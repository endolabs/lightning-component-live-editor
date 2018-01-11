({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:buttonIconStateful', {
      '@alternativeText': component.get("v.alternativeText"),
      '@selected': component.get("v.selected"),
      '@iconName': component.get("v.iconName"),
      '@size': component.get("v.size"),
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
