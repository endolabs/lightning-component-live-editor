({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:button', {
      '@label': component.get("v.label"),
      '@iconName': component.get("v.iconName"),
      '@iconPosition': component.get("v.iconPosition"),
      '@title': component.get("v.title"),
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
