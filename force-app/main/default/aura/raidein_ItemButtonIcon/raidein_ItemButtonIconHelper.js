({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:buttonIcon', {
      '@alternativeText': component.get("v.alternativeText"),
      '@disabled': component.get("v.disabled"),
      '@iconName': component.get("v.iconName"),
      '@size': component.get("v.size"),
      '@type': component.get("v.type"),
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
