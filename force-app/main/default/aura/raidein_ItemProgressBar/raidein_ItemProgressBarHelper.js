({
  componentSetting: function (component) {
    return component.find("util").parseTemplate('lightning:progressBar', {
      '@value': component.get("v.progress"),
      '@variant': component.get("v.variant"),
      '@size': component.get("v.size")
    });
  },

  create: function (component, name, attributes) {
    component.find("preview").createComponent(component, name, attributes);
  },

  renderCode: function (component) {
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
